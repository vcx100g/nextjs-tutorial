import styles from '../index.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import * as bcrypt from 'bcrypt'

// server side render
const saltRounds = 10;
let originalHash = 's0\\P4$$w0rD';

export async function getServerSideProps() {
  // hash chain
  originalHash = await bcrypt.hash(originalHash, saltRounds)

  return {
    props: {
      ssrData: {
        saltRounds,
        hash: originalHash
      }
    }
  }
}

export default function SSRExample({ ssrData }) {
    return (
        <Layout home>
            <Head>
                <title>SSRExample</title>
            </Head>

            <h1>
                <span> Hello there, </span>
                Server side render work!!
            </h1>

            <div>
                <h3>saltRounds: {ssrData.saltRounds}</h3>
                <h3>hashChain: <br />{ssrData.hash}</h3>
            </div>

            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}
  