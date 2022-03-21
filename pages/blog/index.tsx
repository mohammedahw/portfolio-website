import Head from "next/head";
import Image from "next/image";
import { contentful } from "../../contentful";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function BlogPage(props: any) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <motion.section className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 justify-center items-center gap-10">
          {posts.map((post: any) => {
            const fields = post.fields;
            const url = "http://" + fields.img.fields.file.url.substring(2);
            return (
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 }}
                key={fields.slug}
                className="shadow-2xl rounded dark:shadow-slate-900 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <div className="p-2 font-bold">{fields.title}</div>
                <Image alt="sdasdsa" width={"600"} height="400" src={url} />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`/blog/${fields.slug}`}
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

export async function getStaticProps() {
  const data = await contentful.getEntries({
    content_type: "blogPost",
  });

  return {
    props: {
      posts: data.items,
    },
  };
}
