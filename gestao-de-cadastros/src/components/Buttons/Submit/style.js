import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  height: 50px;
  display: flex;
  align-self: ${props => (props.block === true ? 'stretch' : 'unset')};
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0.4rem;
  border: none;
  background: #1c1c1c;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${darken(0.2, "#1C1C1C")};
  }
`;
