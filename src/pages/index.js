import { getData } from '~/lib/data';
import style from '~/styles/home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Next.js Engineering Configuration</title>
      </Head>
      <ul className="ul">
        {data.map(i => (
          <li key={i.id} className={style.listItem}>
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
