"use client"
import { BenefitsCarousel } from "./BenefitsCarousel";

export default function Benefits() {
    return(
        <div className="py-3 px-8 md:px-12 flex justify-center items-center flex-col gap-10 my-7">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">Aqui você faz seu dinheiro valer apena!</h2>
            <BenefitsCarousel />
        </div>
    )
}