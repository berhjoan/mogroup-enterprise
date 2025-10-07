import pandas as pd
import psycopg2
from psycopg2.extras import execute_values
import os
from dotenv import load_dotenv

load_dotenv()

# Conexión a PostgreSQL
conn = psycopg2.connect(os.getenv('DATABASE_URL'))
cur = conn.cursor()

# Leer el Excel de taxonomía
df = pd.read_excel('MOGROUP-JUEVES-02-OCTUBRE.xlsx', sheet_name='MASTER')

# Limpiar datos
df = df.dropna(subset=['CODIGOUNICO', 'CLASIFICACION', 'CATEGORIA', 'SUBCATEGORIA'])

# Insertar Clasificaciones únicas
clasificaciones = df[['CLASIFICACION']].drop_duplicates()
for idx, row in clasificaciones.iterrows():
    nombre = row['CLASIFICACION']
    codigo = nombre.replace(' ', '_').upper()
    cur.execute(
        "INSERT INTO clasificaciones (codigo, nombre) VALUES (%s, %s) ON CONFLICT (codigo) DO NOTHING",
        (codigo, nombre)
    )

# Insertar Categorías únicas
categorias = df[['CLASIFICACION', 'CATEGORIA']].drop_duplicates()
for idx, row in categorias.iterrows():
    clasif_codigo = row['CLASIFICACION'].replace(' ', '_').upper()
    cat_nombre = row['CATEGORIA']
    cat_codigo = f"{clasif_codigo}_{cat_nombre.replace(' ', '_').upper()}"
    
    cur.execute("SELECT id FROM clasificaciones WHERE codigo = %s", (clasif_codigo,))
    clasif_id = cur.fetchone()[0]
    
    cur.execute(
        "INSERT INTO categorias (clasificacion_id, codigo, nombre) VALUES (%s, %s, %s) ON CONFLICT (codigo) DO NOTHING",
        (clasif_id, cat_codigo, cat_nombre)
    )

# Insertar Subcategorías y palabras clave
subcategorias = df[['CLASIFICACION', 'CATEGORIA', 'SUBCATEGORIA', 'PALABRASCLAVES']].drop_duplicates()
for idx, row in subcategorias.iterrows():
    clasif_codigo = row['CLASIFICACION'].replace(' ', '_').upper()
    cat_nombre = row['CATEGORIA']
    cat_codigo = f"{clasif_codigo}_{cat_nombre.replace(' ', '_').upper()}"
    sub_nombre = row['SUBCATEGORIA']
    sub_codigo = f"{cat_codigo}_{sub_nombre.replace(' ', '_').upper()}"
    
    cur.execute("SELECT id FROM categorias WHERE codigo = %s", (cat_codigo,))
    result = cur.fetchone()
    if not result:
        continue
    cat_id = result[0]
    
    cur.execute(
        "INSERT INTO subcategorias (categoria_id, codigo, nombre) VALUES (%s, %s, %s) ON CONFLICT (codigo) DO NOTHING RETURNING id",
        (cat_id, sub_codigo, sub_nombre)
    )
    result = cur.fetchone()
    if result:
        sub_id = result[0]
    else:
        cur.execute("SELECT id FROM subcategorias WHERE codigo = %s", (sub_codigo,))
        sub_id = cur.fetchone()[0]
    
    # Insertar palabras clave
    if pd.notna(row['PALABRASCLAVES']):
        palabras = [p.strip() for p in str(row['PALABRASCLAVES']).split(',')]
        for palabra in palabras:
            if palabra:
                cur.execute(
                    "INSERT INTO palabras_clave (subcategoria_id, palabra) VALUES (%s, %s) ON CONFLICT DO NOTHING",
                    (sub_id, palabra.lower())
                )

conn.commit()
cur.close()
conn.close()

print("✅ Taxonomía importada exitosamente")
