import axios from "axios";
import Card from "../components/Card";

function staticpage({ data }) {
  return (
    <>
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
    </>
  );
}

export default staticpage;

//fetch data at build time
//since I am exporting this this function, this page will be prerendered at build time
export async function getStaticProps(context) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
