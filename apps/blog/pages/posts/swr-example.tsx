import styles from '../index.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import useSWR from "swr";

// swr using REST api
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FirstPost({ ssrData }) {
    const { data, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
      );
    
      if (error) return "An error has occurred.";
      if (!data) return "Loading...";

    return (
        <Layout home>
            <Head>
                <title>SWR Example</title>
                <meta name="robots" content="all" />
                <meta name="google" content="notranslate" />
            </Head>

            <h1>
                <span> Hello there, </span>
                SWR Example 👋
            </h1>

            <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👁 {data.subscribers_count}</strong>{" "}
                <strong>✨ {data.stargazers_count}</strong>{" "}
                <strong>🍴 {data.forks_count}</strong>
            </div>

            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}
  