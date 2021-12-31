//  pages/about.js
export async function getStaticProps(context) {
    return {
      redirect: {
        destination: '/',
        permanent: true // triggers 308 move permanent
      }
    }
  }

  // custom pages/404.js
export default function About() {
  return <h1>About Us</h1>
}

  