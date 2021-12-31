import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head'
import { getSortedPostsData } from './lib/posts'; 
import Date from '../components/date'

// more blog example for cms, wordpress and etc...
// https://github.com/vercel/next.js/tree/canary/examples/blog-starter

// fast simple 
// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export function Index({ allPostsData, ssrData }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <div>
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </div>

      <div>
        Server Side Render Example{' '}
        <Link href="/posts/ssr-example">
          <a>this page!</a>
        </Link>
      </div>

      <div>
        SWR REST API Example{' '}
        <Link href="/posts/swr-example">
          <a>this page!</a>
        </Link>
      </div>

      <div>
        Dynamic routing{' '}
        <Link href="/posts/ssg-ssr">
          <a>this page</a>
        </Link>{' '}
        and{' '}
        <Link href="/posts/pre-rendering">
          <a>this page!</a>
        </Link>
      </div>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Index;
