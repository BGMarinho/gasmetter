import styled from 'styled-components';

export const ButtonContainer = styled.div<{
  centralize?: boolean;
}>`
  display: flex;
  justify-content: ${({ centralize }) =>
    centralize ? 'center' : 'flex-start'};
  align-items: center;
  width: 100%;
`;

export const Button = styled.button<{ caption?: string }>`
  all: unset;
  text-transform: ${({ caption }) => caption};
  font-size: 0.75rem;
`;
