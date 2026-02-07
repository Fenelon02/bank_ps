import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn_components/ui/carousel"
import MyCardDiamond from "@/public/svg/MyCardDiamond"
import MyCardGold from "@/public/svg/MyCardGold"
import MyCardSilver from "@/public/svg/MyCardSilver"

const cards = [
    {
      id: 3,
      name: "MyCard Silver",
      limit: "Limite inicial até R$ 5.000",
      benefits: [
        "Controle total pelo app",
        "Cartão sem anuidade",
        "Fatura digital",
        "Aceito internacionalmente"
      ],
      image: <MyCardSilver />
    },
    {
      id: 2,
      name: "MyCard Gold",
      limit: "Limite até R$ 20.000",
      benefits: [
        "Programa de pontos",
        "Descontos em parceiros",
        "Parcelamento facilitado",
        "Seguro de compras"
      ],
      image: <MyCardGold />
    },
  {
    id: 1,
    name: "MyCard Diamond",
    limit: "Limite acima de R$ 50.000",
    benefits: [
      "Sala VIP em aeroportos",
      "Cashback em todas as compras",
      "Seguro viagem internacional",
      "Atendimento personalizado 24h"
    ],
    image: <MyCardDiamond />
  },
]


export default function CreditCardCarousel() {
    return (
        <div className="p-4 flex items-center justify-center">
            <Carousel className="max-w-[70vw]">
                <CarouselContent className="mx-2">
                    {cards.map((card) => (
                        <CarouselItem key={card.id} className="border border-gray-50 flex items-center justify-center rounded-lg p-4 flex-col mx-2">
                                <div className="w-[90%] md:max-w-[30vh] max-h-[40vh] md:max-h-[60vh] flex items-center justify-center">{card.image}</div>
                                <h3 className="text-lg text-white font-bold mt-2">{card.name}</h3>
                                <p className="text-sm text-gray-200">{card.limit}</p>
                                <ul className="text-sm text-gray-300 mt-2">
                                    {card.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-gray-200 rounded-full mr-2"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}