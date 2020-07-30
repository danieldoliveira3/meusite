import styled from "styled-components";

export const wrapBoxInfo = styled.div`
  position: relative;
  padding: 20px;
  top: 20px;
`;

export const TitleBoxInfo = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: justify;

  color: #ffffff;

  z-index: 10000;
`;

export default TitleBoxInfo;

export const BodyBoxInfo = styled.div`
  position: relative;

  display: inline-flex;
  flex-wrap: wrap;
  gap: 40px;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  max-width: 660px;
  width: calc(100% + var(--gap));
  max-height: 400px;

  padding: 30px;
  padding-left: 60px;
  padding-top: 30px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;

  overflow: auto;

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;
    padding-left: 0;

    max-height: 500px;

    justify-content: center;
  }
`;

//não consigo fazer o titulo aparecer
