import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => `url(${props.bg})`};

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  }
`;
