import LogoMarquee from "./LogosMarquee";

export default function MarqueeSection() { 
    return(
        <div className=" border-y border-gray-400 shadow-2xl shadow-gray-400 p-2">
            <h2 className="text-2xl text-blue-600 font-bold text-center my-2">Nossos Parceiros Comerciais</h2>
            <LogoMarquee />
        </div>
    )
}