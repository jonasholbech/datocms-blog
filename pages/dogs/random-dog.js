export default function RandomDog({ data }) {
  // Temaplating code
  return <img src={data} alt="" />;
}

export async function getServerSideProps() {
  // Get data from api
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  // Return the data inside props
  return {
    props: {
      data: data.message,
    },
  };
}
