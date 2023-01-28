import * as S from "./style";

export const Header = () => {
  return (
    <S.Container>
      <S.ContainerLogo>
        <i className="bx bx-menu"></i>
      </S.ContainerLogo>
      <S.BoxSearch>
        <input type="text" placeholder="Search" />
        <i className="bx bx-search"></i>
      </S.BoxSearch>
      <S.BoxOptions>
        <span>
          <i className="bx bxs-video-plus"></i> Create
        </span>
        <i className="bx bx-time-five"></i>
        <i className="bx bx-bookmark-plus"></i>
        <i className="bx bx-dots-vertical-rounded"></i>
        <button>Log in</button>
      </S.BoxOptions>
    </S.Container>
  );
};
