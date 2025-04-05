import { Image } from "@unpic/react";
import Logo from "../../assets/logo.png"
import Container from "../utils/Container";
import { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  } , [])

  return (
    <>
      <header className="w-full fixed top-0 font-primary bg-gray-500 py-2 shadow-lg z-50">
        <Container>
          <main className="flex justify-between items-center">
            <Image src={Logo} alt="logo" width={scroll ? 80 : 140} height={scroll ? 80 : 140} className="transition-all duration-300 ease-in-out" />
            <nav>
              <ul className="flex gap-4 text-black items-center">
                <li className="text-sm cursor-pointer hover:text-amarillo transition-colors duration-300">Inicio</li>
                <li className="text-sm cursor-pointer hover:text-amarillo transition-colors duration-300">Sobre nosotros</li>
                <li className="text-sm cursor-pointer hover:text-amarillo transition-colors duration-300">Nuestros productos</li>
                <li className="text-sm cursor-pointer hover:text-amarillo transition-colors duration-300">Contacto</li>
              </ul>
            </nav>
          </main>
        </Container>
      </header>
    </>
  )
}