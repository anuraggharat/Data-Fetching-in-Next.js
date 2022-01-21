import axios from "axios";
import Card from "../../components/Card";

export default function index({data}) {
  return (
    <main>
      <div className="container">
        {data.map((item, key) => (
          <Card item={item} key={key} />
        ))}
        <div className="card">
          <h1>Static Page</h1>
        </div>
      </div>
    </main>
  );
}


export async function getStaticProps(context) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
