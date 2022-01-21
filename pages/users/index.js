import axios from "axios";
import Link from "next/link";

export default function index({data}) {
  return (
    <div className="container">
      <h1>Users</h1>
      <ul>
        {data.map((item, key) => (
          <li key={key}>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    props: { data }, // will be passed to the page component as props
  };
}