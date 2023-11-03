import styled from "styled-components";

export const SearchStyled = styled.div`
  background-color: rgb(62, 62, 62);
  color: white;
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  align-items: center;
  align-self: center;
  justify-content: center;
  border: 5px;
  border-radius: 25px;
  gap: 3px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;