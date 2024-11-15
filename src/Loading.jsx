import React from "react";
import { motion } from "framer-motion";
import SvgComponent from "./logo";

const box = document.getElementById("gold-icon");

const Loading = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black/90 overflow-hidden">
      
        <motion.div
          animate={{opacity:0}}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="w-full h-screen flex flex-col md:flex-row justify-around items-center"
        >
          <div className=" py-24 md:py-32 z-30">
            <motion.div className="relative  container mx-auto px-4">
              <div className="text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, x: -2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl"
                >
                  FONDATION
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className="text-2xl font-medium text-dorado md:text-3xl lg:text-2xl"
                >
                  Khadija Tnana pour la culture et les arts
                </motion.h2>
                <h2 className="text-2xl font-medium text-dorado md:text-3xl lg:text-4xl"></h2>
                <div className="mt-8 flex justify-center">
                  <div className="h-1 w-16 bg-dorado"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
          className="items-center flex"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 1.5, delay: 0 }}
          >
            <SvgComponent className="h-1/2 md:h-full " />
          </motion.div>

          <div className=" py-24 md:py-32 z-30">
            <motion.div className="relative  container mx-auto px-4">
              <div className="text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, x: 2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mb-2 text-8xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-8xl"
                >
                  مؤسسة
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className="text-4xl font-medium text-dorado md:text-3xl lg:text-6xl"
                >
                  خديجة طنانة للثقافة والفن
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
