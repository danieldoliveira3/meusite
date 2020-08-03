import styled from "styled-components";
import TitleBoxInfo from "../../style.js";

export const TitleItemBox = styled(TitleBoxInfo)`
  font-size: 18px;
  top: -25px;
  overflow: hidden;
  width: 200px;
  left: 0;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ItemBoxInfo = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 140px;

  z-index: 0;
  position: relative;

  background: ${(props) => `url(${props.bg})`};
  background-size: 250px 140px;

  img {
    width: 250px;
    border-radius: 24px;
  }
`;

export const ButtonBoxInfo = styled.button`
  width: 90px;
  padding: 5px;

  position: absolute;
  bottom: -10px;
  left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #261263;
  border-radius: 10px;

  font-size: 16px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #fff;
`;
