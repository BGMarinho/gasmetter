import styled from 'styled-components';

export const ButtonContainer = styled.div<{
  centralize: boolean | undefined;
}>`
  display: flex;
  justify-content: ${({ centralize }) =>
    centralize ? 'center' : 'flex-start'};
  align-items: center;
  width: 100%;
`;

export const Button = styled.button<{ uppercase: boolean | undefined }>`
  all: unset;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: 0.75rem;
`;
