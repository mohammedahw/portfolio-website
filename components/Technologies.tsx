import { FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import { AiOutlineConsoleSql, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Technologies() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: { duration: 1.2 },
      });
    } else {
      controls.start({
        x: "-100vw",
      });
    }
  }, [controls, inView]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center pt-32"
      >
        <div className="pb-8 text-xl font-bold">Technology Stack</div>
        <motion.div
          ref={ref}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16 content-center items-center text-sm md:text-xl border p-16 dark:border-slate-900 shadow-xl"
        >
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <FaPython className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">Python</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <SiJavascript className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-1 md:pl-2">JavaScript</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <SiTypescript className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-1 md:pl-2">TypeScript</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <AiOutlineConsoleSql className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">SQL</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <AiFillHtml5 className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">HTML5</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <DiCss3 className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">CSS3</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <SiTailwindcss className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">tailwind</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <RiReactjsLine className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">React.js</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <SiNextdotjs className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">Next.js</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <FaNodeJs className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">Node.js</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <SiExpress className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">Express.js</div>
          </motion.div>
          <motion.div
            animate={controls}
            className="flex justify-center items-center"
          >
            <SiDjango className="h-4 w-4 md:h-6 md:w-6" />
            <div className="pl-2">django</div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
