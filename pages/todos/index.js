import axios from "axios";
import Link from "next/link";

function index({data}) {
  return (
    <div className="container">
      <h1>Statically rendered Page</h1>
      <p>
        This page is built <i>getStaticProps</i>. This page is built during build time. During build time the data is fetched and passed as props to the page component. The page is built and then served statically. The page is reused for every request. Since the data doesn't change this method is not preferred for constantly changing data. 
        
      </p>
      <Link href={"/"}>
        Go Back
      </Link>
      <p>This type of rendering is used when</p>
      <ol>
        <li>Data that doesn't change regularly.</li>
        <li>Improving SEO and Performance.</li>
      </ol>
      {data.map((item, key) => (
        <p key={key}>{item.title}</p>
      ))}
    </div>
  );
}

export default index;


export async function getStaticProps(context) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return {
    props: { data }, // this data will be passed to the page component as props
  };
}
