import styled from "styled-components";
import { Button } from "antd";

export const HomeContainer = styled.div`
  background: linear-gradient(to bottom right, purple, orange);
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem; // Reduced margin-bottom
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HomeButton = styled.button`
  background-color: rgba(0, 0, 0, 0.15); // Recommended button background color
  color: white; // Updated text color
  border-width: 0;
  width: 80%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25); // Updated hover background color
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .anticon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;
