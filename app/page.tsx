import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NosotrosServicios from "@/components/NosotrosServicios";
import PromocionesPrecios from "@/components/PromocionesPrecios";
import Galeria from "@/components/Galeria";
import UbicacionContacto from "@/components/UbicacionContacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NosotrosServicios />
        <PromocionesPrecios />
        <Galeria />
        <UbicacionContacto />
      </main>
      <Footer />
    </>
  );
}
