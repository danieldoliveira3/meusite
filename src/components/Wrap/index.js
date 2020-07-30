import React from "react";
import * as s from "./styles";
import background from "../../assets/images/background.gif";

export default function Wrap(props) {
  return <s.Wrap bg={background}>{props.children}</s.Wrap>;
}
