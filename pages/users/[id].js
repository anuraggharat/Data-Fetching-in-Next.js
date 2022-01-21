import axios from "axios";

function Users({data}) {
  return <div className="container">
      <h1>{data.name}</h1>
  </div>;
}

export default Users;

export async function getStaticProps({ params }) {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  return {
    props: {
      data,
    },
  };
}

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