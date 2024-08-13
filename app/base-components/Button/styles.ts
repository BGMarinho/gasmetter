import styled from 'styled-components';

export const ButtonContainer = styled.div<{
  $centralize?: string;
}>`
  display: flex;
  justify-content: ${({ $centralize }) =>
    $centralize !== undefined ? $centralize : 'flex-start'};
  align-items: center;
  width: 100%;
`;

export const Button = styled.button<{ $caption?: string }>`
  all: unset;
  text-transform: ${({ $caption }) =>
    $caption !== undefined ? $caption : 'none'};
  font-size: 0.75rem;
`;
