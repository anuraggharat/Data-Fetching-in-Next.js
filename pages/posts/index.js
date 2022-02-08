import axios from "axios";
import Link from "next/link";
import Card from "../../components/Card";

export default function index({data}) {
  return (
    <main>
      <div className="container">
        <div>
          <h1>Server Side rendered Page</h1>
          <p>This page is implemented using getServerSideProps(). Next.js build this page on every user request. Since the page is built on every user request, it takes a little time to load. Once you request for this page, the <i>getServerSideProps</i> method runs and fetches all the posts from the API and passes it as props to the page. The page accepts the incoming props and renders it. Once the page is completely built it is returned back to the requestor.</p>
          <p>This type of rendering is used when</p>
          <ol>
            <li>Dynamic data is showed on the page.</li>
            <li>Improving SEO and Performance.</li>
          </ol>
        </div>
        <Link href={`/`}>Home</Link>
        <ul>
          {data.map((item, key) => (
            <li key={key}>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// since we are exporting getServerSideProps function, the page will be built on every browser request and served by the server.

export async function getServerSideProps(context) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
