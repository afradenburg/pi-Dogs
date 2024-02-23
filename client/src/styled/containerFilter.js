import React, { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: #3498db;
  color: white;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 15px;
  /* Estilos para pantallas más pequeñas */
 
}
`;

export const ButtonContainer = styled.div`
display: flex;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const FilterButton = styled.button`
  background-color: #9bd5c6;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
