import Head from "next/head";
import { Header } from "../container/header";
import styled from "styled-components";
import { BoxVideo } from "../container/box-video";
import { BoxComments } from "../container/box-comments";
import { ListRecommended } from "../container/list-recommended";

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
        <ContainerVideoPlayComments>
          <BoxVideo />
          <BoxComments />
        </ContainerVideoPlayComments>
        <ListRecommended />
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0 5rem;
  display: flex;
`;

const ContainerVideoPlayComments = styled.div`
  width: 75%;
`;
