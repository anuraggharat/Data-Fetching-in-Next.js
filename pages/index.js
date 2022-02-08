import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data fetching techniques in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <header>
          <h2>
            Hey There, I am{" "}
            <Link href="https://anuraggharat.github.io/">
              <a>Anurag.</a>
            </Link>
          </h2>
        </header>
        <div></div>
        <p>
          This repository contains Data fetching implementations in Next.js. I
          have implemented getServerSideProps(), getStaticProps() and getStaticProps() along with getStaticPaths() on seperate
          pages. I have also explained the code with help of comments in
          between. If you need further explanations please read my blog here.
        </p>

        <ol>
          <li>
            <Link href={"/posts"}>getServerSideProps()</Link>
          </li>
          <li>
            <Link href={"/todos"}>getStaticProps()</Link>
          </li>
          <li>
            <Link href={"/users"}>getStaticProps() + getStaticPaths()</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
