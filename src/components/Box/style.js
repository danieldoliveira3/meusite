import styled from "styled-components";

export const wrapPerfil = styled.div`
  width: 300px;
  height: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-top: -80px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const fotoPerfil = styled.div`
  width: 200px;
  height: 200px;

  position: relative;
  display: block;

  background: ${(props) => `url(${props.fotoPerfil})`};
  background-size: 200px 200px;

  margin-bottom: 20px;
  border-radius: 100%;
`;

export const Box = styled.div`
  width: 200px;

  height: ${(props) => (props.height ? props.height : "auto")};
  padding: 20px;

  background: #282a36;
  border-radius: 15px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-bottom: -90px;
  }
`;

export const RedesSociais = styled.div`
  width: 200px;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    margin-right: 10px;

    color: #fff;
    font-size: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const OcultarRedes = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  text-align: center;
`;
export const ItalicText = styled.div`
  text-align: center !important;
  font-size: 12px;
`;
