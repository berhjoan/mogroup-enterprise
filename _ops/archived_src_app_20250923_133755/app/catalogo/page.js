"use client";
import React, { useState } from "react";
import ChatbotKAT from "../components/chat/ChatbotKAT";

export default function CatalogoPage(){
  const [items] = useState([
    { id: "SKU-001", nombre: "Bolsa Papel Kraft", categoria: "Empaque" },
    { id: "SKU-002", nombre: "Caja Pizza 12\"", categoria: "Alimentos" }
  ]);
  return (
    <main>
      <h2>Catálogo</h2>
      <ul style={{marginTop:12}}>
        {items.map(x => (<li key={x.id}>{x.id} — {x.nombre} — {x.categoria}</li>))}
      </ul>
      <div style={{marginTop:24}}>
        <ChatbotKAT />
      </div>
    </main>
  );
}
