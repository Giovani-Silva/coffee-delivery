import styled from 'styled-components';

export const StepperWrapper = styled.div`
  background: ${(props) => props.theme['white']};
  width: min(80px, 100%);
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 0 black;
  input {
    height: 1.5rem;
    flex: 1;
    text-align: center;
    font-size: 0.875rem;
    font-weight: bold;
    border: none;

    &:focus {
      outline: none;
      background: ${(props) => props.theme['secondary-100']};
      box-shadow: 0 0 0 2px ${(props) => props.theme['secondary-400']};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    width: 1.25rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    color: ${(props) => props.theme['secondary-500']};
    cursor: pointer;
    outline: none;
    &:focus {
      box-shadow: none;
    }
    &:hover {
      color: ${(props) => props.theme['secondary-400']};
    }
  }
`;
