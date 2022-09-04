import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: min(100vh, 100%);
  margin: 0 auto 5rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['background']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
