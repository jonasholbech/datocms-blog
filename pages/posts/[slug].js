import Head from "next/head";
import Image from "next/image";
import { slugData, singlePostData } from "../../queries";
export default function Post({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>

        <meta name="keywords" content="Some, good, keywords" />
      </Head>
      <h1>{data.title}</h1>
      {/* <p>{data.content.text}</p>
      <Image
        onClick={() => setCount((old) => old + 1)}
        src={data.content.image.src}
        alt="Cute Dog"
        width={data.content.image.width}
        height={data.content.image.height}
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      /> */}
    </>
  );
}
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await singlePostData(slug);

  return {
    props: {
      data: data.data.blog,
    },
  };
}

export async function getStaticPaths() {
  const data = await slugData();
  const paths = data.data.allBlogs.map((obj) => {
    return { params: { slug: obj.slug } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
