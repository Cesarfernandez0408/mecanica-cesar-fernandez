import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobreNosotros from "@/components/SobreNosotros";
import Servicios from "@/components/Servicios";
import Promociones from "@/components/Promociones";
import Precios from "@/components/Precios";
import Galeria from "@/components/Galeria";
import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreNosotros />
        <Servicios />
        <Promociones />
        <Precios />
        <Galeria />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
