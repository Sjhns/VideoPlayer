import Head from "next/head";
import { Header } from "../container/header";
import styled from "styled-components";
import { BoxVideo } from "../container/box-video";

export default function Home() {
  return (
    <>
      <Head>
        <title>Video</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Main>
        <BoxVideo />
      </Main>
    </>
  );
}

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0 5rem;
  display: flex;
`;
