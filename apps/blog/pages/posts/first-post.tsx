import styles from '../index.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost({ ssrData }) {
    return (
        <Layout home>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>
                <span> Hello there, </span>
                First Post 👋
            </h1>

            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}
  