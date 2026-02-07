export default function Footer() {
    return (
        <footer className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-cyan-950 p-4">
            <p className="text-sm text-gray-300">© 2026 MyBank. Todos os direitos reservados.</p>
            <div className="flex flex-col gap-4">
                <a href="#" className="text-gray-300 hover:text-gray-400">Política de Privacidade</a>
                <a href="#" className="text-gray-300 hover:text-gray-400">Termos de Uso</a>
                <a href="#" className="text-gray-300 hover:text-gray-400">Contato</a>
                <p className="text-gray-300">Email: contato@mybank.com</p>
                <p className="text-gray-300">Telefone: +55 (11) 1234-5678</p>
            </div>
        </footer>
    )
}