import React from "react";
import * as s from "./style";
export default function ItemBoxInfo(props) {
  const { bg, title, buttonText, buttonURL } = props;
  return (
    <s.ItemBoxInfo bg={bg}>
      <s.TitleItemBox>{title}</s.TitleItemBox>

      <s.ButtonBoxInfo as="a" target="_blank" href={buttonURL}>
        {buttonText}
      </s.ButtonBoxInfo>
    </s.ItemBoxInfo>
  );
}
