// Layout.js

import { Sora } from "@next/font/google";
import Head from 'next/head';
import TopLeftImg from "../components/TopLeftImg";
import Nav from "../components/Nav";
import Header from "../components/Header";

// Configuración de fuentes
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(circle at 100% 100%, #1a1a1a, #000000 30%)',
      }}
    >
      <Head>
        <title>New Prime University</title>
        <meta name="description" content="New Prime University" />
        <link rel="icon" href="/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
