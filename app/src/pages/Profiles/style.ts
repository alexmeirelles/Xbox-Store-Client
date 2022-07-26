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
        flex-wrap: wrap;


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
            transform : all 1s smooth; ;
        }
        img:hover{
            width: 10rem;
            height: 10rem;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
            transition: ease-in 1.5s;
        }
    }
    
    p{
        color: darkgray;
        font-size: 2rem;
    }
    button{
        background-color: lightgreen;
        size: 2rem;
        border-radius: 1.5rem;
        text-align: center;
    }
    button:hover{
        background-color: darkgreen ;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);

    }
`;

export const XboxFooter = styled.div` 
        justify-content: flex-end;
        align-items: flex-end;

`;