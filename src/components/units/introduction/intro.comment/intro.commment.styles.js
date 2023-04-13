import styled from "@emotion/styled";

export const Contents = styled.div`
  @media (max-width: 1200px) {
    font-size: 10px;
  }

  font-size: 12px;

  display: -webkit-box;
  /* 표시할 줄 수 */
  -webkit-line-clamp: ${(props) => {
    return props.zoom ? "100" : "2";
  }};
  /* -webkit-line-clamp: 2;  */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  word-break: keep-all;
  text-align: justify;
  /* position: ${(props) => {
    return props.zoom ? "static" : "absolute";
  }};
  left: 0;
  top: 2em; */
  @media (min-width: 1500px) {
    font-size: 14px;
  }
  /* background-color: aliceblue; */
  background-color: ${(props) => {
    return props.zoom ? "none" : "aliceblue";
  }};
`;
export const Bold = styled.span`
  @media (max-width: 1200px) {
    font-size: 11px;
  }
  font-weight: 600;
  letter-spacing: -0.01em;

  font-size: 13px;
  @media (min-width: 1500px) {
    font-size: 15px;
  }
`;
