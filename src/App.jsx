import { useRef, useState } from "react";

import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ObjectiveSection } from "./Objective";
import { Mail, Building, Phone, Home, ShieldPlus, Eye } from "lucide-react";
import Loading from "./Loading";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "./Seo";
import EventsSection from "./EventsSection";

const MOTION_EASE = [0.4, 0, 0.2, 1];
const MOTION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
};
const MOTION_STAGGER = 0.08;

const teamMembers = [
  {
    role1: "Fondatrice",
    name: "Khadija Tnana",
    role: "Artiste plasticienne et dramaturge",
    image: "khadija.webp",
    gridCol: "md:col-start-2 col-start-1",
    born: " ",
    details: "Née à Tétouan, ancienne professeure en sciences politiques,Présidente de la Fondation Khadija Tnana pour la culture et les arts,Membre de l'Association marocaine des arts plastiques,Ancienne adjointe au maire de la ville de Fès,Ancienne membre du conseil administratif des festivals des pays arabes.Œuvres : Tata Mbarka, Louiza, Najat, Le Mur, et Hlima.",
  },
  {
    role1: "Premier Vice Président",
    name: "Mostafa Roumli",
    role: "Artiste plasticien",
    image: "mostafa.webp",
    gridCol: "md:col-start-1",
    born: "Née à Touissit",
    details: "CCommissaire de nombreuses expositions, Directeur fondateur de la Biennale Internationale de Casa Maroc, Directeur général du magazine Art du Maroc et Fondateur de la résidence Ifitry.",
  },

  {
    role1: "Trésorière",
    name: "Hanan Chamcham",
    role: "Femme d'affaires",
    image: "chemcham.webp",
    gridCol: "",
    born: "Née à Tétouan",
    details:
      "A obtenu son diplôme de gestion des entreprises en 2005. Avant de devenir femme d’affaires et de bâtir sa société, elle a travaillé dans plusieurs grandes entreprises en tant responsable commercial, ce qui lui permis d’accumuler une expérience riche et importantedans le commerce, ainsi qu’un savoir-faire dans le domainedes affaires, et enfin de décider ouvrir son propre projet,fabrication et vente de chocolat de haute qualité.",
  },
  {
    role1: "Vice Trésoriére",
    name: "Imane Tnana",
    role: "Pharmacienne  ",
    image: "imanet.webp",
    gridCol: "",
    born: "Née à Tétouan",
    details: "Étude de pharmacie à Grenade,Espagne",
  },
  {
    role1: "Conseillére",
    name: "Hanan El Amrani",
    role: "Directrice Marketing",
    image: "mama.jpg",
    gridCol: "",
    born: "",
    details: "Diplômée en gestion d’entreprises et en marketing, elle maîtrise l’arabe, le français et l’espagnol. Engagée dans le tissu associatif à vocation sociale et humanitaire. ",
  },

  {
    role1: "Vice-Secrétaire General",
    name: "Mariam Tnana",
    role: "Professeure universitaire",
    image: "mariam.webp",
    gridCol: "col-start-3",
    born: "Née à Tétouan",
    details:
      "Ingénieure en informatique, elle a obtenu son diplôme de l'ENSI de Caen en 1989. Elle a commencé sa carrière en tant qu'ingénieure de développement informatique dans une société à Toulouse, où elle a travaillé de 1990 à 1999. Par la suite, elle a intégré la fonction publique marocaine dans l'enseignement supérieur. En 2009, elle a soutenu son doctorat en informatique à l'INSA de Rouen. Actuellement, elle est professeure de l'enseignement supérieur à l'ENSA de Tanger, où elle forme les futures générations d'ingénieurs dans le domaine des réseaux informatiques.",
  },
];

