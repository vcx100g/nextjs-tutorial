import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

// if use pages/posts/[...id].js
// also work for /posts/a/b, /posts/a/b/c

// run first, get all data first
export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false // set false so 404 if not exists
    }
}

// run second, select data for params
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout home>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}