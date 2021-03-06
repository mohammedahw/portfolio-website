import { contentful } from "../../contentful";
import Head from "next/head";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function BlogPage(props: any) {
  const data = props.data.items[0];
  const fields = data.fields;
  const url = "http://" + fields.img.fields.file.url.substring(2);
  const slug = useRouter().query.slug;
  return (
    <>
      <Head>
        <title>{`Blog | ${slug}`}</title>
      </Head>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center pt-4"
      >
        <div className="flex flex-col">
          <strong className="pb-2">{fields.title}</strong>
          <Image
            alt="dasdsa"
            src={url}
            height={"400"}
            width={"800"}
            className="pb-2"
          />
          <div>
            {fields.article.content.map((item: any) => {
              return documentToReactComponents(item);
            })}
          </div>
        </div>
      </motion.article>
      <Footer />
    </>
  );
}

export async function getStaticProps(props: any) {
  const data = await contentful.getEntries({
    content_type: "blogPost",
    "fields.slug": props.params.slug,
  });
  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await contentful.getEntries({
    content_type: "blogPost",
  });
  const paths = data.items.map((post: any) => ({
    params: { slug: post.fields.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
