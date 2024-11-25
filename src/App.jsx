import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ObjectiveSection } from "./Objective";
import { useInView } from "react-intersection-observer";
import { Mail, Building } from "lucide-react";
import Loading from "./Loading";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ParticlesComponent from "./Background";
import { X } from "lucide-react";

const teamMembers = [
  {
    role1: "Fondatrice",
    name: "Khadija Tnana",
    role: "Artiste plasticienne et dramaturge",
    image: "khadija.jpg",
    gridCol: "md:col-start-2 col-start-1",
    born: " ",
    details: "",
  },
  {
    role1: "Premier Vice Président",
    name: "Mostafa Roumli",
    role: "Artiste plasticien",
    image: "mostafa.jpg",
    gridCol: "md:col-start-1",
    born: "Née à Touissit",
    details: "Commissaire de nombreuses expositions",
  },

  {
    role1: "Trésorière",
    name: "Hanan Chamcham",
    role: "Femme d'affaires",
    image: "chemcham.jpg",
    gridCol: "",
    born: "Née à Tétouan",
    details:
      "A obtenu son diplôme de gestion des entreprises en 2005. Avant de devenir femme d’affaires et de bâtir sa société, elle a travaillé dans plusieurs grandes entreprises en tant responsable commercial, ce qui lui permis d’accumuler une expérience riche et importantedans le commerce, ainsi qu’un savoir-faire dans le domainedes affaires, et enfin de décider ouvrir son propre projet,fabrication et vente de chocolat de haute qualité.",
  },
  {
    role1: "Vice Trésoriére",
    name: "Imane Tnana",
    role: "Pharmacienne  ",
    image: "imanet.jpg",
    gridCol: "",
    born: "Née à Tétouan",
    details: "Étude de pharmacie à Grenade,Espagne",
  },
  {
    role1: "Vice-secrétaire Général",
    name: "Touda Lotfi",
    role: "Femme d'affaires",
    image: "touda.jpg",
    gridCol: "",
    born: "",
    details: " Directrice Générale chez TALIS CONSEIL ",
  },

  {
    role1: "Conseillére",
    name: "Mariam Tnana",
    role: "Professeure universitaire",
    image: "mariam.jpg",
    gridCol: "col-start-3",
    born: "Née à Tétouan",
    details:
      "Ingénieure en informatique, elle a obtenu son diplôme de l'ENSI de Caen en 1989. Elle a commencé sa carrière en tant qu'ingénieure de développement informatique dans une société à Toulouse, où elle a travaillé de 1990 à 1999. Par la suite, elle a intégré la fonction publique marocaine dans l'enseignement supérieur. En 2009, elle a soutenu son doctorat en informatique à l'INSA de Rouen. Actuellement, elle est professeure de l'enseignement supérieur à l'ENSA de Tanger, où elle forme les futures générations d'ingénieurs dans le domaine des réseaux informatiques.",
  },
];

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [count, setCount] = useState(0);
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
    setExpandedMember(expandedMember === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simula un retraso en la carga o espera hasta que se cumplan condiciones específicas
    const timer = setTimeout(() => setIsLoading(false), 5000); // Cambia el tiempo según prefieras
    return () => clearTimeout(timer);
  }, []);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-300 via-amber-300/50 to-black relative">
      <ParticlesComponent id="particles" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="content bg-black/90">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full min-h-screen "
          >
            <motion.header
              className="relative overflow-hidden py-24 md:py-32 z-30"
              style={{ y: y1 }}
            >
              <motion.div
                initial={{ opacity: 0.5, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative  container mx-auto px-4"
              >
                <div className="text-center text-white  bg-[#191508]  ">
                  <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
                    KhadijaTnana
                  </h1>
                  <h2 className="text-2xl font-medium text-dorado md:text-3xl lg:text-4xl">
                   Fondation
                  </h2>
                  <div className="mt-8 flex justify-center">
                    <div className="h-1 w-16 bg-dorado"></div>
                  </div>
                </div>
              </motion.div>
            </motion.header>

            <motion.div
              id="body"
              className="grid md:grid-cols-2 grid-cols-1  items-center mx-8 px-4 gap-12"
            >
              <motion.div
                className="space-y-4 z-0"
                style={{ y: y2, opacity: opas }}
              >
                <h2 className="text-3xl  font-light leading-tight text-white md:text-4xl lg:text-5xl">
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
                transition={{ duration: 0.3 }}
                src="hero.jpg"
                className="md:max-w-96 max-w-72 object-cover mx-auto shadow-[-12px_19px_20px_0px] z-50"
                alt=""
              />
            </motion.div>

            <motion.section style={{ y: y3 }} className="py-24 md:py-32">
              <div className="relative">
                <img
                  src="logot.svg"
                  alt="Foundation logo"
                  className="mx-auto h-40 w-auto md:h-40 lg:h-64"
                />
                <div className="absolute top-full h-full  w-full transform rotate-180    opacity-50 mt-4 z-50 ">
                  {" "}
                  {/* Aumenta el margen superior aquí */}
                  <div className="relative mx-auto h-40 w-auto md:h-40 lg:h-64 overflow-hidden">
                    <img
                      src="logot.svg"
                      alt="Foundation logo"
                      className="h-full w-full brightness-90 backdrop-blur-sm rotate-180 scale-x-[-1]"
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
              className="flex md:flex-row flex-col overflow-x-hidden items-center mx-8 px-4 gap-12 "
            >
              <motion.img
                style={{ x: isMobile ? 0 : x1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="mujer.jpg"
                className="h-full order-2 z-40 md:order-2 md:max-w-96 max-w-72 object-cover mx-auto shadow-[-12px_19px_20px_0px]"
                alt=""
              />

              <motion.h2
                style={{
                  x: isMobile ? 0 : x2, // En móviles, x es fijo (0); en pantallas grandes, x2 es dinámico
                }}
                className="text-3xl z-30 order-1 font-light leading-tight text-white md:text-4xl lg:text-5xl"
              >
                SOUTENIR LES TALENTS CRÉATIFS, PROMOUVOIR LA CULTURE MAROCAINE,
                ET CÉLÉBRER LA{" "}
                <span className="text-dorado">DIVERSITÉ ARTISTIQUE</span>
              </motion.h2>
            </div>

            <motion.div
              style={{ opacity: opa }}
              id="body1"
              className="grid md:grid-cols-2 space-y-8 items-center mx-auto py-10"
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
                transition={{ duration: 0.3 }}
                src="mujertumbada.jpg"
                className="order-2 z-40 md:order-2 md:max-w-full max-w-72 object-cover mx-auto shadow-[-12px_19px_20px_0px]"
                alt="Youth art"
              />
            </motion.div>

            <ObjectiveSection />

            <section className="px-4 py-16 relative bg-black min-h-screen">
              <h2 className="text-4xl font-playfair text-white text-center mb-16">
                Notre Équipe
              </h2>
              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5 },
                    }}
                    className="team-member cursor-pointer"
                    onClick={() => handleMemberClick(index)}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[400px] grayscale mon object-cover transition-all duration-500"
                      />
                      <div className="team-member-content">
                        <div className="bg-gradient-to-t from-black/90 to-transparent absolute inset-0" />
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
                    </div>
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
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 bg-gradient-to-t from-black/90 to-transparent z-40"
                      onClick={() => setExpandedMember(null)}
                    />
                    <motion.div
                      layoutId={`member-${expandedMember}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 z-50 flex items-center  justify-center  bg-gradient-to-t from-black/90 to-transparent p-4"
                    >
                      <div className="bg-black rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl modal-content">
                        <div className="relative h-[60vh]">
                          <img
                            src={teamMembers[expandedMember].image}
                            alt={teamMembers[expandedMember].name}
                            className="w-full h-[40vh] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                          <div className="absolute inset-0  p-8 flex flex-col justify-end text-dorado">
                            <h3 className="text-3xl font-medium text-white mb-2">
                              {teamMembers[expandedMember].name}
                            </h3>
                            <p className="text-3xl font-bold xl text-dorado mb-4">
                              {teamMembers[expandedMember].role1}
                            </p>
                            <p className="text-lg text-white mb-2">
                              {teamMembers[expandedMember].role}
                            </p>
                            <p className="text-base text-dorado">
                              {teamMembers[expandedMember].details}
                            </p>
                          </div>
                        </div>
                        <button
                          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg"
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
            <footer className="bg-black py-8">
              <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400">
                  © 2024 Fondation Khadija Tnana. Tous droits réservés.
                </p>
                <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4 mt-4 text-gray-400">
                  {/* Información del desarrollador */}
                  <div className="flex items-center space-x-2">
                    <span>Developed by Ilias Afailal</span>
                    <a
                      href="mailto:contact@nervacom.com"
                      className="flex items-center space-x-1 hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span>contact@nervacom.com</span>
                    </a>
                  </div>

                  {/* Empresa */}
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span>© Nervacom</span>
                  </div>
                </div>
                <div className="flex  items-end md:flex-row md:justify-end md:space-x-4 mt-4 text-gray-400">
                  {/* Información del desarrollador */}
                  <div className="flex space-x-2">
                    <span>Developed by Ilias Afailal</span>
                    <a
                      href="mailto:contact@nervacom.com"
                      className="flex items-center space-x-1 hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span>contact@nervacom.com</span>
                    </a>
                  </div>

                  {/* Empresa */}
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span>© Nervacom</span>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".team-member").forEach((member) => {
    member.addEventListener("click", function () {
      this.classList.toggle("active"); // Alterna la clase 'active' solo al hacer clic
    });
  });
});
