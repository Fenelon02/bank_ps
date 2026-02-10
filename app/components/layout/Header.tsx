"use client"
import { useState } from "react";
import Button from "../ui/button/Button";
import Link from "next/link";

const navigationLinks = [
  {
    section:"Home",
    id:"#Home"
  }, 
  {
    section: "Serviços",
    id:"#Services"
  }, 
  {
    section: "Cartões",
    id:"#CreditCards"
  },
  {
    section:"Contato",
    id:"#Contacts"
  }
]



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
                <li key={link.section}>
                  <Link href={link.id}>
                    <Button variant="link" size="medium">
                      {link.section}
                    </Button>
                  </Link>
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
            <nav className="p-4 w-full h-screen bg-gray-100 rounded-b-4xl">
              <ul className="flex flex-col gap-10">
                {navigationLinks.map((link) => (
                  <li key={link.section}>
                    <Link href={link.id}>
                      <Button variant="link" size="medium" onClick={() => {
                        setOpenMenu(!openMenu)
                      }}>
                        {link.section}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>             
            </nav>
        )}
    </header>
  );
}