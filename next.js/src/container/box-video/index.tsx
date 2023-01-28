import * as S from "./style";

export const BoxVideo = () => {
  return (
    <S.Container>
      {/*  <video class="sopplayer" data-setup="{}"  controls>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4">
                </video> */}
      <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"></video>

      <S.Bar>
        <div>
          <i className="bx bx-like"></i>
          985.5k
        </div>
        <div>
          <i className="bx bx-bookmark-plus"></i>
          My list
        </div>

        <div>
          <i className="bx bx-message-minus"></i>
        </div>
      </S.Bar>

      <S.Describe>
        <h2>Um dia depois de bababa</h2>
        <div>
          <span>958.7K</span>
          <span className="dot">•</span>
          <span>Jan, 26, 2023</span>
        </div>
      </S.Describe>

      <S.Channel>
        <S.ChannelPhoto
          src="https://avatars.githubusercontent.com/u/108435026?s=400&u=2583f1fb7c7e0cd027ac11c432159b05ef614a69&v=4"
          alt=""
        />
        <div>
          <h2>
            Johnson
            <S.ChannelStats>
              <span>2.5M Followers</span>
              <span className="ponto">•</span>
              <span>1,589 Videos</span>
            </S.ChannelStats>
          </h2>

          <S.Button>Follow</S.Button>
        </div>
      </S.Channel>
    </S.Container>
  );
};
