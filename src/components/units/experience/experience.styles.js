import styled from "@emotion/styled";

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
`;
export const ExperienceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5%;
`;
export const ExperienceTitle = styled.div`
  width: 30%;
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;
export const ExperienceContentsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  /* background-color: aliceblue; */
  background-color: ${(props) => (props.zoom ? "none" : "aliceblue")};
`;
export const ExperienceYear = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  color: lightgray;
  margin-bottom: 3%;
`;
export const ExperienceContents = styled.div`
  width: 100%;
  line-height: 1.3;
  font-size: 10px;
  margin-bottom: 5%;
`;
export const HiddenWrapper = styled.div`
  opacity: ${(props) => (props.zoom ? 1 : 0)};
`;
