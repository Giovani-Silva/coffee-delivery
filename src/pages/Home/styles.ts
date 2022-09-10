import styled from 'styled-components';

export const Banner = styled.div`
  margin: 2rem 0;
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

export const ListCard = styled.ul`
  display: grid;
  gap: 3rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  margin-top: 3rem;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 2rem;
  background: ${(props) => props.theme['gray-100']};
  padding: 1.5rem;
  width: min(17.5rem, 100%);
  position: relative;

  h3 {
    margin: 0.5rem 0;
  }

  img {
    display: block;
    margin: 1rem auto;
    margin-top: -3rem;

    &:after {
      content: '';
      width: 100px;
      height: 100px;
      background: ${(props) => props.theme['gray-300']};
    }
  }
`;

export const Tag = styled.span`
  text-transform: uppercase;
  font-size: 0.625rem;
  color: ${(props) => props.theme['primary-400']};
  background: ${(props) => props.theme['primary-100']};
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 16px;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CardBody = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
  }
`;

export const CardFooter = styled.div``;
