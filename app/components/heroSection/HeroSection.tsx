import Button from "../ui/button/Button";

export default function HeroSection() {
    return(
        <div className="bg-[url(@/public/images/HeroBg.png)] bg-cover bg-center h-screen w-full flex items-end">
            <section className="font-sans text-white font-bold flex flex-col p-7">
                <h2 className="text-3xl">Seu Banco em sua mão</h2>
                <p className="text-xl">Pensado em <span className="text-blue-600">você</span> para <span className="text-blue-600">você</span></p>
                <Button variant="primary" size="large" additionalClass="w-fit mt-2">
                  Criar conta
                </Button>
            </section>
        </div>
    )
}