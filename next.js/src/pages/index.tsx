import Head from "next/head";
import { Header } from "../container/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Video</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <Header />
    </>
  );
}
