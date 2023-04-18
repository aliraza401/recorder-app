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
    width: 10rem;
    border-radius: 3rem;
    color: ${({ theme }) => theme.lightColor};
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    padding: 1rem;
    border-radius: 1.4rem;
  }
`;

export const HomeButton = styled(Button)`
  background-color: transparent;
  border-width: 0;
`;
