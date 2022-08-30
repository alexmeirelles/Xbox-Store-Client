import { css } from 'styled-components';
import { colors } from 'assets/styles/colors';

/* inputs de forms e campos de seleção */
const input = () => css`
  height: 48px;
  width: 350px;
  border-radius: 2px;
  margin-top: 10px;
  padding: 20px;
  background: ${colors.baseForm};
  border: 0px;
  box-sizing: border-box;
`;

export const mixins = {
    input,
}