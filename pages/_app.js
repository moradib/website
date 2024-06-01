import '@/public/styles/fonts.css';
import '@/public/styles/common.css';
import '@/public/styles/main.css';
import '@/public/styles/jumpx.css';
import Header from "@/components/shared/Header";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Footer from '@/components/shared/Footer';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
