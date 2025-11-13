import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ConfigAlert } from "@/components/ConfigAlert";
import { CONTACT_CONFIG } from "@/config/whatsapp";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero onContactClick={scrollToContact} />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
