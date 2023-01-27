import styled from "styled-components";

export const Container = styled.header`
  padding: 1.5rem 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  i {
    font-size: 2.5rem;
  }
`;

export const BoxSearch = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4rem;
  padding: 0.7rem 1.6rem;

  background-color: rgb(238, 238, 238);
  background-color: rgba(48, 47, 47, 0.3);
  background-color: rgba(54, 53, 53, 0.3);

  input {
    width: 100%;
    padding-left: 1rem;
    background: transparent;
    border: none;
    outline: none;
    color: #b9b8b8;
    font-size: 1.5rem;
    border-right: 1px SOLID rgba(189, 189, 189, 0.404);
  }

  i {
    margin-left: 2.6rem;
    font-size: 2.5rem;
    color: rgba(173, 171, 171, 0.699);
  }
`;

export const BoxOptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  i {
    font-size: 1.9rem;
    cursor: pointer;
  }

  span {
    cursor: pointer;
    border: 1px solid rgba(153, 154, 160, 0.356);
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;

    &:hover {
      border: 1px solid rgba(51, 72, 177, 0.486);
      color: rgb(102, 102, 231);
    }
  }

  button {
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
  }
`;
