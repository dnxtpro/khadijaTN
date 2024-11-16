import { motion, AnimatePresence } from "framer-motion";
import { Eye, ChevronRight } from "lucide-react";
import { useState } from "react";

const objectives = [
  {
    title: "FESTIVALS ET EXPOSITIONS",
    description: "Créer des moments uniques pour mettre en lumière l'art sous toutes ses formes, en organisant des expositions et événements qui rassemblent les artistes et le public."
  },
  {
    title: "FORMATIONS CRÉATIVES ET ATELIERS",
    description: "Offrir des opportunités d’apprentissage et de pratique artistique à travers des ateliers conçus pour éveiller la créativité, notamment chez les femmes et les jeunes."
  },
  {
    title: "SOUTIEN AUX FEMMES ARTISTES ET JEUNES TALENTS",
    description: "Donner une voix aux femmes dans la création artistique et fournir un accompagnement personnalisé pour révéler les talents émergents."
  },
  {
    title: "PARTENARIATS ET RÉSEAUX ARTISTIQUES",
    description: "Établir des ponts entre les acteurs culturels à l’échelle nationale et internationale, pour enrichir les pratiques artistiques par le dialogue et la collaboration."
  },
  {
    title: "ART ET VALEURS HUMAINES",
    description: "Faire de l’art un outil de transformation sociale,en promouvant des valeurs telles que la tolérance, la modernité et l’harmonie collective, tout en valorisant le patrimoine marocain."
  }
  
];

export function ObjectiveSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-krona text-white text-center mb-16"
      >
        Nos Objectifs
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left side - Details */}
        <motion.div
          className="relative h-[400px] bg-black/40 rounded-xl p-8 border border-dorado/20 shadow-[-12px_19px_20px_0px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col justify-center"
            >
              <div className="absolute top-12 w-12 h-12 bg-dorado text-white font-krona flex items-center justify-center rounded-full">
                {selectedIndex + 1}
              </div>
              <h3 className="text-2xl font-krona text-white mb-6 mt-12">
                {objectives[selectedIndex].title}
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {objectives[selectedIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right side - List */}
        <div className="space-y-4">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedIndex === index ? "bg-dorado/20" : "hover:bg-dorado/10"
              }`}
              onClick={() => setSelectedIndex(index)}
              onHoverStart={() => setSelectedIndex(index)}
            >
              <div className="relative p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-krona ${
                      selectedIndex === index ? "text-dorado" : "text-white/60"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    className={`font-krona text-sm md:text-base ${
                      selectedIndex === index ? "text-dorado" : "text-white/30"
                    }`}
                  >
                    {objective.title}
                  </h3>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    selectedIndex === index
                      ? "text-dorado rotate-90"
                      : "text-dorado/60 group-hover:translate-x-1"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
