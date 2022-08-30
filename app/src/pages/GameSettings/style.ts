import styled, { css } from "styled-components";

interface ActiveButtonProps {
	active?: boolean;
}
export const SettingsContainer = styled.div`
	${({ theme }) => css`
		image
		min-width: 100vw;
		min-height: 100vh;
		display:flex;
		font-family: "Roboto";
	`}
`;

export const BackButton = styled.div`
	${() => css`
		cursor:pointer;
		padding: 1rem;
		img {
		width:2rem;
		}
	`}
`;


export const EditEntitiesContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 90vh;
		padding: 1rem;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		border-radius: 8px;
		background-color: #262626; 
		margin-left: 2rem;
		margin-right: 2rem;
		box-sizing: border-box;
	`}
`;


export const EditEntitiesButton = styled.button<ActiveButtonProps>`
	${({ theme, active }) => css`
	height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    margin-right: 1.5rem;
    cursor: pointer;
    :hover {
      color: #red;
    }
    ${active &&
    css`
      color: #green;
      border-bottom: 1px solid #green;
    `}
  `}
`;

export const EntitiesEditList = styled.div`
	${({ theme }) => css`
	width: 95%;
    height: 85%;
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 3rem;
    overflow-y: scroll;
	`}
`;

export const AddEntitieCard = styled.div`
	${({ theme }) => css`
	width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid #black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
	`}
`;

export const EntityCard = styled.div`
	${({ theme }) => css`
	width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid #black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
	`}
`;


