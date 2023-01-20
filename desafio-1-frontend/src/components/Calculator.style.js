import styled from "styled-components";

export const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 56px;
  width: 50%;

  h1 {
    font-size: 24px;
    margin-top: 40px;
    color: rgba(101, 101, 101, 1);
  }

  h3 {
    font-size: 14px;
    margin-top: 22px;
    margin-right: auto;
    font-weight: 500;
    color: rgba(101, 101, 101, 1);
  }

  input {
    border-color: rgba(221, 230, 233, 1);
    border-radius: 5px;
    width: 80%;
    height: 40px;
    margin-top: -13px;
    outline-color: lightskyblue;
  }

  p {
    font-size: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 1px;
    color: rgba(206, 206, 206, 1);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width:1024px) {
    margin: 0 auto;
  }
`;
