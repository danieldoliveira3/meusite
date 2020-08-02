import React from "react";
import Wrap from "./components/Wrap";
import BoxInfo from "./components/BoxInfo";
import * as s from "./components/Box/style";
import ItemBoxInfo from "./components/BoxInfo/components/ItemBoxInfo";
import image from "./assets/images/exemplo.jpg";
import fotoPerfil from "./assets/images/perfil.jpg";

export default function App() {
  const ar = ["PROPES", "COGNITA", "BANANA"];
  return (
    <Wrap>
      <s.wrapPerfil>
        <s.fotoPerfil fotoPerfil={fotoPerfil}></s.fotoPerfil>

        <s.Box height="auto;">
          <s.Text>
            Oi, me chamo Daniel e estudo Sistemas de Informação no CIN. Eu gosto
            muito de FrontEnd, UI e UX e pretendo me aprofundar nessa área.
          </s.Text>
        </s.Box>

        <s.RedesSociais>
          <a href="/" target="_blank">
            <i as="a" className="fab fa-github"></i>
          </a>
          <a href="/" target="_blank">
            <i as="a" className="fab fa-instagram"></i>
          </a>
        </s.RedesSociais>
      </s.wrapPerfil>
      <BoxInfo maxWidth="660px" title="MEUS PROJETOS">
        {ar.map((i) => {
          return (
            <ItemBoxInfo
              key={i.toString()}
              bg={image}
              title={i.toUpperCase()}
              buttonText="VER MAIS"
              buttonURL="https://google.com"
            />
          );
        })}
      </BoxInfo>
    </Wrap>
  );
}
