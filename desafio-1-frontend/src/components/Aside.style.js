import styled from "styled-components";

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-left: 50px;
  background-color: rgba(209, 220, 227, 0.18);

  h1 {
    font-size: 20px;
    color: rgba(61, 117, 187, 1);
    margin-left: 35px;
    margin-right: auto;
    font-style: italic;
  }

  p {
    margin-right: auto;
    margin-left: 35px;
    color: rgba(93, 156, 236, 1);
    font-style: normal;
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    width: 100%;
    margin: 0 auto; 
  }

  @media screen and (min-width:1024px) {
    margin: 0 auto;
  }
`;
