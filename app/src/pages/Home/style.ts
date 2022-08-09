import styled, {css} from "styled-components";

main {
    width: 100%;
    height: 100vh;
  }
  
  .list-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    background-color: #FFF;
    padding: 3rem;
    border-radius: 1rem 1rem 0 0;
    margin-bottom: 5rem;
  }

  .card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .divider {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
  }

  .line-left {
    width: 10%;
    height: 1px;
    margin: 1rem 0;
  }

    .line-right {
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  }

  p {
    margin-left: 2rem;
    margin-right: 2rem;
  }