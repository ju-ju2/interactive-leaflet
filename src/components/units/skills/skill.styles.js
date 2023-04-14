import styled from "@emotion/styled";

export const Container = styled.div`
  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }};
  flex-direction: column;
  margin-top: 10%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10%;
`;
export const Title = styled.div`
  font-size: 12px;
  width: 50%;
  font-weight: 600;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;
export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => {
    return props.zoom ? "none" : "aliceblue";
  }};
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ContentsTitle = styled.div`
  font-size: 12px;

  margin-right: auto;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;
export const ChartDiv = styled.div`
  width: 60%;
  height: 8px;
  background-color: #eeeeee;
`;

export const ChartPer = styled.div`
  width: ${(props) => props.per};
  height: 100%;
  background-color: #ffb4b4;
  transform-origin: left center;
  transform: scaleX(${(props) => (props.zoom ? 1 : 0)});
  transition: ${(props) => (props.zoom ? "all 1s ease-in-out" : "none")};
`;
export const Icon = styled.img`
  @media (max-width: 1400px) {
    width: 10px;
    height: 10px;
  }
  width: 12px;
  height: 12px;
  margin-right: 6px;
`;

export const Blur = styled.img`
  width: 100%;
  display: ${(props) => (props.zoom ? "none" : "block")};
  margin-top: 10%;
`;
