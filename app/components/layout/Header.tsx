"use client"
import { useState } from "react";
import Button from "../ui/button/Button";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className=" bg-white text-blue-600 border-b border-gray-200 shadow fixed w-full flex flex-col z-30">
     <div className="grid grid-cols-2  p-4 ">
       <div className="text-blue-600 text-2xl font-bold flex items-center">
          MyBank
       </div>
       <div className="flex justify-end items-center gap-2">
        <Button variant="primary" size="medium">
          Criar conta
        </Button>
        <button className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list text-blue-600 w-9 h-9" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
       </div>
     </div>
        {openMenu && (
            <nav className="flex flex-col p-4 gap-10 w-full h-screen bg-gray-100 rounded-b-4xl">

              <Button variant="outline" size="small">
                Home
              </Button>
              <Button variant="outline" size="small">
                Sobre Nós
              </Button>
              <Button variant="outline" size="small">
                Serviços
              </Button>
              <Button variant="outline" size="small">
                Contato
              </Button>
              
            </nav>
        )}
    </header>
  );
}