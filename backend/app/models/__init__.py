from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Importar modelos aquí para que SQLAlchemy los reconozca
from .product import Product
# Los futuros modelos se importarán aquí
from .provider import Provider
from .price_list import PriceList
from .quote import Quote
