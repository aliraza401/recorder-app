import styled from "styled-components";

export const MediaControllerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5rem;
  padding-bottom: 1rem;
  flex-grow: 1;
  border-radius: 1.25rem;
  /* background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4); */
`;

export const ControlIcon = styled.div`
  cursor: pointer;
  z-index: 1;
  color: white;

  .pointer-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    fill: white;
    font-size: 3rem;
  }
`;
