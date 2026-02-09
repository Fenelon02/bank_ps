"use client"
import { useState } from "react";
import Button from "../ui/button/Button";

const navigationLinks = ["Home", "Sobre Nós", "Serviços", "Contato"]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className=" bg-white text-blue-600 border-b border-gray-200 shadow fixed w-full flex flex-col z-30">
     <div className="grid grid-cols-2  p-4 ">
       <div className="text-blue-600 text-2xl font-bold flex items-center lg:text-4xl">
          MyBank
       </div>
       <div className="flex justify-end items-center gap-2">

        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-2">
              {navigationLinks.map((link) => (
                <li key={link}>
                  <Button variant="link" size="medium">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Button variant="primary" size="medium">
          Criar conta
        </Button>


        <button className="cursor-pointer block lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list text-blue-600 w-9 h-9" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>


       </div>
     </div>
        {openMenu && (
            <nav className="flex flex-col p-4 gap-10 w-full h-screen bg-gray-100 rounded-b-4xl">
              {navigationLinks.map((link) => (
                <Button key={link} variant="outline" size="small">
                  {link}
                </Button>
              ))}              
            </nav>
        )}
    </header>
  );
}