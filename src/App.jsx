import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";

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

          <img src="foto1.jpg" className="w-3/4 object-cover" alt="" />
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
            className="h-full w-3/4 object-cover mx-auto "
            alt=""
          />

          <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
            SOUTENIR LES TALENTS CREATIFS PROMOUVOIR LA CULTURE MAROCAINE, ET
            CELEBRER LA{" "}
            <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
              DIVERSITE ARTISTIQUE
            </span>
          </h2>
        </div>
        <div id="body1" className="grid grid-cols-2 items-center  mx-14 py-10 ">
          <div className="space-y-4">
            <h2 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
              ENCOURAGER LA
              <span className="mt-2 block font-bold text-dorado md:text-5xl lg:text-6xl">
                CREATIVITE FEMININE
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
          src="arriba.png"
          className="h-full w-3/4 object-cover mx-auto rounded-xl shadow-2xl mt-8 md:mt-0"
          alt="Youth art"
        />
        </div>
        <div id="body1" className="grid grid-cols-3 items-center  mx-14 py-10 ">
          
        <div className="col-start-2  team-member">
        <h2 >
          Khadija Tnana
        </h2>
        <img src="khadija.png" className="object-cover mx-auto p-9 " alt="" />
        </div>  
        <div className=" col-start-1 team-member">
        <h2 >
          Mostafa Roumli
        </h2>
        <p className="text-dorado text-sm">Professeure universitaire</p>
        
        <img src="mostafa.jpg" className="object-cover mx-auto p-9 " alt="" />
        </div>
        <div className="team-member">
        <h2 >
         Abdelatif Bazzi
        </h2>
        <p className="text-dorado text-sm">Professeure universitaire</p>
        <img src="place.png" className="object-cover mx-auto p-9 " alt="" />
        </div>
        <div className="team-member">
        <h2 >
          Hanan Chemcham
        </h2>
        <p className="text-dorado text-sm">Professeure universitaire</p>
        <img src="place.png" className="object-cover mx-auto p-9 " alt="" />
        </div>
        <div className="team-member">
        <h2 >
          Imane Tnana
        </h2>
        <p className="text-dorado text-sm">Professeure universitaire</p>
        <img src="imanet.jpg" className="object-cover mx-auto p-9 grayscale " alt="" />
        </div>
        <div className="team-member">
        <h2 >
         Touda Lotfi
        </h2>
        <p className="text-dorado text-sm">Professeure universitaire</p>
        <img src="place.png" className="object-cover mx-auto p-9 " alt="" />
        </div>
        <div className=" team-member">
        <h2 >
         Mariam Tnana
        </h2>
        <p className="text-dorado text-sm">Professeure universitaire</p>
        <img src="mariam.jpg" className="object-cover mx-auto p-9  grayscale" alt="" />
        </div>
        
          
         
        </div>
      </div>
    </>
  );
}

export default App;
