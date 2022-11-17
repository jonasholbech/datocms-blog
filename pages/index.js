import { frontpageData } from "../queries";
import Anchor from "../components/Anchor";
export default function Home({ data }) {
  return (
    <ol>
      {data.map((entry) => {
        return (
          <li key={entry.id}>
            <Anchor href={`/posts/${entry.slug}`}>{entry.title}</Anchor>
          </li>
        );
      })}
    </ol>
  );
}

export async function getStaticProps() {
  const data = await frontpageData();
  return {
    props: {
      data: data.data.allBlogs,
    },
  };
}
