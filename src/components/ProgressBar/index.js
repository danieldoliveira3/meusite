import React from "react";
import * as s from "./style";

const Progress = ({ done, titulo }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <>
      <s.TitleProgressBar>{titulo}</s.TitleProgressBar>

      <s.Progress>
        <s.ProgressDone style={style}>{done}%</s.ProgressDone>
      </s.Progress>
    </>
  );
};

export default Progress;
