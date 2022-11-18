import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout></Layout>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
