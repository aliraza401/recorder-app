import styled from "styled-components";
import { Button, theme } from "antd";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 98vh;
  width: 100%;
  .icon-logo {
    width: 5rem;
    /* border-radius: 3rem; */
    color: ${({ theme }) => theme.lightColor};
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  svg {
    font-size: 1.2rem;
    color: white;
    background-color: ${({ theme }) => theme.textColor};
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export const HomeButton = styled(Button)`
  background-color: transparent;
  border-width: 0;
`;
