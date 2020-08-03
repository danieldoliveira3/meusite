import styled from "styled-components";

export const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  margin-bottom: -50px;
  height: 15px;
  width: 300px;
  font-family: "Roboto" sans-serif;
  &:last-child {
    margin-top: 15px;
    margin-bottom: 0;
  }
`;

export const ProgressDone = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  font-family: "Roboto" sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

export const TitleProgressBar = styled.p`
  font-size: 18px;
  color: white;
  overflow: hidden;
  margin-bottom: -90px;
  width: 200px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
    margin-left: -20px;
  }
`;

export const wrapProgress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 200px;
`;
