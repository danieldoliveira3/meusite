import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;
  position: relative;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${(props) => `url(${props.bg})`};

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }
`;
