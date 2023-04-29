import styled from "styled-components";

export const CanvasContainer = styled.div`
  background: linear-gradient(to bottom right, purple, orange);
  width: 100%;
  height: 100%;
`;

export const CircleImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
