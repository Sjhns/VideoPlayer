import { useState } from "react";
import * as S from "./style";

export const BoxVideo = () => {
  const handleGithub = () => {
    window.open("https://github.com/Sjhns");
  };

  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike((oldValue) => !oldValue);
  };

  return (
    <S.Container>
      <video poster="./poster.png" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>

      <S.Bar>
        <div>
          {like ? (
            <i className="bx bxs-like" onClick={toggleLike}></i>
          ) : (
            <i className="bx bx-like" onClick={toggleLike}></i>
          )}
          985.5k
        </div>
        <div>
          <i className="bx bx-bookmark-plus"></i>
          Minha lista
        </div>

        <div>
          <i className="bx bx-message-minus"></i>
        </div>
      </S.Bar>

      <S.Describe>
        <h2>Big Buck Bunny</h2>
        <div>
          <span>958.7K</span>
          <span className="dot">•</span>
          <span>Jan, 26, 2023</span>
        </div>
      </S.Describe>

      <S.Channel>
        <S.ChannelPhoto src="./channel.jpg" />
        <div>
          <h2>
            Johnson
            <S.ChannelStats>
              <span>2.5M seguidores</span>
              <span className="ponto">•</span>
              <span>1.689 videos</span>
            </S.ChannelStats>
          </h2>

          <S.Button onClick={handleGithub}>Seguir</S.Button>
        </div>
      </S.Channel>
    </S.Container>
  );
};
