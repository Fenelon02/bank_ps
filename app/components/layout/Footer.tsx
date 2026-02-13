export default function Footer() {
    const currYear = new Date().getFullYear()

    return (
        <footer id="Contacts" className="w-full h-auto flex flex-col gap-4 md:gap-8 bg-blue-950 py-4 md:grid md:grid-cols-3 px-8 md:px-12 lg:px-20">
            <div>
                <h2 className="text-white text-xl font-bold md:text-2xl">MyBank</h2>
                <p className="text-gray-300 md:text-lg">Soluções financeiras digitais para facilitar seu dia dia com segurança e transparência.</p>
            </div>

            <nav>
                <h2 className="text-white text-xl font-bold md:text-2xl">Institucional</h2>
                <ul className="flex flex-col gap-2 md:text-lg">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Política de Privacidade</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre Nós</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Serviços</a></li>
                </ul>
            </nav>

            <address>
                <h2 className="text-white text-xl font-bold md:text-2xl">Contato</h2>
                <p className="text-gray-300 md:text-lg">Telefone: +55 (11) 1234-9635</p>
                <p className="text-gray-300 md:text-lg">Email: contato@mybank.com.br</p>
                <a className="text-gray-300 cursor-pointer md:text-lg" href="https://maps.app.goo.gl/YNJZDsKwp44qdrzW8">Endereço: Av. Brigadeiro Faria Lima, N⁰432 - São Paulo, SP, Brasil</a>
            </address>

            <div className="text-gray-500 md:col-span-3 flex text-center justify-center">    
                <p className="flex">©MyBank {currYear}. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}