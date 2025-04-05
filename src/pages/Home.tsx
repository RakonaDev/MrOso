import { Image } from "@unpic/react";
import InicioBanner from "../assets/banners/bannerInicio.webp"
import InicioBanner2 from "../assets/banners/bannerInicio2.webp"
import InicioBanner3 from "../assets/banners/bannerInicio3.webp"
import Container from "../components/utils/Container";
import AsideQuienes from "../assets/images/asideQuienes.jpg"
// import Vision from "../assets/images/vision.gif"
import { motion } from "motion/react";
import Cafe from "../assets/productos/cafe.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Vision from "../assets/icons/vision.svg"
import Mision from "../assets/icons/mision.svg"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header className="w-full h-screen flex justify-center items-center relative">
        <div className="absolute w-full h-screen">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className="w-full h-screen"
          >
            <SwiperSlide>
              <Image src={InicioBanner} alt="banner" height={500} className="w-full object-cover h-screen brightness-50" layout="fullWidth" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={InicioBanner2} alt="banner" height={500} className="w-full object-cover h-screen brightness-50" layout="fullWidth" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={InicioBanner3} alt="banner" height={500} className="w-full object-cover h-screen brightness-50" layout="fullWidth" />
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="z-10 font-primary text-white text-2xl">Cada Ingrediente Cuenta, Cada Sándwich Enamora</h1>
      </header>
      <section className="w-full py-10 bg-oscuro">
        <Container>
          <section className="w-full flex gap-1 items-center">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-1/2 px-7 py-8 rounded-2xl text-white space-y-20"
            >
              <div className="w-full h-auto">
                <h1 className="font-primary text-2xl">
                  ¿ Quiénes <span className="text-amarillo">Somos ?</span>
                </h1>
                <p className="mt-3">En Mr. Oso, no solo preparamos sándwiches, creamos experiencias culinarias que te transportan directamente a las calles de Perú. Cada bocado es un viaje de sabores, una explosión de ingredientes frescos y auténticos que capturan la esencia de nuestra rica gastronomía.</p>
                <p>En Mr. Oso, nos apasiona utilizar ingredientes de la más alta calidad, seleccionados cuidadosamente para garantizar que cada sándwich sea una experiencia inolvidable. Nuestro pan, horneado diariamente, es el lienzo perfecto para nuestros rellenos, que incluyen jugosos cortes de carne, pollo marinado en especias peruanas, y vegetales frescos que aportan un toque de frescura y color.</p>
              </div>
              <div className="w-full flex xl:flex-row flex-col gap-5">
                <div className="space-y-4 xl:w-1/2 w-full border-4 border-[#202020] rounded-2xl p-3 flex flex-col items-center duration-500 transition-all hover:border-amarillo cursor-default">
                  <Image src={Mision} width={60} height={60} className="mx-auto" />
                  <h2 className="text-amarillo font-primary text-lg">Misión</h2>
                  <p className="text-justify text-sm">Nuestra misión es deleitar a nuestros clientes ofreciendo sándwiches gourmet elaborados con ingredientes frescos de la más alta calidad. Nos esforzamos por brindar una experiencia culinaria memorable en cada bocado.</p>
                </div>
                <div className="space-y-4 xl:w-1/2 w-full flex flex-col items-center border-4 border-[#202020] rounded-2xl p-3 duration-500 transition-all hover:border-amarillo cursor-default">
                  <Image src={Vision} width={60} height={60} className="mx-auto" />
                  <h2 className="text-amarillo font-primary text-lg">Visión</h2>
                  <p className="text-justify text-sm">Nuestra visión es convertirnos en un referente en el mercado de sándwiches gourmet, reconocidos por nuestra calidad superior, la frescura de nuestros ingredientes y la innovación en nuestras recetas.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-1/2"
            >
              <Image src={AsideQuienes} alt="aside" width={400} height={400} className="w-full object-cover rounded-2xl" />
            </motion.div>
          </section>
        </Container>
      </section>
      <section className="py-10">
        <Container>
          <h3 className="font-secondary text-center text-2xl mb-10">Nuestros <span className="text-amarillo_oscuro">Productos</span></h3>
          <section className="w-full flex gap-5 items-center justify-between">
            <div className="w-1/2">
              <h4 className="font-primary tracking-wide text-lg">Café <span className="text-amarillo_oscuro">en taza</span></h4>
              <p className="mt-3 font-medium">El café es una experiencia sensorial que va más allá de una simple bebida. Es un ritual, un compañero, un momento de placer y energía.</p>
            </div>
            <div className="w-1/2 flex justify-center overflow-hidden">
              <Image src={Cafe} alt="cafe" width={500} height={500} className="object-cover" />
            </div>
          </section>
        </Container>
      </section>

    </div>
  )
}