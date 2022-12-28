import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { prisma } from "../../prisma/prisma.service";
import { Blog } from "@prisma/client";

interface BlogPageProps {
  posts: Blog[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <motion.section
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="grid grid-cols-1 justify-center items-center gap-10">
          {posts.map((post) => {
            return (
              <motion.div
                key={post.id}
                className="shadow-2xl rounded dark:shadow-slate-900 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <div className="p-2 font-bold">{post.title}</div>
                <Image
                  alt="project image"
                  width={"600"}
                  height="400"
                  src={post.image}
                />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`/blog/${post.slug}`}
                  className="pt-2 pl-4 pb-2"
                >
                  <button className="bg-gray-300 hover:bg-gray-400 text-slate-900 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-gray-100 p-2 rounded">
                    Learn More
                  </button>
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export async function getStaticProps(): Promise<{ props: BlogPageProps }> {
  const posts = await prisma.blog.findMany();
  return {
    props: {
      posts,
    },
  };
}
