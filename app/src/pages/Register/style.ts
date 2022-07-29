import styled, {css} from 'styled-components';

export const RegisterContent = styled.section`
    ${({theme}) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`}`

export const RegisterBox = styled.div`
    ${({theme}) => css`
    width: 40%;
    height: 45vh;
    flex-direction: column;
    border: border-box;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    background-color: #f1f1f1;
`}`

export const Title = styled.h1`
    ${({theme}) => css`
    font-size: 2rem;
    color: #c2c2c2;
    font-weight: bold;
    margin-bottom: 3rem;
    `}`

export const RegisterForm = styled.form`
    ${({theme}) => css`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-left: 7em;
    `}`

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
    ${({theme}) => css`
    width: 70%;
    height: 3rem;
    border-radius: 2px;
    border: none;
    background-color: #90df5e;
    color: white;
    font-size: 1em;
    margin 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    `}`

export const XboxFooter = styled.div` 
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        height: 10vh;
        border: border-box;
        padding: 2rem;
        font-size: 1.5rem;
        color: lightgray;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        bottom: 0;
`;