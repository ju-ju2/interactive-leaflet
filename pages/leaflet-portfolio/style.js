import styled from "@emotion/styled";

export const Container = styled.div`
  background-image: url("./img/background.jpeg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  perspective: 1500px;
  overflow: hidden;
`;
export const Leaflet = styled.div`
  position: absolute;
  width: 20vw;
  height: 30vw;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform-style: preserve-3d;
  transition: 1s;

  /* animation: leaflet-ani 1s forwards; */

  transform: translate3d(
      ${(props) => {
        return `${props.dx}px, ${props.dy}px, ${props.dz}vh`;
      }}
    )
    rotateY(
      ${(props) => {
        return `${props.angle}deg`;
      }}
    );
`;
export const Page1 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-style: preserve-3d;
  z-index: 2;
  transform-origin: left;
  > :nth-of-type(1) {
    cursor: pointer;
  }
  > :nth-of-type(2) {
    background-color: white;
  }
`;
export const Page2 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-style: preserve-3d;
  > :nth-of-type(1) {
    background-color: white;
  }
`;
export const Page3 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-style: preserve-3d;
  z-index: 1;
  transform-origin: right;
  > :nth-of-type(1) {
    cursor: pointer;
  }
  > :nth-of-type(2) {
    background-color: white;
  }
`;
export const PageFace = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  :nth-of-type(2) {
    transform: rotateY(180deg);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10%;
  /* font-family: "Shadows Into Light", cursive; */
`;
export const CoverTitle = styled.div`
  font-size: 5vw;
  text-align: center;
  margin-bottom: 10%;
  text-align: center;
  font-family: "myfont";
`;
export const CoverSubTitle = styled.div`
  font-size: 2vw;
  text-align: center;
  font-family: "myfont";
`;

export const PageFaceInnerBox = styled.div`
  width: 100%;
  position: relative;
  /* height: 20%; */
  height: ${(props) => {
    return props.zoom ? "auto" : "20%";
  }};
  /* background-color: yellow; */
  margin-bottom: 5%;

  cursor: ${(props) => {
    return props.zoom ? "default" : "pointer";
  }};

  &:not(:nth-of-type(${(props) => props.num})) {
    display: ${(props) => {
      return props.zoom ? "none" : "block";
    }};
  }
`;
export const BackBtn = styled.button`
  position: absolute;
  right: 0%;
  top: 3%;
  font-size: 8px;
  font-weight: 600;
  background: none;
  border: none;
  z-index: 100;
  padding: 5%;
  cursor: pointer;
  visibility: ${(props) => {
    return props.zoom ? "visible" : "hidden";
  }};
`;
export const CloseBtn = styled.div`
  /* display: none; */
  position: absolute;
  right: 5%;
  top: -2vw;
  font-size: 1.5vw;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.3) 0 1px 0;
  background: none;
  border: none;
  cursor: pointer;
  display: ${(props) => {
    return props.zoom ? "none" : "block";
  }};
`;
export const ProfileWrapper = styled.div`
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: ${(props) => {
    return props.zoom ? "block" : "none";
  }};
`;

export const ProfileContents = styled.div`
  font-size: 10px;
  font-family: "NotoSans";
`;
export const ProfileName = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: "NotoSans";
  margin-bottom: 10%;
`;
export const ProfileImage = styled.img`
  width: 40%;
  height: 40%;
  position: relative;
  left: 0;
  top: 0;
`;
export const ProfileContentsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;
export const ContentsTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: gray;
  margin-bottom: 5%;
`;
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
export const MoreView = styled.div`
  position: absolute;
  right: 0;
  bottom: 0%;
  font-size: 8px;
  font-weight: 600;
  visibility: ${(props) => {
    return props.zoom ? "hidden" : "visible";
  }};
`;
