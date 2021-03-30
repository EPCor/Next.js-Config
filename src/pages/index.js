import Head from 'next/head';
import Link from 'next/link';
import { getData } from '~/lib/data';

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Next.js Engineering Configuration</title>
      </Head>
      <ul>
        {data.map(i => (
          <li
            key={i.id}
            className="mt-3 text-center px-3 py-1 hover:bg-gray-200">
            <Link href="/item/[id]" as={`/item/${i.id}`}>
              <a>{i.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const data = await getData();

  return { props: { data } };
}
