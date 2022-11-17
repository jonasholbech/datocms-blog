import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
export default function Henry({ data }) {
  console.log(data);
  const [count, setCount] = useState(0);
  function getSuffix() {
    let number = count > 20 ? Number(String(count).at(-1)) : count;
    console.log(number);
    switch (number) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  /*
  content: {
    heading: "Here's Henry",
    text: 'His favorite color is yellow.',
    image: {
      src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      alt: 'Henry likes yellow',
      width: '3042',
      height: '4032'
    }
  }
  */
  return (
    <>
      <Head>
        <title>{data.title}</title>

        <meta name="keywords" content="Some, good, keywords" />
      </Head>
      <h1>
        {data.title} the {count}
        {getSuffix()}
      </h1>
      <p>{data.content.text}</p>
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
      />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://bucolic-bombolone-857476.netlify.app/api/dogs"
  );
  const data = await res.json();
  return {
    props: {
      data: data[0],
    },
  };
}
