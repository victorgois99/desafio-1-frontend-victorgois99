import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 35%;
  background-color: white;
  border-color: rgba(209, 220, 227, 1);
  border-radius: 5px;
  border: 1px;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    width: 100vw;
    margin: 0 auto;
  }
`;
