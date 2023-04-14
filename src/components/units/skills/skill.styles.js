import styled from "@emotion/styled";

// export const SkillContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 10%;
//   /* visibility: ${(props) => {
//     return props.zoom ? "visible" : "hidden";
//   }}; */
//   display: ${(props) => (props.zoom ? "block" : "none")};
// `;
export const SkillContainer = styled.div`
  /* display: ${(props) => (props.zoom ? "flex" : "none")}; */

  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }};
  flex-direction: column;
  margin-top: 10%;
  /* transition: all 1s ease-in-out; */
`;
export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10%;
`;
export const SkillTitle = styled.div`
  font-size: 12px;
  width: 50%;
  font-weight: 600;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;
export const SkillContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => {
    return props.zoom ? "none" : "aliceblue";
  }};
`;
export const SkillContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SkillContentsTitle = styled.div`
  font-size: 12px;

  margin-right: auto;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;
export const SkillChartDiv = styled.div`
  width: 60%;
  height: 8px;
  background-color: #eeeeee;
`;

export const SkillChartPer = styled.div`
  /* opacity: ${(props) => (props.zoom ? 1 : 0)}; */
  width: ${(props) => props.per};
  height: 100%;
  background-color: #ffb4b4;
  transform-origin: left center;
  transform: scaleX(${(props) => (props.zoom ? 1 : 0)});
  transition: ${(props) => (props.zoom ? "all 1s ease-in-out" : "none")};
`;
export const SkillIcon = styled.img`
  @media (max-width: 1400px) {
    width: 10px;
    height: 10px;
  }
  width: 12px;
  height: 12px;
  margin-right: 6px;
`;

export const HiddenWrapper = styled.div`
  opacity: ${(props) => (props.zoom ? 1 : 0)};
`;
export const Blur = styled.img`
  width: 100%;
  display: ${(props) => (props.zoom ? "none" : "block")};
  margin-top: 10%;
`;
