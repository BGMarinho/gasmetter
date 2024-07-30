import styled from 'styled-components';

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const Information = styled.div`
  font-size: 1rem;
  a {
    all: unset;
  }
`;
