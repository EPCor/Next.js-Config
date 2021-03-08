import Head from 'next/head';
import Link from 'next/link';
import { getData, getItem } from '~/lib/data';

export default function Post({ item }) {
  return (
    <>
      <Head>
        <title>{item.name}</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>{item.name}</h1>
    </>
  );
}

export async function getStaticProps({ params, preview, previewData }) {
  if (preview && previewData.id === params.id) {
    return { props: { item: { id: previewData.id, name: 'Preview Mode' } } };
  }
  const item = await getItem(params.id);

  return { props: { item } };
}

export async function getStaticPaths() {
  const data = await getData();
  const paths = data.map(i => ({ params: { id: i.id } }));

  return {
    paths,
    fallback: false,
  };
}
