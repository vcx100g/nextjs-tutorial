export async function getStaticProps(context) {
    return {
      notFound: true // triggers 404
    }
  }
  
// custom pages/404.js
export default function Wrong() {
  return <h1>Wrong page</h1>
}
