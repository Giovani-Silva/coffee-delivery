import styled from 'styled-components';

export const Main = styled.main`
  width: min(980px, 100%);
  margin: 0 auto;
`;

export const Banner = styled.div`
  margin: 2rem 0 6rem;
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  position: relative;

  @media (max-width: 30rem) {
    display: flex;
    flex-direction: column-reverse;
  }

  &:after {
    content: '';
    position: absolute;
    width: 75%;
    height: 75%;
    background: linear-gradient(135deg, #4b2995, #8047f8, #ebc136, #c47f17);
    z-index: 0;
    filter: blur(100px);
    opacity: 0.3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  div {
    z-index: 1;
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
  gap:4rem;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  margin-top: 3rem;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 2rem;
  background: ${(props) => props.theme['gray-100']};
  padding: 1.25rem;
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
  margin-top: auto;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  min-height: 5rem;
`;

export const CardBody = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  form {
    display: flex;
    justify-content: space-between;
  }

  & > span:first-child {
    font-size: 0.625rem;
    color: ${(props) => props.theme['gray-600']};
  }
  & > span ~ span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const AddCard = styled.button`
  width: 2rem;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['secondary-500']};
  cursor: pointer;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: ${(props) => props.theme['secondary-400']};
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`;
