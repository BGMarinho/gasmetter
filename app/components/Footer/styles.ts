import styled from 'styled-components';

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: #000000;
  color: #ffffff;
  line-height: 1rem;
  font-size: 0.75rem;
  width: 100%;
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: fit-content;
`;

export const Information = styled.div`
  font-size: 1rem;
  a {
    all: unset;
  }
`;
