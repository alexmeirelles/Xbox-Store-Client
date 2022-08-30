import styled, { css } from "styled-components";

interface StyledButtonProps {
    variant?: "disabled" | "cancel";
    size?: "small" | "large" | "x-large";
  }

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
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
    ${variant === "disabled" &&
    css`
      background-color: ${theme.colors.baseBg2};
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.baseBg1};
      box-shadow: none;
    `}
    ${variant === "cancel" &&
    css`
      background-color: ${theme.colors.baseBg2};
      color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.secondaryColor};
      box-shadow: none;
    `}
    ${size === "small" &&
    css`
      height: 2.125rem;
      padding: 0 0.75rem;
      width: 7.25rem;
    `}
    ${size === "large" &&
    css`
      width: 18.625rem;
    `}
    ${size === "x-large" &&
    css`
      width: 22.5rem;
    `}
  `}
`;