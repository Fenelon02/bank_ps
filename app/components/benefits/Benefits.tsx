"use client"
import { BenefitsCarousel } from "./BenefitsCarousel";

export default function Benefits() {
    return(
        <div className="p-3 flex justify-center items-center flex-col gap-4 mt-10">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600">Aqui você faz seu dinheiro valer apena!</h2>
            <BenefitsCarousel />
        </div>
    )
}