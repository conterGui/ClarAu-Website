import { Camera, Heart } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Max" },
  { src: gallery2, alt: "Sagie" },
  { src: gallery3, alt: "Max" },
  { src: gallery4, alt: "Sagie" },
  { src: gallery5, alt: "Aki" },
  { src: gallery6, alt: "Xico" },
];

export const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Momentos Especiais
            </h2>
            <Heart className="w-8 h-8 text-accent fill-accent" />
          </div>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Registros de momentos felizes com os pets que cuido
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover-lift animate-fade-in-delay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
          <p className="text-lg text-foreground">
            Cada foto conta uma história de carinho, diversão e cuidado! 📸💕
          </p>
        </div>
      </div>
    </section>
  );
};
