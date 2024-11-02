import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Khadija Tnana",
    role: "Artiste plasticienne et fondatrice",
    image: "khadija.png",
    gridCol: "md:col-start-2"
  },
  {
    name: "Mostafa Roumli",
    role: "Artiste plasticien",
    image: "mostafa.jpg",
    gridCol: "md:col-start-1"
  },
  {
    name: "Abdelatif Bazzi",
    role: "Critique de cinéma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    gridCol: ""
  },
  {
    name: "Hanan Chamsam",
    role: "Femme d'affaires",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
    gridCol: ""
  },
  {
    name: "Imane Tannane",
    role: "Pharmacienne",
    image: "imanet.jpg",
    gridCol: ""
  },
  {
    name: "Touda Lotfi",
    role: "Femme d'affaires",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
    gridCol: ""
  },
  {
    name: "Meryem Tannane",
    role: "Professeure universitaire",
    image: "mariam.jpg",
    gridCol: ""
  }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w- min-h-screen  bg-black">
        <header className="relative overflow-hidden py-24 md:py-32 before:absolute before:inset-0 before:bg-gradient-to-b before:from-amber-900/20 before:to-black/40 before:z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 container mx-auto px-4"
          >
            <div className="text-center text-white">
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
        </header>
        <div
          id="body"
          className="grid grid-cols-2 items-center  mx-8 px-4 gap-12 "
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
              UN ESPACE DEDIE A{" "}
              <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                l&apos;ECHANGE
              </span>{" "}
              ET A LA PROMOTION DE LA CREATIVITE AU MAROC
            </h2>
          </div>

          <img src="foto1.jpg" className="max-w-96 object-cover mx-auto" alt="" />
        </div>
        <section className="py-24 md:py-32">
          <img
            src="logot.svg"
            alt="Foundation logo"
            className="mx-auto h-32 w-auto md:h-40 lg:h-48"
          />
        </section>
        <div id="body1" className="grid grid-cols-2 items-center  mx-8 py-10 ">
          <img
            src="mujer.jpg"
            className="h-full max-w-96 object-cover mx-auto "
            alt=""
          />

          <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
            SOUTENIR LES TALENTS CREATIFS{" "}
            PROMOUVOIR LA CULTURE MAROCAINE, ET
            CELEBRER LA{" "}
            <span className="mt-2 block font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-amber-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              DIVERSITE ARTISTIQUE
            </span>
          </h2>
        </div>
        <div id="body1" className="grid grid-cols-2 items-center  mx-auto py-10 ">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
              ENCOURAGER LA
              <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                CREATIVITE <span className="text-fuchsia-600">FEMININE</span> 
              </span>{" "}
              ET SOUTENIR LA
              <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                <span className="text-fuchsia-600">JEUNESSE</span> ARTISTIQUE
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
        </div>
        

        <section className="px-4 py-16 bg-black/50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair text-white text-center mb-16"
          >
            Notre Équipe
          </motion.h2>
          <div className="container mx-auto grid grid-cols md:grid-cols-3 gap-8">
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
           className="grayscale"
         />
         <div className="team-member-content">
           <div className="bg-gradient-to-t from-black/90 to-transparent absolute inset-0" />
           <div className="relative">
             <h2>{member.name}</h2>
             <p>{member.role}</p>
           </div>
         </div>
       </motion.div>
              

            ))}



          </div>
          </section>
      </div>
    </>
  );
}

export default App;
