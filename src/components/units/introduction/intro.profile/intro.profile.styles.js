import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: ${(props) => {
    return props.zoom ? "block" : "none";
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
  position: relative;
  left: 0;
  top: 0;
`;
export const ProfileName = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: "NotoSans";
  margin-bottom: 10%;
`;
export const ProfileContents = styled.div`
  font-size: 10px;
  font-family: "NotoSans";
`;
