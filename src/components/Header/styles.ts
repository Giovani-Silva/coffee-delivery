import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  gap: 2rem;

  label {
    display: none;
    cursor: pointer;
    background-color: ${(props) => props.theme['secondary-100']};
    border-radius: 6px;
    width: 2rem;
    height: 2rem;

    svg {
      color: ${(props) => props.theme['secondary-500']};
    }

    @media (max-width: 30rem) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  input[type='checkbox'] {
    position: absolute;
    left: -100%;
  }

  input[type='checkbox']:checked ~ nav {
    display: flex;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 30rem) {
      display: none;
    }

    a {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-500']};
      border-radius: 6px;
      padding: 0 1rem;
      transition: color 150ms ease-in-out, background 150ms ease-in-out;

      &:first-child {
        background: ${(props) => props.theme['secondary-100']};

        svg,
        span {
          color: ${(props) => props.theme['secondary-400']};
        }
      }
      &:last-child {
        background: ${(props) => props.theme['primary-100']};

        svg {
          color: ${(props) => props.theme['primary-400']};
        }
      }

      &:hover,
      &.active {
        &:first-child {
          svg,
          span {
            color: ${(props) => props.theme['white']};
          }
          background: ${(props) => props.theme['secondary-500']};
        }
        &:last-child {
          svg,
          span {
            color: ${(props) => props.theme['white']};
          }
          background: ${(props) => props.theme['primary-500']};
        }
      }
    }
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
`;
