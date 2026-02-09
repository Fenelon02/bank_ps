import CreditCardCarousel from "./CreditCardCarousel";
import Button from "../ui/button/Button";

export default function CreditCardSection() {
    return (
        <div className="bg-blue-800 p-3 max-w-screen">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 text-center mt-4">Aproveite e decole no <span className="text-green-500">Brasil</span> e no <span className="text-yellow-500">Mundo</span> com um só <span className="">Cartão</span></h2>
            <p className="text-gray-300 mb-2 text-center text-lg md:text-2xl">Desfrute de vantagens exclusivas com nosso cartão internacional.</p>
            <CreditCardCarousel />
            <Button additionalClass="mx-auto m-4 block" variant="secondary" size="large">Solicitar Cartão</Button>
        </div>
    )
}