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
export async function slugData() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "66490bd777ebacbb6fd780ebea64f2",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        allBlogs {
          slug
        }
      }
      `,
    }),
  };

  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}

export async function singlePostData(slug) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "66490bd777ebacbb6fd780ebea64f2",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        blog(filter: {slug: {eq: "${slug}"}}) {
          title
          slug
          updatedAt
          components {
            ... on YoutubeEmbedRecord {
              id
              html
            }
            ... on TextRecord {
              id
              text
            }
            ... on ImageRecord {
              id
              asset {
                responsiveImage {
                  width
                  srcSet
                  src
                  sizes
                  height
                  alt
                }
              }
            }
            ... on GalleryRecord {
              id
              images {
                responsiveImage {
                  width
                  srcSet
                  src
                  sizes
                  height
                  alt
                }
              }
            }
            ... on CodesnippetRecord {
              id
              snippet
              filename
            }
          }
        }
      }
      `,
    }),
  };

  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}
/*
query MyQuery {
  blog(filter: {slug: {eq: "reactjs"}}) {
    title
    slug
    updatedAt
    components {
      ... on YoutubeEmbedRecord {
        id
        html
      }
      ... on TextRecord {
        id
        text
      }
      ... on ImageRecord {
        id
        asset {
          responsiveImage {
            width
            srcSet
            src
            sizes
            height
            alt
          }
        }
      }
      ... on GalleryRecord {
        id
        images {
          responsiveImage {
            width
            srcSet
            src
            sizes
            height
            alt
          }
        }
      }
      ... on CodesnippetRecord {
        id
        snippet
        filename
      }
    }
  }
}

*/
