import Header from "./Header";
import { Quote } from "lucide-react";
import Seo from "./Seo";

function About() {
  return (
    <>
      <Seo
        title="Fondation Khadija Tnana | À propos"
        description="Découvrez la mission, la vision et l'origine de la Fondation Khadija Tnana, dédiée à l'art et à la culture au Maroc."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fondation Khadija Tnana",
          url: `${window.location.origin}/about`,
          description:
            "Fondation culturelle dédiée à la promotion de l'art, des artistes et du patrimoine marocain.",
        }}
      />
      <div className="flex min-h-screen flex-col bg-black/90 px-4 py-8 text-white md:py-12">
        <Header />
        <main className="relative mx-auto flex w-full max-w-4xl flex-1 items-center justify-center py-10 md:py-16">
          <article className="relative w-full rounded-3xl border border-dorado/20 bg-black/40 px-6 py-10 shadow-2xl md:px-12 md:py-16">
            <Quote className="absolute -top-4 left-4 h-10 w-10 text-dorado md:-top-6 md:left-6 md:h-12 md:w-12" />
            <blockquote className="relative z-10 text-center italic text-gray-200">
              <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-2xl">
                "Désireuse de soutenir les efforts pour promouvoir le domaine artistique et créatif au Maroc,
                et de renforcer le rôle de ce secteur dans le développement du patrimoine culturel et
                civilisationnel de notre pays, j'ai envisagé la création d'un espace permanent de rencontre
                et d'échange entre les artistes et créateurs marocains et internationaux. Ainsi est née une
                fondation, à laquelle j'ai offert ma maison, et que j'ai baptisée « Fondation Khadija Tannana
                pour la culture et l'art »"
              </p>
              <footer className="not-italic font-semibold text-dorado">
                — Khadija Tnana
                <img
                  src="/khadija.webp"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto mt-6 w-full max-w-xs rounded-2xl border border-dorado/20 shadow-xl"
                  alt="Portrait de Khadija Tnana"
                />
              </footer>
            </blockquote>
          </article>
        </main>
      </div>
    </>
  );
}

export default About;