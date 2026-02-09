import { Building2, Landmark, File, Link, HandCoins, Braces, BanknoteArrowUp, ListChecks, Receipt } from 'lucide-react';

const gridItems = [
  {
    id: 1,
    name: "Conta Digital PJ",
    description: "Conta digital completa para empresas gerenciarem entradas, saídas e saldo em tempo real.",
    icon: <Landmark size={24} className='text-blue-800' />
  },
  {
    id: 2,
    name: "Pix Empresarial",
    description: "Receba e envie pagamentos via Pix com rapidez, segurança e disponibilidade 24/7.",
    icon: <Building2 size={24} className='text-blue-800' />

  },
  {
    id: 3,
    name: "Boletos Registrados",
    description: "Emita e gerencie boletos registrados com controle de vencimentos e pagamentos.",
    icon:  <File size={24} className='text-blue-800' />
  },
  {
    id: 4,
    name: "Links de Pagamento",
    description: "Crie links de pagamento personalizados para vender online de forma simples.",
    icon:  <Link size={24} className='text-blue-800' />
  },
  {
    id: 5,
    name: "Pix Recorrente",
    description: "Automatize cobranças recorrentes como mensalidades e assinaturas usando Pix.",
    icon: <HandCoins size={24} className='text-blue-800' />
  },
  {
    id: 6,
    name: "API e Integrações",
    description: "Integre sistemas financeiros usando APIs, webhooks e SDKs do banco.",
    icon: <Braces size={24} className='text-blue-800' />
  },
  {
    id: 7,
    name: "Gestão de Cobranças",
    description: "Centralize cobranças, acompanhe pagamentos e reduza inadimplência.",
    icon: <BanknoteArrowUp size={24} className='text-blue-800' />
  },
  {
    id: 8,
    name: "Pagamento em Lote",
    description: "Realize múltiplos pagamentos de uma só vez com agilidade e controle.",
    icon:  <ListChecks size={24} className='text-blue-800' />
  },
  {
    id: 9,
    name: "Emissão de Nota Fiscal",
    description: "Emita notas fiscais eletrônicas integradas às suas vendas e recebimentos.",
    icon: <Receipt size={24} className='text-blue-800' />
  }
];

export default function Services_Grid(){
    return (
        <div className="m-4 flex flex-col md:grid md:grid-cols-2 gap-4 ">
            {gridItems.map(item => (
                <div key={item.id} className="border border-gray-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex gap-2">
                        {item.icon}
                        <h3 className="text-lg md:text-xl font-semibold text-blue-800">{item.name}</h3>
                    </div>
                    <p className="text-sm md:text-xl text-gray-600 mt-1">{item.description}</p>
                </div>
            ))}
        </div>
    )
}