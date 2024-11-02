import { motion, AnimatePresence } from "framer-motion";
import { Eye, ChevronRight } from "lucide-react";
import { useState } from "react";

const objectives = [
  {
    title: "ÉVÉNEMENTS ET RENCONTRES ARTISTIQUES",
    description:
      "Organiser des festivals, rencontres, et expositions, individuelles et collectives, pour célébrer et promouvoir la créativité artistique.",
  },
  {
    title: "ATELIERS ET SOUTIEN À LA FORMATION ARTISTIQUE",
    description:
      "Proposer des ateliers de formation pour encourager l'apprentissage et l'épanouissement artistique, en particulier pour les jeunes et les femmes créatrices.",
  },
  {
    title: "PROMOTION DE LA CRÉATIVITÉ FÉMININE ET DES JEUNES TALENTS",
    description:
      "Valoriser la création féminine et soutenir les jeunes talents dans leurs parcours artistiques.",
  },
  {
    title: "ÉCHANGES ET COOPÉRATIONS CULTURELLES",
    description:
      "Favoriser les partenariats et échanges artistiques avec des associations et organisations à l'échelle nationale et internationale.",
  },
  {
    title: "DÉVELOPPEMENT ET VALORISATION DU PATRIMOINE ARTISTIQUE",
    description:
      "Soutenir le développement du patrimoine artistique marocain en collaboration avec les institutions publiques pour renforcer la culture et l'image du Maroc.",
  },
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
              transition={{ duration: 0.3 }}
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
