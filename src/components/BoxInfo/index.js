import React, { Component } from "react";
import * as s from "./styles";
import image from "../../assets/images/exemplo.jpg";
import ItemBoxInfo from "./components/ItemBoxInfo";
class BoxInfo extends Component {
  render() {
    return (
      <s.wrapBoxInfo>
        <s.TitleBoxInfo>MEUS PROJETOS</s.TitleBoxInfo>
        <s.BodyBoxInfo>
          <ItemBoxInfo
            bg={image}
            title="COGNITA"
            buttonText="VER MAIS"
            buttonURL="https://google.com"
          />

          <ItemBoxInfo
            bg={image}
            title="PROPES"
            buttonText="VER MAIS"
            buttonURL="https://google.com"
          />

          <ItemBoxInfo
            bg={image}
            title="PROPES"
            buttonText="VER MAIS"
            buttonURL="https://google.com"
          />

          <ItemBoxInfo
            bg={image}
            title="PROPES"
            buttonText="VER MAIS"
            buttonURL="https://google.com"
          />

          <ItemBoxInfo
            bg={image}
            title="PROPES"
            buttonText="VER MAIS"
            buttonURL="https://google.com"
          />

          <ItemBoxInfo
            bg={image}
            title="HELP ME"
            buttonText="VER MAIS"
            buttonURL="https://google.com"
          />
        </s.BodyBoxInfo>
      </s.wrapBoxInfo>
    );
  }
}

export default BoxInfo;
