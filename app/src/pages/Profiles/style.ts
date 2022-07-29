import styled from "styled-components";


export const ProfileMain = styled.main` 
        width: 100%;
        height: 100vh;
        border: 2rem;
        background: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
`;

export const ProfileSection = styled.section`
        width: 78%;
        height: 50vh;
        border: border-box;
        opacity: 0.8;
        border-radius: 2rem;
        
        border: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 999;


    div { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        text-align: center;
        flex-wrap: wrap;
        

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;     
            transform : all 1s smooth;
        }
        img:hover{
            width: 10rem;
            height: 10rem;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
            transition: ease-in 0.3s;
            cursor: pointer;
        }
    }
    
    p{
        color: darkgray;
        font-size: 2rem;
    }
    button{
        
        size: 2rem;
        border: none;
        text-align: center;
    }
    button:hover{
        border-radius: 50%;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
        transition: ease-in 0.5s;
        cursor: pointer;

    }
`;

export const XboxFooter = styled.div` 
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        height: 10vh;
        border: border-box;
        background: whitesmoke;
        padding: 2rem;
        font-size: 1.5rem;
        color: lightgray;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        bottom: 0;
`;