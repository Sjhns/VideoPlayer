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
        <title>Big Buck Bunny</title>
        <meta name="description" content="" />
        <link rel="icon" href="./video.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
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
  padding: 2rem 2rem 0 3rem;
  display: flex;

  @media (max-width: 897px) {
    padding: 2rem 2rem 0 2rem;
  }
  @media (max-width: 578px) {
    padding: 2rem 0rem 0 0rem;
  }
`;

const ContainerVideoPlayComments = styled.div`
  width: 75%;

  @media (max-width: 897px) {
    width: 100%;
  }
`;
