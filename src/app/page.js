import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MobileContactButtons from "./components/mobileContact";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Testimonials from "./components/testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileContactButtons />
    </main>
  );
}
