import styled from 'styled-components';

export const Banner = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;

  @media (max-width: 30rem) {
    display: flex;
    flex-direction: column-reverse;
  }

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ul {
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  }
`;
