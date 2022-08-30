import styled from "styled-components";

export const CardStyle = styled.section`
  width: 30%;
  height: 10em;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
  border-radius: .5rem;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: .4s all;
  img {
    width: 12rem;
    height: 16rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  span {
    font-size: 1.2rem;
  }
`;

export const ButtonCreate = styled.button`
    width: 70%;
    height: 3rem;
    border-radius: 2px;
    border: none;
    background-color: #90df5e;
    color: white;
    font-size: 1.5em;
    margin: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    `;



//   height: 70%;
//   align-items: center;
//   padding: 15px;
//   justify-content: center;
//   margin: 10px;
//   border-radius: 41px;
//   background: #e0e0e0;
//   box-shadow: 14px 14px 25px #bebebe, -14px -14px 25px #ffffff;