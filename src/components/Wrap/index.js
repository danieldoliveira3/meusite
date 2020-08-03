import React from "react";
import * as s from "./style";
import Menu from "./components/Menu";
import background from "../../assets/images/background.gif";

export default function Wrap(props) {
  return (
    <s.Wrap bg={background}>
      <Menu></Menu>
      {props.children}
    </s.Wrap>
  );
}
