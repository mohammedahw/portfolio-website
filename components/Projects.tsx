import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projects = [
  {
    name: "Sorting Visualizer",
    slug: "sorting-visualizer",
    img: "/sorting.png",
    github: "https://github.com/mohammedahw/sorting-visualizer",
    live: "https://mohammedahw.github.io/sorting-visualizer/",
  },
  {
    name: "Library System",
    slug: "library-system",
    img: "/library.png",
    github: "https://github.com/mohammedahw/library-management-system",
    live: "",
  },
  {
    name: "Portfolio",
    slug: "personal-portfolio",
    img: "/portfolio.webp",
    github: "https://github.com/mohammedahw/portfolio-website",
    live: "",
  },
  {
    name: "Django Todo App",
    slug: "todo-app",
    img: "/todo.jpg",
    github: "https://github.com/mohammedahw/django-react",
    live: "",
  },
];

export default function Projects() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

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
        ref={ref}
        id="projects"
        className="flex flex-col justify-center items-center pt-24"
      >
        <div className="pb-4 text-xl font-bold">Projects</div>
        <div className="grid grid-cols-1 gap-8 md:gap-16 content-center items-center text-sm md:text-xl pt-4">
          {projects.map((project) => {
            const { name, slug, img, github, live } = project;
            return (
              <motion.div
                animate={controls}
                className="flex flex-col items-center justify-center p-2 rounded dark:border-slate-900 dark:shadow-slate-900 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                key={slug}
              >
                <Link href={`/blog/${slug}`} passHref>
                  <div className="flex flex-col items-center justify-center hover:cursor-pointer">
                    <div className="pb-2">{name}</div>
                    <Image
                      alt="dsadasdas"
                      src={img}
                      width={"600"}
                      height={"400"}
                      className="rounded"
                    />
                  </div>
                </Link>
                <div className="pt-2">
                  <Link href={github} passHref>
                    <a target="_blank">
                      <button className="rounded px-2 bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600  dark:hover:bg-gray-700 dark:text-gray-100">
                        GitHub
                      </button>
                    </a>
                  </Link>
                  {live && (
                    <Link href={live} passHref>
                      <a target="_blank" className="pl-4">
                        <button className="rounded px-2 bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600  dark:hover:bg-gray-700 dark:text-gray-100">
                          Live demo
                        </button>
                      </a>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
}
