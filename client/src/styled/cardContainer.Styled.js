import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  max-width: 600px;
  justify-content: center;
  
  & > * {
    flex: 1 1 200px;
  }
`;