import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 100%;

  margin-left: 2rem;

  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 897px) {
    display: none;
    
}
  
`;

export const GroupTags = styled.div`
  font-size: 1rem;
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;

  span {
    cursor: pointer;

    &:first-child {
      border: 1px solid #b9b8b8;
      padding: 0.3rem 1.9rem;
      border-radius: 0.5rem;
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.05);
  }

  img {
    width: 45%;
    object-fit: cover;
    height: 9rem;
    border-radius: 0.5rem;
  }
`;

export const Info = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  h3 {
    width: 100%;
    font-size: 1.35rem;
    font-weight: 500;
  }
`;

export const ChannelName = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  font-size: 1.1rem;

  margin-bottom: 0.3rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const VideoView = styled.div`
  color: #b9b8b8;
  font-size: 1rem;
`;