function App() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 400]);
  const opas = useTransform(scrollY, [0, 200], [1, 0]);
  const y2 = useTransform(scrollY, [0, 300], [0, -450]);

  const y5 = useTransform(scrollY, [0, 300], [0, -650]);
  const y3 = useTransform(scrollY, [200, 600], [0, -300]);
  const x1 = useTransform(scrollY, [1500, 1700], [0, -700]);
  const x2 = useTransform(scrollY, [1400, 1800], [0, 2000]);
  const opa = useTransform(scrollY, [1700, 1800], [0, 1]);

  const [isLoading, setIsLoading] = useState(true);
  const [expandedMember, setExpandedMember] = useState(null);

  const handleMemberClick = (index) => {
    setExpandedMember((current) => (current === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
      return undefined;
    }

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (expandedMember === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpandedMember(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedMember]);
  const scrollToSection = () => {
    const target = sectionRef.current;
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Seo
        title="Fondation Khadija Tnana | Art et culture au Maroc"
        description="Fondation culturelle dédiée à la création artistique, aux expositions, à la formation et au soutien des talents marocains."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fondation Khadija Tnana",
          url: window.location.origin,
          description:
            "Fondation culturelle dédiée à l'art, aux expositions et au soutien des artistes au Maroc.",
        }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION_DURATION.slow, ease: MOTION_EASE }}
            className="w-full min-h-screen"
          >
            <motion.header
              className="relative overflow-hidden py-8 md:py-16 z-30"
              style={{ y: y1 }}
            >
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-white"
              >
                Saltar al contenido
              </a>
              <motion.nav
                aria-label="Navigation principale"
                initial={{ opacity: 0.5, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: MOTION_DURATION.slow, ease: MOTION_EASE }}
                className="relative flex flex-col items-center justify-between gap-6 container mx-auto px-4 md:flex-row md:gap-10"
              >
                <div className="text-center text-white">
                  <button
                    type="button"
                    onClick={scrollToSection}
                    className="motion-standard hover:scale-[1.02]"
                  >
                    <span className="text-xl font-medium text-dorado md:text-3xl lg:text-4xl">
                      Notre Équipe
                    </span>
                  </button>
                  <div className="mt-2 flex justify-center">
                    <div className="h-1 w-16 bg-dorado"></div>
                  </div>
                </div>
                <div className="text-center text-white">
                  <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
                    KhadijaTnana
                  </h1>
                  <p className="text-2xl font-medium text-dorado md:text-3xl lg:text-4xl">
                    Fondation
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="h-1 w-16 bg-dorado"></div>
                  </div>
                </div>
                <Link to="/about" className="motion-standard text-center text-white hover:scale-[1.02]">
                  <span className="text-xl font-medium text-dorado md:text-3xl lg:text-4xl">
                    À propos
                  </span>
                  <div className="mt-2 flex justify-center">
                    <div className="h-1 w-16 bg-dorado"></div>
                  </div>
                </Link>
              </motion.nav>
            </motion.header>

            <motion.main
              id="main-content"
              className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8"
            >
              <motion.div
                className="z-0 space-y-4"
                style={{ y: y2, opacity: opas }}
              >
                <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                  UN ESPACE DÉDIÉ À{" "}
                  <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                    l&apos;ÉCHANGE
                  </span>{" "}
                  ET À LA PROMOTION DE LA CRÉATIVITÉ AU MAROC
                </h2>
              </motion.div>

              <motion.img
                style={{ y: y5 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
                src="hero.webp"
                  className="md:max-w-96 max-w-72 object-cover mx-auto shadow-[-12px_19px_20px_0px] z-50"
                  alt="Bannière principale de la fondation"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
              />
            </motion.main>

            <motion.section style={{ y: y3 }} className="py-24 md:py-32">
              <div className="relative">
                <img
                  src="logot.svg"
                  alt="Logo de la Fondation Khadija Tnana"
                  className="mx-auto h-40 w-auto md:h-40 lg:h-64"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute top-full h-full  w-full transform rotate-180    opacity-50 mt-4 z-50 ">
                  {" "}
                  {/* Aumenta el margen superior aquí */}
                  <div className="relative mx-auto h-40 w-auto md:h-40 lg:h-64 overflow-hidden">
                    <img
                      src="logot.svg"
                      alt="Logo reflejado de la Fondation Khadija Tnana"
                      className="h-full w-full brightness-90 backdrop-blur-sm rotate-180 scale-x-[-1]"
                      loading="lazy"
                      decoding="async"
                      style={{
                        maskImage:
                          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 60%)",
                        WebkitMaskImage:
                          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 60%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            <div
              id="body1"
              className="flex flex-col items-center gap-12 overflow-hidden px-4 md:flex-row md:mx-8"
            >
              <motion.img
                style={{ x: isMobile ? 0 : x1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
                src="mujer.webp"
                className="order-2 z-40 h-[40vh] object-cover mx-auto max-w-72 shadow-[-12px_19px_20px_0px] md:order-2 md:h-full md:max-w-96"
                  alt="Illustration artistique"
                  loading="lazy"
                  decoding="async"
              />

              <motion.h2
                style={{
                  x: isMobile ? 0 : x2,
                }}
                className="order-1 z-30 text-3xl font-light leading-tight text-white md:order-1 md:text-4xl lg:text-5xl"
              >
                SOUTENIR LES TALENTS CRÉATIFS, PROMOUVOIR LA CULTURE MAROCAINE,
                ET CÉLÉBRER LA{" "}
                <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">DIVERSITÉ ARTISTIQUE</span>
              </motion.h2>
            </div>

            <motion.div
              style={{ opacity: isMobile ? 1 : opa }}
              id="body1"
              className="mx-auto grid items-center gap-8 px-4 py-10 md:grid-cols-2 md:px-8"
            >
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                  ENCOURAGER LA
                  <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                    CRÉATIVITÉ FEMININE
                  </span>{" "}
                  ET SOUTENIR LA
                  <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                    JEUNESSE ARTISTIQUE
                  </span>
                </h2>
              </div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
                src="mujertumbada.webp"
                className="order-2 z-40 max-w-72 object-cover mx-auto shadow-[-12px_19px_20px_0px] md:order-2 md:max-w-full"
                  alt="Jeune créatrice dans un contexte artistique"
                  loading="lazy"
                  decoding="async"
              />
            </motion.div>

            <ObjectiveSection />
            <EventsSection />

            <section
              ref={sectionRef}
              className="px-4 py-16 relative bg-black min-h-screen"
              aria-labelledby="team-title"
            >
              <div className="flex flex-col justify-center">

              <h2 id="team-title" className="text-4xl font-krona text-white text-center mb-4">
                Notre Équipe
              </h2>
              <p className="font-inter text-white flex items-center mx-auto space-x-1 text-center mb-12">
                <Eye className="w-4 h-4" />
                <span>Cliquez sur nos membres pour plus d'informations. </span>
              </p>
              </div>

              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: MOTION_DURATION.normal,
                        delay: index * MOTION_STAGGER,
                        ease: MOTION_EASE,
                      },
                    }}
                    className="team-member"
                  >
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded={expandedMember === index}
                      aria-controls="member-modal"
                      aria-label={`Voir les détails de ${member.name}`}
                      className="relative mx-auto block w-full max-w-sm overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      onClick={() => handleMemberClick(index)}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[400px] grayscale object-cover transition-all duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="team-member-content pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                        <div className="relative">
                          <h2>
                            {member.name}
                            <br />
                            <span className="text-dorado">{member.role1}</span>
                          </h2>
                          <p>
                            {member.role}
                            <br />
                            {member.born}
                            <br />
                          </p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
              <AnimatePresence>
                {expandedMember !== null && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
                      className="fixed inset-0 bg-gradient-to-t from-black/90 to-transparent z-40"
                      onClick={() => setExpandedMember(null)}
                    />
                    <motion.div
                      id="member-modal"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="member-modal-title"
                      aria-describedby="member-modal-description"
                      layoutId={`member-${expandedMember}`}
                      initial={{ opacity: 0, y: 20, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.96 }}
                      transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
                      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-t from-black/90 to-transparent p-4"
                    >
                      <div className="modal-content max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-black shadow-2xl">
                        <div className="relative h-[60vh]">
                          <img
                            src={teamMembers[expandedMember].image}
                            alt={teamMembers[expandedMember].name}
                            className="w-full h-[40vh] object-cover"
                            loading="eager"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                          <div className="absolute inset-0  p-8 flex flex-col justify-end text-dorado">
                            <h3 id="member-modal-title" className="text-3xl font-medium text-white mb-2">
                              {teamMembers[expandedMember].name}
                            </h3>
                            <p className="text-3xl font-bold xl text-dorado mb-4">
                              {teamMembers[expandedMember].role1}
                            </p>
                            <p className="text-lg text-white mb-2">
                              {teamMembers[expandedMember].role}
                            </p>
                            <p id="member-modal-description" className="text-base text-dorado">
                              {teamMembers[expandedMember].details}
                            </p>
                          </div>
                        </div>
                        <button
                          className="motion-standard motion-fast absolute top-4 right-4 rounded-full bg-white p-2 text-black shadow-lg hover:scale-105"
                          aria-label={`Fermer la fiche de ${teamMembers[expandedMember].name}`}
                          onClick={() => setExpandedMember(null)}
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </section>
            <footer className="bg-black py-8 overflow-hidden" aria-label="Pied de page">
              <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400">
                  © 2024 Fondation Khadija Tnana. Tous droits réservés.
                </p>
                <div className="mt-4 mx-auto flex flex-col items-center gap-6 text-gray-400 md:flex-row md:items-start md:justify-between md:gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <span>Contact</span>
                    <div className="h-1 mb-4 w-10/12 bg-slate-500"></div>
                    <a
                      href="tel:+212661082292"
                      className="motion-standard flex items-center space-x-1 hover:text-dorado"
                    >
                      <Phone className="w-4 h-4" />
                      <span>0661082292</span>
                    </a>
                    <a
                      href="mailto:k@tnana.ma"
                      className="motion-standard flex items-center space-x-1 hover:text-dorado"
                    >
                      <Mail className="w-4 h-4" />
                      <span>k@tnana.ma</span>
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span>Liens</span>
                    <div className="h-1 mb-4 w-10/12 bg-slate-500"></div>
                    <Link to="/" className="motion-standard flex items-center space-x-1 hover:text-dorado">
                      <Home className="w-4 h-4" />
                      <span>Page Principale</span>
                    </Link>
                    <Link to="/about" className="motion-standard flex items-center space-x-1 hover:text-dorado">
                      <ShieldPlus className="w-4 h-4" />
                      <span>À propos</span>
                    </Link>
                  </div>

                  <div className="flex flex-col items-center gap-1 md:items-end">
                    <span>Developed by Ilias Afailal</span>
                    <a
                      href="mailto:contact@nervacom.com"
                      className="motion-standard flex items-center space-x-1 hover:text-dorado"
                    >
                      <Mail className="w-4 h-4" />
                      <span>contact@nervacom.com</span>
                    </a>

                    <div className="mt-2 flex items-center space-x-2 md:mt-0">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span>© Nervacom</span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;
