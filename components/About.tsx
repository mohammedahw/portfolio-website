import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: { duration: 0.8 },
      });
    } else {
      controls.start({
        x: -500,
      });
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="md:flex pt-10 justify-center items-center"
      >
        <div className="justify-center md:flex md:justify-evenly items-center shadow-lg dark:shadow-slate-900 text-lg">
          <motion.div
            animate={controls}
            className="md:mx-8 md:pl-32 flex justify-center items-center"
          >
            <Image
              height={"400"}
              width="400"
              src="/proud.svg"
              className="w-44 h-44 md:w-64 md:h-64 lg:h-96 lg:w-96"
              alt="dasdass"
            />
          </motion.div>
          <motion.div
            animate={controls}
            className="flex flex-col justify-center items-center lg:mx-8 lg:pr-32"
          >
            <motion.div
              animate={controls}
              className="mb-2 font-bold hey lg:mb-3 dark:text-slate-400"
            >
              {"<Mohammed>"}
            </motion.div>
            <motion.div
              animate={controls}
              className="pl-12 text-center max-w-xs lg:pl-16"
            >
              Software Developer
            </motion.div>
            <motion.div
              animate={controls}
              className="mt-2 font-bold hey lg:mt-3 dark:text-slate-400"
            >
              {"</Mohammed>"}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
