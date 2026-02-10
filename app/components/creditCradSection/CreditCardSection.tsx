"use client"
import CreditCardCarousel from "./CreditCardCarousel";
import { useEffect, useState } from "react";
import { cardStyle, cardStyles } from "./CreditCardStyleVariants";

export default function CreditCardSection() {
    const [card, setCard] = useState<number>(1)

    return (
        <div id="CreditCards" className={cardStyles[card as 1 | 2 | 3].bg}>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 text-center mt-4">Aproveite e decole no 
                <span className="text-green-500">Brasil</span> 
                e no 
                <span className="text-yellow-500">Mundo</span> com um só <span className="">Cartão</span>
            </h2>
            <p className="text-gray-300 mb-2 text-center text-lg md:text-2xl">Desfrute de vantagens exclusivas com nosso cartão internacional.</p>
            <CreditCardCarousel onChangeCard={setCard} currCard={card} />
        </div>
    )
}