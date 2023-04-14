import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }};
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Title = styled.div`
  width: 30%;
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;
export const ContentsWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;
export const Year = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  color: lightgray;
  margin-bottom: 3%;
`;
export const Contents = styled.div`
  width: 100%;
  line-height: 1.3;
  font-size: 10px;
  margin-bottom: 5%;
`;

export const Blur = styled.img`
  width: 100%;
  display: ${(props) => (props.zoom ? "none" : "block")};
  margin-top: 10%;
`;
