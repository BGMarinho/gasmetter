import styled from 'styled-components';

export const ButtonContainer = styled.div<{
  centralizedText: boolean | undefined;
}>`
  display: flex;
  justify-content: ${({ centralizedText }) =>
    centralizedText ? 'center' : 'flex-start'};
  align-items: center;
  width: 100%;
`;

export const Button = styled.button<{ uppercase: boolean | undefined }>`
  all: unset;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: 0.75rem;
`;
