import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #FFF;
  background: ${props => props.color};
  height: 50px;
  width: 200px;
  padding: 0 16px;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${props => darken(0.2, props.color)};
  }
`;
