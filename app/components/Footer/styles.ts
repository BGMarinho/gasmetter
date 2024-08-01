import styled from 'styled-components';

export const FooterWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  border-top: 5px solid #191970;
  line-height: 1rem;
  font-size: 0.75rem;
  padding: 0.5rem 0rem;
  gap: 1rem;
`;

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

export const Information = styled.div`
  font-size: 0.75rem;
  a {
    all: unset;
    /* color: #191970; */
  }
`;
