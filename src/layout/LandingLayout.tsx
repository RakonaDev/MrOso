import { Outlet } from "react-router-dom";
import Footer from "../components/estructura/Footer";
import Header from "../components/estructura/Header";

export default function LandingLayout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}