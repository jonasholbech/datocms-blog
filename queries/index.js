export async function frontpageData() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "66490bd777ebacbb6fd780ebea64f2",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        allBlogs {
          id
          slug
          title
        }
      }
      `,
    }),
  };

  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}
