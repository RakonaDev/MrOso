import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Container from "../utils/Container";
import { FaXTwitter } from "react-icons/fa6";
import { Image } from "@unpic/react";
import Logo from "../../assets/logo-negro.png"
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-10 bg-amarillo_footer">
        <Container>
          <div className="flex justify-between">
            <section className="w-1/3">
              <Image src={Logo} alt="logo" width={200} height={200} className="object-cover" />
            </section>
            <section className="space-y-6 w-1/3">
              <h3 className="font-primary">Nuestras Secciones: </h3>
              <ul className="text-black text-sm space-y-4">
                <li className="cursor-pointer font-secondary text-lg">Inicio</li>
                <li className="cursor-pointer font-secondary text-lg">Nosotros</li>
                <li className="cursor-pointer font-secondary text-lg">Nuestros Productos</li>
                <li className="cursor-pointer font-secondary text-lg">Contacto</li>
              </ul>
            </section>
            <section className="space-y-5 w-1/3">
              <h3 className="font-primary">Contacto: </h3>
              <ul className="text-black text-sm space-y-2">
                <li className="cursor-pointer flex gap-2 items-center">
                  <span className="font-medium flex gap-2 items-center">
                    <MdOutlineMail size={20} />
                    Email:
                  </span>
                  <a href="#">ventas@mroso.com</a>
                </li>
                <li className="cursor-pointer flex gap-2 items-center">
                  <span className="font-medium flex gap-2 items-center">
                    <FaPhoneAlt size={19} />
                    Telefono: </span>
                  <a href="#">+51 943 107 126</a>
                </li>
                <li className="cursor-pointer flex gap-2 items-center">
                  <span className="font-medium flex gap-2 items-center">
                    <FaMapMarkerAlt size={20} />
                    Dirección:
                  </span>
                  <a href="#">Av. Presidente Hayes, 15, Perú</a>
                </li>
              </ul>

              <h3 className="font-primary">Visítanos: </h3>
              <ul className="text-black text-sm flex gap-3 items-center">
                <li className="cursor-pointer">
                  <a href="#">
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">
                    <FaXTwitter size={20} />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </Container>
      </footer>
    </>
  )
}