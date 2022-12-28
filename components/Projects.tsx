import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Blog, Project } from "@prisma/client";

type ProjectWithBlog = Project & { blog: Blog };

export default function Projects() {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [projects, setProjects] = useState<ProjectWithBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => console.log);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.5 },
      });
    } else {
      controls.start({
        opacity: 0,
      });
    }
  }, [controls, inView]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <motion.section
        animate={controls}
        id="projects"
        className="flex flex-col justify-center items-center pt-24"
      >
        <div className="pb-4 text-xl font-bold">Projects</div>
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 content-center items-center text-sm md:text-xl pt-4"
          ref={ref}
        >
          {projects.map((project) => {
            return (
              <motion.div
                className="flex flex-col items-center justify-center p-2 rounded dark:border-slate-900 dark:shadow-slate-900 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                key={project.id}
              >
                <Link href={`/blog/${project.blog.slug}`} passHref>
                  <div className="flex flex-col items-center justify-center hover:cursor-pointer">
                    <div className="pb-2">{project.name}</div>
                    <Image
                      alt="project image"
                      src={project.image}
                      width={"600"}
                      height={"400"}
                      className="rounded"
                    />
                  </div>
                </Link>
                <div className="pt-2">
                  <Link href={project.github} passHref>
                    <a target="_blank">
                      <button className="rounded px-2 bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600  dark:hover:bg-gray-700 dark:text-gray-100">
                        GitHub
                      </button>
                    </a>
                  </Link>
                  {project.demo && (
                    <Link href={project.demo} passHref>
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
