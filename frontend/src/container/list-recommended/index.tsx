import * as S from "./style";

export const ListRecommended = () => {
  const Array = [1, 2, 3, 4, 5, 6, 74, 854, 742, 475, 2586, 1455];
  const handleGithub = () => {
    window.open("https://github.com/Sjhns/video-streaming");
  };

  return (
    <S.Container>
      <S.ContainerCardGithub>
        <S.Card>
          <img src="./github.png" />

          <S.CardTitle>Starstruck</S.CardTitle>
          <S.CardDescribe>Dê uma ⭐ no projeto</S.CardDescribe>

          <S.CardButton onClick={handleGithub}>Repositório</S.CardButton>
        </S.Card>
      </S.ContainerCardGithub>

      <h2>Recomendações para você</h2>
      <S.GroupTags>
        <span>Tudo</span>
        <span>Populares</span>
      </S.GroupTags>
      {Array.map((value) => (
        <Item key={value} />
      ))}
    </S.Container>
  );
};

const Item = () => {
  return (
    <S.Item>
      <img src="./flower.webp" alt="" />
      <S.Info>
        <h3>Ks HTs - Dark Flowers (Official Video)</h3>
        <S.ChannelName>
          <img src="./woman.jpg" alt="" />
          Ks HTs
        </S.ChannelName>
        <S.VideoView>52.8k visualizações</S.VideoView>
      </S.Info>
    </S.Item>
  );
};
