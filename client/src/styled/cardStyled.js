import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
`;

export const CardStyle = styled.div`
  
  background-position: center;
  background-color: #79d1d530;
  border-radius: 8px;
  width: 100%;
  max-width: 250px;
  min-width: 250px;
  max-height: 500px;
  min-height: 500px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  animation: ${slideIn} 1s ease-in-out forwards, ${fadeIn} 1s ease-in-out forwards;
`;

export const Button = styled.button`
  background-color: #f5f5f5;
  border: 3px;
  border-radius: 8%;
  margin-top: 15px;
  margin-right: 15px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`;

export const Image = styled.img`

background-position: center;
  width: 100%;
  max-width: 180px;
  margin-top: 10px;
border  : 3px solid black ;
border-radius: 15px;
height: 100%;
max-height: 180px;
`;

export const ID = styled.h3`
  font-size: 14px;
  margin-top: 10px;
`;
