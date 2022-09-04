import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  gap: 2rem;

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    a {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-500']};
      border-radius: 6px;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      padding: 0 1rem;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['gray-500']};
      }
      &.active {
        color: ${(props) => props.theme['gray-500']};
      }

      &:first-child {
        background: ${(props) => props.theme['secondary-100']};

        span {
          color: ${(props) => props.theme['secondary-400']};
        }

        &:hover {
          border-bottom: 3px solid ${(props) => props.theme['secondary-500']};
        }

        &.active {
          background: ${(props) => props.theme['secondary-500']};
          span {
            color: ${(props) => props.theme['secondary-100']};
          }
        }
      }
      &:last-child {
        background: ${(props) => props.theme['primary-100']};

        &:hover {
          border-bottom: 3px solid ${(props) => props.theme['primary-500']};
        }
        &.active {
          background: ${(props) => props.theme['primary-500']};
        }
      }
    }
  }
`;
