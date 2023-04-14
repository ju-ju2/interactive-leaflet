import styled from "@emotion/styled";

export const Contents = styled.div`
  @media (max-width: 1200px) {
    font-size: 10px;
  }
  font-size: 12px;

  /* 표시할 줄 수 */
  /* display: -webkit-box; */
  /* -webkit-line-clamp: 2;  */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  word-break: keep-all;
  text-align: justify;

  @media (min-width: 1500px) {
    font-size: 14px;
  }

  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
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

export const Blur = styled.img`
  width: 100%;
  display: ${(props) => (props.clickPage1 || props.zoom ? "none" : "block")};

  margin-top: 10%;
`;
