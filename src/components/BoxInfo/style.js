import styled from "styled-components";

export const wrapBoxInfo = styled.div`
  position: relative;

  z-index: 0;
  margin-right: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;
    margin-top: 20px;

    &:last-child {
      margin-top: 60px;
    }
  }
`;

export const TitleBoxInfo = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  z-index: 1;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: justify;

  color: #ffffff;

  z-index: 10000;
`;

export const BodyBoxInfo = styled.div`
  position: relative;

  display: inline-flex;
  flex-wrap: wrap;
  gap: 40px;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  width: 300px;

  max-height: 400px;
  /* nem lembro mais qual problema to tentando resolver */
  padding: 30px;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;

  background: #282a36;
  border-radius: 15px;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;
    padding-left: 30px;

    max-height: 500px;
    width: 100%;
    justify-content: center;
  }
`;

//não consigo fazer o titulo aparecer
export default TitleBoxInfo;
