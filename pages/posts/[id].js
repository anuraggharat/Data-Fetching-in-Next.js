import axios from 'axios';
import Link from 'next/link';
import React from 'react';

function Post({data}) {
    console.log(data)
  return <div className='container'>
        <p>This page is being fetched by the server. So whenever you make a request to the server with this url, the server build the page and returns it!</p>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <Link href={`/posts/`}>Back</Link>
  </div>;
}

export default Post;

export async function getServerSideProps({params}) {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  return {
    props: {
      data
    },
  };
}