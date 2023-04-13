import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10%;
  /* visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }}; */
`;
export const ProfileContentsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const ProfileImage = styled.img`
  width: 45%;
  height: 50%;
`;
export const ProfileName = styled.div`
  @media (max-width: 1200px) {
    font-size: 13px;
  }
  font-weight: 600;
  /* font-family: "NotoSans"; */
  font-size: 15px;
`;
export const ProfileNameE = styled.div`
  @media (max-width: 1200px) {
    font-size: 10px;
  }
  font-weight: 500;
  /* font-family: "NotoSans"; */
  margin-bottom: 10%;
  font-size: 13px;
`;
export const ProfileContents = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
  /* font-family: "NotoSans"; */
  margin-bottom: 0.5vh;
  font-size: 8px;
  > :nth-of-type(1) {
    :hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 1500px) {
    font-size: 12px;
  }
`;
export const HiddenWrapper = styled.div`
  opacity: ${(props) => (props.zoom ? 1 : 0)};
`;
