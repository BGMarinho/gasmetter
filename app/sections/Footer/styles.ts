import styled from 'styled-components';

export const FooterWrapper = styled.section`
  align-self: end;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  color: #ffffff;
  line-height: 1rem;
  font-size: 0.75rem;
  padding: 0.5rem 0rem 0.75rem 0rem;
  gap: 1rem;
`;

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1.5rem;
`;

export const Information = styled.div`
  font-size: 0.75rem;
  a {
    all: unset;
    color: #8bc0f7;
  }
`;
