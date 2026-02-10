import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "../shadcn_components/ui/carousel"
import MyCardDiamond from "@/public/svg/MyCardDiamond"
import MyCardGold from "@/public/svg/MyCardGold"
import MyCardSilver from "@/public/svg/MyCardSilver"
import Button from "../ui/button/Button"
import { Dispatch, SetStateAction, useEffect, useState } from "react"



type CreditCardCarouselProps={
  onChangeCard: Dispatch<SetStateAction<number>>,
  currCard: number
}

const cards = [
    {
      id: 1,
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
    id: 3,
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

export default function CreditCardCarousel({onChangeCard, currCard}:CreditCardCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    onChangeCard(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      const selected = api.selectedScrollSnap() + 1
      onChangeCard(selected)
    })

  }, [api])


  return (
    <div className="p-4 flex items-center justify-center ">
      <Carousel setApi={setApi} className="max-w-[70vw] lg:max-w-[80vw]">
        <CarouselContent className="mx-3">
          {cards.map((card) => (
            <CarouselItem key={card.id} className="flex items-center justify-center rounded-lg p-4 flex-col mx-2 lg:grid lg:grid-cols-2">
              <div className="w-[90%] md:max-w-[50vw] max-h-[40vh] md:max-h-[60vh] lg:flex lg:items-center lg:justify-center">
                <div className="w-full h-full flex items-center justify-center">{card.image}</div>
              </div>
              <div className="lg:flex lg:justify-center lg:items-center lg:flex-col gap-4">
                <h3 className="text-lg md:text-3xl text-white font-bold mt-2">{card.name}</h3>
                <p className="text-sm md:text-xl text-gray-200">{card.limit}</p>
                <ul className="text-sm md:text-lg text-gray-300 mt-2">
                  {card.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button additionalClass="mx-auto m-4 block" variant="transparent" size="large">Solicitar Cartão</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

      </Carousel>
    </div>
  )
}