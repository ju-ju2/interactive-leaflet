import styled from "@emotion/styled";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }};
`;
export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10%;
`;
export const SkillTitle = styled.div`
  font-size: 12px;
  width: 40%;
`;
export const SkillContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: aliceblue;
`;
export const SkillContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SkillContentsTitle = styled.div`
  font-size: 12px;
  width: 30%;
  margin-right: auto;
`;
export const SkillChartDiv = styled.div`
  width: 60%;
  height: 12px;
  background-color: lightgray;
`;
