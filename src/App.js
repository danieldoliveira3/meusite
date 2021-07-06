import React from "react";
import Wrap from "./components/Wrap";
import BoxInfo from "./components/BoxInfo";
import * as s from "./components/Box/style";
import ItemBoxInfo from "./components/BoxInfo/components/ItemBoxInfo";
import preview1 from "./assets/images/preview1.png";
import preview2 from "./assets/images/preview2.png";
import preview3 from "./assets/images/preview3.png";
import preview4 from "./assets/images/preview4.png";
import preview5 from "./assets/images/preview5.png";
import fotoPerfil from "./assets/images/perfil.jpg";
import ProgressBar from "./components/ProgressBar";
export default function App() {
  // const ar = ["PROPES", "COGNITA", "BANANA"];
  return (
    <Wrap>
      <s.wrapPerfil id="home">
        <s.fotoPerfil fotoPerfil={fotoPerfil}></s.fotoPerfil>

        <s.Box height="auto;">
          <s.Text>
            Oi, me chamo Daniel e estudo Sistemas de Informação no CIN. Eu gosto
            muito de FrontEnd, UI e UX e pretendo me aprofundar nessa área.
            <br />
            <br />
            <s.ItalicText>
              Esse site foi testado e aprovado pela minha priminha de 7 anos.
            </s.ItalicText>
          </s.Text>
        </s.Box>

        <s.OcultarRedes>
          <s.RedesSociais>
            <a
              href="https://github.com/ddevdan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i as="a" className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/_danieldoliveira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i as="a" className="fab fa-instagram"></i>
            </a>
          </s.RedesSociais>
        </s.OcultarRedes>
      </s.wrapPerfil>
      <BoxInfo id="habilities" title="HABILIDADES">
        <ProgressBar titulo="REACT" done="80" />
        <ProgressBar titulo="ANGULAR" done="60" />
        <ProgressBar titulo="RUBY ON RAILS" done="80" />
        <ProgressBar titulo="JAVASCRIPT" done="80" />
        <ProgressBar titulo="DOCKER" done="70" />
        <ProgressBar titulo="HTML" done="90" />
        <ProgressBar titulo="CSS" done="90" />
        <ProgressBar titulo="PYTHON" done="70" />
        <ProgressBar titulo="DJANGO" done="50" />
      </BoxInfo>

      <BoxInfo id="projects" title="PROJETOS">
        <ItemBoxInfo
          key={Math.random() * 100}
          bg={preview3}
          title="ANALYTICS UAB"
          buttonText="VER MAIS"
          buttonURL="https://v-lab-ufpe.medium.com/analyticsuab-bbb3945abcc4"
        />

        <ItemBoxInfo
          key={Math.random() * 100}
          bg={preview1}
          title="FINANTH"
          buttonText="VER MAIS"
          buttonURL="https://finanth.vercel.app/"
        />

        <ItemBoxInfo
          key={Math.random() * 100}
          bg={preview5}
          title="COMBINA NOME"
          buttonText="VER MAIS"
          buttonURL="https://combina-nome.herokuapp.com/"
        />


        <ItemBoxInfo
          key={Math.random() * 100}
          bg={preview4}
          title="NATAL KATY PERRY"
          buttonText="VER MAIS"
          buttonURL="https://katyperry.me"
        />
        {/* <ItemBoxInfo
          key={Math.random() * 100}
          bg={preview2}
          title="COGNITA"
          buttonText="VER MAIS"
          buttonURL="https://cognitadesenvolvimento.com.br/"
        /> */}


      </BoxInfo>
    </Wrap>
  );
}
