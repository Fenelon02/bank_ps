"use client"
import Button from "../ui/button/Button";
import { useState } from "react";

const bankAccountFAQ = [
  {
    id: 1,
    question: "A conta possui taxa de manutenção?",
    answer: "Não. Nossa conta é 100% gratuita, sem taxas mensais."
  },
  {
    id: 2,
    question: "Quem pode abrir uma conta?",
    answer: "Qualquer pessoa maior de 18 anos com CPF válido pode abrir uma conta."
  },
  {
    id: 3,
    question: "A conta oferece cartão de crédito?",
    answer: "Sim. Após análise, você pode solicitar um cartão de crédito internacional."
  },
  {
    id: 4,
    question: "O cartão possui anuidade?",
    answer: "Não. Todos os nossos cartões são livres de anuidade."
  },
  {
    id: 5,
    question: "Consigo acompanhar meus gastos?",
    answer: "Sim. O app mostra seus gastos em tempo real e oferece controle financeiro."
  },
  {
    id: 6,
    question: "A conta é segura?",
    answer: "Sim. Utilizamos criptografia e autenticação para proteger seus dados e seu dinheiro."
  },
  {
    id: 7,
    question: "Posso usar a conta no exterior?",
    answer: "Sim. A conta e o cartão funcionam para compras nacionais e internacionais."
  },
  {
    id: 8,
    question: "Como encerrar minha conta?",
    answer: "Você pode encerrar a conta diretamente pelo aplicativo, de forma simples e rápida."
  }
];


export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
    
    return (
        <div className="m-4 flex flex-col items-center justify-center gap-4 px-8 md:px-12">
            <h2 className="text-3xl font-bold text-center text-blue-600">Dúvidas Frequentes</h2>
            {bankAccountFAQ.map((faq) => {
                return (
                    <div key={faq.id} className="w-full max-w-2xl lg:max-w-4xl p-2 flex flex-col items-center">
                        <Button additionalClass={`font-semibold w-full ${open === faq.id ? "border-blue-600 border-b-transparent rounded-b-none" : "rounded-lg"}`}
                          variant="outline" size="large" onClick={() => setOpen(open === faq.id ? null : faq.id)}>
                          {faq.question} 
                        </Button>
                        {open === faq.id && <div className="p-4 border border-blue-600 rounded-b-lg w-full">{faq.answer}</div>}
                    </div>
                )
            })}
        </div>
    )
}