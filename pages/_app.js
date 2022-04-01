import Layout from '../Components/Layout'
import '../styles/globals.css'
import "../styles/embla.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
