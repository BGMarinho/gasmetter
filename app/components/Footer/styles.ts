import styled from 'styled-components';

export const FooterWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  border-top: 5px solid #191970;
  line-height: 1rem;
  font-size: 0.75rem;
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: fit-content;
`;

export const Information = styled.div`
  font-size: 0.75rem;
  a {
    all: unset;
  }
`;
