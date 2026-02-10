import LogoMarquee from "./LogosMarquee";

export default function MarqueeSection() { 
    return(
        <div className="border-y border-gray-200 lg:gap-4 lg:my-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold text-center mt-4">Nossos Parceiros Comerciais</h2>
            <LogoMarquee />
        </div>
    )
}