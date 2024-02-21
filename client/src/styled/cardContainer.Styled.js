import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 100%; */
  /* justify-content: center; */
  margin-left: 55px;
  
  & > * {
    flex: 1 1 200px;
  }
`;