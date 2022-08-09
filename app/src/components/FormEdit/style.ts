import styled, { css } from "styled-components";

export const EditMain = styled.main`
    ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border: border-box;
    opacity: 0.8;
    background-color: white;
    z-index: 999;
    `}    
`
export const EditContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 50vh;
    justify-content: space-around;
    align-items: center;
    border: border-box;
`;

export const EditRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EditLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormEditTitle = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    
`;

export const FormEdit = styled.form`
    ${({ theme }) => css`
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    padding: 2rem;
    margin: 1rem;
    border-radius: 8px;
    `}
`;

export const InputCreate = styled.input`
    ${({theme}) => css`
    width: 100%;
    height: 3rem;
    border-radius: 2px;
    padding: 0 10px;
    font-size: 1em;
    border: none;
    margin-bottom: 0.7rem;
    `}`

export const ButtonCreate = styled.button`
    width: 70%;
    height: 3rem;
    border-radius: 2px;
    border: none;
    background-color: #90df5e;
    color: white;
    font-size: 1.5em;
    margin: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    `;