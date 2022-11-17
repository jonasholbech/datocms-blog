import Anchor from "./Anchor";
function Layout({ children, navData }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Anchor href="/">Home</Anchor>
            </li>
            {navData.map((el) => (
              <li key={el.id}>
                <Anchor href={`/dogs/${el.slug}`}>{el.title}</Anchor>
              </li>
            ))}

            <li>
              <Anchor href="/dogs/random-dog">Random</Anchor>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}
/*
{data.map((el) => (
              <li>
                <Anchor href={`/dogs/${el.slug}`}>{el.title}</Anchor>
              </li>
            ))}
*/

export default Layout;
