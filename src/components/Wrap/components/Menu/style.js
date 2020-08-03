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
  height: calc(100vh - 10vh);

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: black;
`;

export const MenuTransparent = styled.div`
  width: 50%;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background: transparent;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  position: absolute;
  bottom: 10px;

  i {
    color: #fff;
    font-size: 24px;
    width: 100%;
    text-align: left;
  }

  ul {
    list-style: none;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
`;

export const MenuText = styled.li`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  background: #ffffff;
  border-radius: 12px;
  padding: 10px;
  font-family: "Roboto" sans-serif !important;
  margin-top: 10px;
`;
