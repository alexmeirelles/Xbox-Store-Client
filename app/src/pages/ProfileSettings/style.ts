import styled, { css } from "styled-components";

interface ActiveButtonProps {
	active?: boolean;
}

export const SettingsContainer = styled.div`
	${({ theme }) => css`
		image
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
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
	${({ }) => css`
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

export const EntitiesEditList = styled.div`
	${({  }) => css`
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

export const AddEntityCard = styled.div`
	${({ theme }) => css`
  width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
	`}
`;

export const SettingsProfileCard = styled.div`
	${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: ${theme.colors.textColor};
    img {
      width: 10.25rem;
      height: 13rem;
      object-fit: cover;
      border-radius: 8px;
    }
    div {
      display: flex;
      width: 100%;
    }
    h2 { 
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
	`}
`;

export const EditEntitiesButton = styled.button<ActiveButtonProps>`
	${({ theme, active }) => css`
	height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBg2};
    margin-right: 1.5rem;
    cursor: pointer;
    :hover {
      color: ${theme.colors.textColor};
    }
    ${active &&
    css`
      color: ${theme.colors.primaryColor};
      border-bottom: 1px solid ${theme.colors.primaryColor};
    `}
  `}
`;


export const SettingsProfileEditCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0px 0px 0px 8px;
    background-color: ${theme.colors.primaryColorOpacity};
    border: 1px solid ${theme.colors.primaryColor};
    color: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    
  `}
`;

export const SettingsProfileDeleteCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0px 0px 8px 0px;
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.secondaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;