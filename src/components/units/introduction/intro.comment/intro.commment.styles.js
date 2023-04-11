import styled from "@emotion/styled";

export const Contents = styled.span`
  font-size: 8px;
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
`;
export const Bold = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
`;
