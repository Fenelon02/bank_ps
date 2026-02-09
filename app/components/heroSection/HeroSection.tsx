import Button from "../ui/button/Button";

export default function HeroSection() {
    return(
        <div className="bg-[url(@/public/images/HeroBg.jpg)] bg-cover bg-center h-screen w-full flex items-end md:items-start">
            <section className="font-sans text-white font-bold flex flex-col p-7 md:grid md:grid-rows-2 md:h-full">
                <div className="md:flex md:items-start md:flex-col md:mt-20 gap-2">
                    <h2 className="text-3xl md:text-5xl">Seu Banco em sua mão</h2>
                    <p className="text-xl md:text-2xl">Pensado em você para você.</p>    
                </div>
                <div className="md:flex md:items-end">
                    <Button variant="primary" size="xlarge" additionalClass="w-fit mt-2">
                      Criar conta
                    </Button>
                </div>
            </section>
        </div>
    )
}