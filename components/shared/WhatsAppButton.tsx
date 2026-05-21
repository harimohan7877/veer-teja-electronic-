'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919928330252?text=नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है। क्या आप उपलब्ध हैं?"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}