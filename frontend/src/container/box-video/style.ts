import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  

  video {
    width: 100% !important;
    height: 100% !important;
    display: flex;
    flex-direction: column;
    
  }
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem 0;
  column-gap: 4rem;

  i {
    font-size: 2rem !important;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.8rem;
    font-size: 1.3rem;

    &:last-child {
      margin-left: auto;
    }
  }

  @media (max-width: 440px) {
    padding: 1.5rem 1rem 0;
}
`;

export const Describe = styled.div`
  border-bottom: 1px solid rgba(128, 128, 128, 0.377);
  margin-top: 2rem;
  padding-bottom: 0.5rem;

  h2 {
    color: rgb(221, 221, 221);
    font-weight: 500;
    font-size: 1.6rem;
  }

  div {
    margin-top: 0.2rem;
    align-items: center;
    display: flex;

    .dot {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    span {
      font-weight: 400;
      font-size: 1.1rem;
      color: rgb(155, 155, 155);
    }
  }

  @media (max-width: 578px) {
    padding-left: 1rem;
  }
`;

export const Channel = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  column-gap: 0.9rem;

  border-bottom: 1px solid rgba(128, 128, 128, 0.377);
  padding-bottom: 1.9rem;

  div {
    display: flex;
    align-items: center;

    h2 {
      display: flex;
      flex-direction: column;

      font-weight: 400;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }

  @media (max-width: 578px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ChannelPhoto = styled.img`
  border-radius: 50%;
  width: 4.2rem;
  height: 4.2rem;
  object-fit: cover;
`;

export const ChannelStats = styled.div`
  font-weight: 400;
  font-size: .9rem;
  color: #b9b8b8;
  text-transform: capitalize;
  white-space: nowrap;
  .ponto {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;


export const Button = styled.button`
  margin-left: 5rem;

  cursor: pointer;
  padding: 0.5rem 2.5rem;
  border: none;
  outline: none;
  background: rgba(74, 111, 190, 0.795);
  background: rgba(119, 13, 206, 0.795);
  background: rgba(119, 13, 206, 0.795);
  color: #ffffff;
  border-radius: 0.5rem;
  font-size: 1.3rem;

  &:hover {
    background: rgba(108, 12, 187, 0.795);
  }

  @media (max-width: 357px) {
    margin-left: 2rem;
  }
`;
