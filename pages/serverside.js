import axios from "axios";

export default function serverside({data}) {
  return <div className="container">
      {data.map((item,key)=>(<p key={key}>{item.title}</p>))}
  </div>;
}

export async function getServerSideProps(context) {

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return {
    props: {data}, // will be passed to the page component as props
  };
}