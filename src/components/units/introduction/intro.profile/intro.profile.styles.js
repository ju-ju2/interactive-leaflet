import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }};
`;
export const ProfileContentsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;
export const ProfileImage = styled.img`
  width: 40%;
  height: 40%;
`;
export const ProfileName = styled.div`
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  font-weight: 600;
  /* font-family: "NotoSans"; */
  font-size: 17px;
`;
export const ProfileNameE = styled.div`
  @media (max-width: 1200px) {
    font-size: 10px;
  }
  font-weight: 500;
  /* font-family: "NotoSans"; */
  margin-bottom: 10%;
  font-size: 15px;
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
