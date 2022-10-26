export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/data`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Ssr({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <img src={item.photo}></img>
        </div>
      ))}
    </div>
  );
}
