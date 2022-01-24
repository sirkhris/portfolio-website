import '../sass/sass/index.scss';

import { NavBar } from '../components/Navigation/navbar';
import { FooterBar } from '../components/Footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <NavBar />
      <Component {...pageProps} />
      <FooterBar />
    </main>
  );
}

export default MyApp;
