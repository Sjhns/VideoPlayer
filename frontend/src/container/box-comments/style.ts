import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;


  @media (max-width: 578px) {
    padding: 0  1rem;
    
}
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  span {
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: #c7c7c7;

    &:hover {
      text-decoration: underline;
      color: #e0e0e0;
    }
  }
`;

export const BoxInput = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  align-items: flex-start;
  column-gap: 1.3rem;

  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: .8rem;

  textarea {
    padding: 0.7rem 1.4rem 0;
    width: 100%;
    height: 9rem;
    outline: none;
    border: none;
    background: #2c2c2c94;
    color: #cfcfcf;

    font-size: 1.5rem;

  }

  button {
    cursor: pointer;
    font-size: 1.3rem;
    text-transform: capitalize;
    font-weight: 400;

    margin-left: auto;
    border: none;
    outline: none;
    background: transparent;
    color: #b9b8b8;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;

    border: 1px solid #fefefe;
    padding: .3rem 2rem .1rem;
    border-radius: .5rem;
    text-transform: capitalize;

    &:hover {
      color: #c7c7c7;
    }
  }
`;

export const Loading = styled.h5`
color: #c7c7c7;
`

export const BoxComments = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column-reverse;
  row-gap: 3rem;
`;

export const Comment = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: flex-start;

  img {
    margin-top: 0.5rem;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
  }

  h3 {
    font-weight: 500;
    font-size: 1.3rem;
    color: #efefef;

  }
  p {
    font-size: 1.2rem;
    margin-top: 0.2rem;
    color: #c7c7c7;
  }
`;

export const CommentButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  margin-top: 1rem;

  color: #b9b8b8;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #cacaca;
    }
  }

  i {
    font-size: 1.6rem;
    cursor: pointer;

    &:hover {
      color: #cacaca;
    }
  }
`;
