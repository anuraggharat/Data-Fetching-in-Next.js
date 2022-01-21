import Link from 'next/link'

function Card({item}) {
  return (
    <div className="card">
      <h1>
        <Link href={`/posts/${item.id}`}>{item.title}</Link>
      </h1>
    </div>
  );
}

export default Card;
