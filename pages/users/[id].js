import axios from "axios";
import Link from "next/link";

function Users({data}) {
  console.log(data)
  return (
    <div className="container">
      <h1>getStaticPaths() + getStaticProps()</h1>
      <p>The page is created statically at build times using <i>getStaticProps()</i> and <i>getStaticPaths()</i>.This site has a dynamic route to each user. <i>getStaticPath()</i> returns an array of all valid paths. This array is passed to <i>getStaticProps()</i> which performs data fetching and build all pages for the paths during build time.</p>
      <p>So finally for one dynamic path, we can generate all the valid pages with specific data during build time.</p>
      <h3>User Information</h3>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.username}</p>
      <p>{data.website}</p>
      <p>{data.address.city}</p>
      <Link href={"/users/"}>Go back</Link>
      </div>
  );
}

export default Users;

//In this example we are generating pages at build time from the valid paths passed on from the getStaticPaths() function.
export async function getStaticProps({ params }) {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  return {
    props: {
      data,
    },
  };
}
// the array has all valid paths. This is passed to getStaticPaths() function.
export async function getStaticPaths(){
    const paths = [
      "/users/1",
      "/users/2",
      "/users/3",
      "/users/4",
      "/users/5",
      "/users/6",
      "/users/7",
      "/users/8",
      "/users/9",
      "/users/10",
    ];
    return {
        paths,
        fallback:false
    }

}