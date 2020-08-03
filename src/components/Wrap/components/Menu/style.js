import styled from "styled-components";

export const Menu = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: none;

  i {
    color: #fff;
    font-size: 24px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
`;

export const MenuPreto = styled.div`
  width: 50%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: black;
`;
