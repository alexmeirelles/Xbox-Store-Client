import styled, {css} from "styled-components";

export const LoginContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f1f1f1;
    border-radius: 8px;
    text-align: center;
`;

export const LoginCard = styled.div`
    width: 50%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f1f1f1;
    border-radius: 8px;
    text-align: center;
`;

export const RegisterForm = styled.form`
    ${({theme}) => css`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    `}`

export const InputCreate = styled.input`
    ${({theme}) => css`
    width: 65%;
    height: 3rem;
    border-radius: 2px;
    padding: 0 10px;
    font-size: 1em;
    border: none;
    margin-bottom: 0.7rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    ::placeholder {
        text-align: center; 
        color: #c2c2c2;
        font-size: 1.5em;
    }

    `}`

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