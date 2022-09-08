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
`;

export const ListIcons = styled.ul`
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));

  li {
    display: flex;
    gap: 1rem;
    align-items: center;
    &:nth-child(1) span {
      background: ${(props) => props.theme['primary-500']};
    }
    &:nth-child(2) span {
      background: ${(props) => props.theme['secondary-500']};
    }
    &:nth-child(3) span {
      background: ${(props) => props.theme['primary-400']};
    }
    &:nth-child(4) span {
      background: ${(props) => props.theme['secondary-400']};
    }
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme['gray-100']};
`;


export const Card = styled.li`
display: flex;
`
