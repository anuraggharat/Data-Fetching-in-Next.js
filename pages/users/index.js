import axios from "axios";
import Link from "next/link";

export default function index({data}) {
  return (
    <div className="container">
      <h1>Users list page statically rendered</h1>
      <p>This page is being built statically using getStaticProps(). Click on any user below to see how we created static pages for each user. </p>
      <ul>
        {data.map((item, key) => (
          <li key={key}>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/"}>Go Back</Link>
    </div>
  );
}

//this function is only called at build time. We make a get request to the api, fetch all users. Generate HTML page using that data built the page.
//This page stays static untill you build it again. So the data that is shown on the page will never change.
export async function getStaticProps(context) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    props: { data }, // will be passed to the page component as props
  };
}