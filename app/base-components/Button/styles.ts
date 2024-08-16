import styled from 'styled-components';

export const ButtonContainer = styled.div<{
  $centralize?: string;
}>`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button<{
  $caption?: string;
  $centralize?: boolean;
}>`
  all: unset;
  text-transform: ${({ $caption }) =>
    $caption !== undefined ? $caption : 'none'};
  text-align: ${({ $centralize }) =>
    $centralize !== undefined ? 'center' : 'start'};
  font-size: 0.75rem;
  width: 100%;
`;
