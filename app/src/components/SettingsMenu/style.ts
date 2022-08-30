import styled, { css } from "styled-components";

interface ActiveButtonProps {
	active?: boolean;
}

export const BackButton = styled.div`
	${() => css`
		cursor:pointer;
		padding: 1rem;
		img {
		width:2rem;
		}
	`}
`;

export const SettingsNavigationContainer = styled.div`
	${() => css`
		min-width: 19.188rem;
		margin-top: 3rem;
		height: 90vh;
		padding: 1.5rem;
		background-color: #262626; 
		box-sizing: border-box;
		border-radius: 8px;
	`}
`;

export const SettingsNavigationButtonsList = styled.div`
	${() => css`
		width: 100%;
		height: 45.188rem;
		background-color: #0D0D0D; 
		box-sizing: border-box;
		margin: 1.5rem 0;
		border-radius: 8px;
		overflow: hidden;
	`}
`;

export const SettingsNavigationButtonsContainer = styled.div<ActiveButtonProps>`
	${({theme, active}) => css`
		height: 5.5rem;
		width: 100%;
		padding: 1.5rem 0;
		padding-left: 3rem;
		box-sizing: border-box;
		h2 { 
			font-size: 20px;
			
		}
		img { 
			width: 30px;
		}
		${active &&
    css`
      background-color: ${theme.colors.primaryColorOpacity};
    `}
	`}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
	${({theme, active}) => css`
		width: 100%;
		height: 100%;
		cursor: pointer;
		${active && css`
			border-right: 3px solid ${theme.colors.primaryColor};
			
		`}
	`}
`;