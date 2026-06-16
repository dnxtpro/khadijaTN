import React from "react";
import { motion } from "framer-motion";
import SvgComponent from "./logo";

const Loading = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black/90 overflow-hidden px-4">
      
        <motion.div
          animate={{opacity:0}}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="flex h-screen w-full flex-col items-center justify-center gap-12 py-10 md:flex-row md:justify-around"
        >
          <div className="z-30 py-4 md:py-32">
            <motion.div className="relative container mx-auto px-4">
              <div className="text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, x: -2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl"
                >
                  KHADIJA TNANA
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className="text-lg font-medium text-dorado md:text-3xl lg:text-2xl"
                >
                  fondation pour la culture et les arts
                </motion.h2>
                <div className="mt-8 flex justify-center">
                  <div className="h-1 w-16 bg-dorado"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
          className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.6 }}
            transition={{ duration: 1.5, delay: 0 }}
          >
            <SvgComponent className="h-48 w-auto md:h-72" />
          </motion.div>

          <div className="z-30 py-4 md:py-32">
            <motion.div className="relative container mx-auto px-4">
              <div className="text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, x: 2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-8xl"
                >
               خديجة طنانة
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className="text-xl font-medium text-dorado md:text-3xl lg:text-6xl"
                >
                     مؤسسة
                   للثقافة والفن
                </motion.h2>

                <div className="mt-8 flex justify-center">
                  <div className="h-1 w-16 bg-dorado"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Loading;
