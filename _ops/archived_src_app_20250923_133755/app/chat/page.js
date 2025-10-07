"use client";
import React from "react";
import ChatbotKAT from "../components/chat/ChatbotKAT";
export default function ChatPage(){
  return (
    <main>
      <h2>Chat Gemini — KAT</h2>
      <p>Consulta operativa y soporte 24/7 para MOGROUP-ENTERPRISE.</p>
      <div style={{marginTop:12,maxWidth:840}}>
        <ChatbotKAT />
      </div>
    </main>
  );
}
