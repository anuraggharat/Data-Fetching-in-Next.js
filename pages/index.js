import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='container'>
            <Link href="/posts">Go to Posts which are rendered statically</Link>
        </div>
      </main>

    </div>
  )
}
