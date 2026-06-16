import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const MOTION_EASE = [0.4, 0, 0.2, 1];
const MOTION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
};
const MOTION_STAGGER = 0.08;

const objectives = [
  {
    title: "FESTIVALS ET EXPOSITIONS",
    description:
      "Créer des moments uniques pour mettre en lumière l'art sous toutes ses formes, en organisant des expositions et événements qui rassemblent les artistes et le public.",
  },
  {
    title: "FORMATIONS CRÉATIVES ET ATELIERS",
    description:
      "Offrir des opportunités d’apprentissage et de pratique artistique à travers des ateliers conçus pour éveiller la créativité, notamment chez les femmes et les jeunes.",
  },
  {
    title: "SOUTIEN AUX FEMMES ARTISTES ET JEUNES TALENTS",
    description:
      "Donner une voix aux femmes dans la création artistique et fournir un accompagnement personnalisé pour révéler les talents émergents.",
  },
  {
    title: "PARTENARIATS ET RÉSEAUX ARTISTIQUES",
    description:
      "Établir des ponts entre les acteurs culturels à l’échelle nationale et internationale, pour enrichir les pratiques artistiques par le dialogue et la collaboration.",
  },
  {
    title: "ART ET VALEURS HUMAINES",
    description:
      "Faire de l’art un outil de transformation sociale,en promouvant des valeurs telles que la tolérance, la modernité et l’harmonie collective, tout en valorisant le patrimoine marocain.",
  },
];

const sectionTransition = {
  duration: MOTION_DURATION.slow,
  ease: MOTION_EASE,
};

export function ObjectiveSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedObjective = objectives[selectedIndex];

  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(197,155,107,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_24%)]" />
      <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-dorado/10 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 translate-x-1/3 rounded-full bg-white/5 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={sectionTransition}
        className="mb-12 text-center text-4xl text-white md:mb-16 md:text-5xl"
      >
        Nos Objectifs
      </motion.h2>

      <div className="container mx-auto grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={sectionTransition}
          className="relative overflow-hidden rounded-[2rem] border border-dorado/20 bg-black/55 p-6 shadow-[-12px_19px_20px_0px_rgba(0,0,0,0.35)] md:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-dorado/10 via-transparent to-transparent" />
          <div className="relative flex min-h-[420px] flex-col justify-between gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
                className="flex flex-1 flex-col justify-center"
              >
                <div className="mb-8 flex items-center gap-4 text-dorado">
                  <span className="text-5xl font-krona md:text-6xl">
                    0{selectedIndex + 1}
                  </span>
                  <span className="h-px flex-1 bg-dorado/40" />
                </div>

                <h3 className="max-w-xl text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  {selectedObjective.title}
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                  {selectedObjective.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="relative border-t border-white/10 pt-5">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-dorado/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {objectives.map((objective, index) => {
            const isActive = selectedIndex === index;

            return (
              <motion.button
                key={objective.title}
                type="button"
                initial={{ opacity: 0, x: 18, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: MOTION_DURATION.normal,
                  ease: MOTION_EASE,
                  delay: index * MOTION_STAGGER,
                }}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedIndex(index)}
                className={`group motion-standard relative overflow-hidden rounded-[1.75rem] border p-4 text-left md:p-5 ${
                  isActive
                    ? "border-dorado/60 bg-dorado/15 shadow-[0_0_0_1px_rgba(197,155,107,0.24)]"
                    : "border-white/10 bg-white/5 hover:border-dorado/30 hover:bg-dorado/10"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,155,107,0.08),_transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-krona transition-colors duration-300 ${
                      isActive
                        ? "border-dorado bg-dorado text-black"
                        : "border-white/15 bg-black/35 text-white/70 group-hover:border-dorado/40 group-hover:text-dorado"
                    }`}
                  >
                    0{index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-xl leading-tight md:text-2xl ${
                        isActive ? "text-dorado" : "text-white/85"
                      }`}
                    >
                      {objective.title}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-1 text-dorado"
                        : "text-dorado/60 group-hover:translate-x-1 group-hover:text-dorado"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
