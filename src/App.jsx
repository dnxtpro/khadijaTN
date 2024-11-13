import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ObjectiveSection } from "./Objective";
import { useInView } from "react-intersection-observer";
import { Mail, Building } from "lucide-react";

const teamMembers = [
  {
    role1: "Fondatrice",
    name: "Khadija Tnana",
    role: "Artiste plasticienne et dramaturge",
    image: "khadija.png",
    gridCol: "md:col-start-2 col-start-1",
    born: "Née à Tétouan",
    details: "Artiste engagée dans la féminité et les injustices sociales.",
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
    details: "A obtenu son diplôme de gestion des entreprises en 2005",
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
    details: "Ingénieure en informatique,diplômé de l'ENSI de Caen en 1989",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 400]);
  const opas = useTransform(scrollY, [0, 200], [1, 0]);
  const y2 = useTransform(scrollY, [0, 300], [0, -450]);

  const y5 = useTransform(scrollY, [0, 300], [0, -650]);
  const y3 = useTransform(scrollY, [200, 600], [0, -300]);
  const x1 = useTransform(scrollY, [1500, 1700], [0, -700]);
  const x2 = useTransform(scrollY, [1500, 1700], [0, 1000]);
  const opa = useTransform(scrollY, [1700, 1800], [0, 1]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-300 via-amber-300/50 to-black">
      <div className="w-full min-h-screen bg-black/80">
        <motion.header
          className="relative overflow-hidden py-24 md:py-32 z-30"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative  container mx-auto px-4"
          >
            <div className="text-center text-white  bg-[#322b12]  ">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
                FONDATION
              </h1>
              <h2 className="text-2xl font-medium text-dorado md:text-3xl lg:text-4xl">
                Khadija Tnana
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
              UN ESPACE DEDIE A{" "}
              <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                l&apos;ECHANGE
              </span>{" "}
              ET A LA PROMOTION DE LA CREATIVITE AU MAROC
            </h2>
          </motion.div>

          <motion.img
            style={{ y: y5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="lokete.png"
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
          className="grid md:grid-cols-2 grid-cols-1 overflow-x-hidden items-center mx-8 px-4 gap-12 "
        >
          <motion.img
            style={{ x: x1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="mujer.jpg"
            className="h-full md:max-w-96 max-w-72 object-cover mx-auto shadow-[-12px_19px_20px_0px]"
            alt=""
          />

          <motion.h2
            style={{ x: x2 }}
            className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl"
          >
            SOUTENIR LES TALENTS CREATIFS PROMOUVOIR LA CULTURE MAROCAINE, ET
            CELEBRER LA{" "}
            <span className="mt-2 block font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-amber-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              DIVERSITE ARTISTIQUE
            </span>
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
                CREATIVITE{" "}
                <span className="bg-gradient-to-r from-amber-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  FEMININE
                </span>
              </span>{" "}
              ET SOUTENIR LA
              <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-amber-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  JEUNESSE
                </span>{" "}
                ARTISTIQUE
              </span>
            </h2>
          </div>

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="arriba.png"
            className="h-full w-3/4 object-cover mx-auto rounded-xl shadow-2xl md:mt-0"
            alt="Youth art"
          />
        </motion.div>

        <ObjectiveSection />

        <section className="px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair text-white text-center mb-16"
          >
            Notre Équipe
          </motion.h2>
          <div className="container mx-auto md:grid flex flex-col md:grid-cols-3 space-y-8 gap-8 mon">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`team-member ${member.gridCol}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="grayscale mon"
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
                      {member.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          </div>
        </footer>
      </div>
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
