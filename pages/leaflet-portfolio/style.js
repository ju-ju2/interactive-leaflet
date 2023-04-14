import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-image: url("./img/background.jpeg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  perspective: 1500px;
  overflow: hidden;
`;
export const Notice = styled.div`
  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const Leaflet = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) {
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
  }
  @media (min-width: 1500px) {
    width: 350px;
    height: 525px;
  }

  /* animation: leaflet-ani 1s forwards; */

  transform: translate3d(
      ${(props) => {
        return `${props.dx}px, ${props.dy}px, ${props.dz}px`;
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
export const CoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CoverTitle = styled.div`
  @media (min-width: 1500px) {
    font-size: 75px;
  }
  font-size: 5vw;
  text-align: center;
  margin-bottom: 10%;
  font-family: "myfont";
`;
export const CoverSubTitle = styled.div`
  @media (min-width: 1500px) {
    font-size: 30px;
  }
  font-size: 2vw;
  text-align: center;
  font-family: "myfont";
`;

export const PageFaceInnerBox = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  cursor: ${(props) => (props.zoom ? "default" : "pointer")};

  /* &:not(:nth-of-type(${(props) => props.num})) {
    display: ${(props) => {
    return props.zoom ? "none" : "block";
  }};
  } */
  display: ${(props) => {
    // return props.zoom ? "none" : "block";
    if (props.num === props.target) {
      return props.zoom ? "block" : "none";
    } else {
      return props.zoom ? "none" : "block";
    }
  }};
`;
export const BackBtn = styled.button`
  position: absolute;
  right: 3%;
  top: 4%;
  font-size: 8px;
  font-weight: 600;
  background: none;
  border: none;
  z-index: 100;
  padding: 5%;
  cursor: pointer;
  color: lightgray;

  visibility: ${(props) => {
    if (!props.zoom) {
      return "hidden";
    } else if (props.zoom) {
      return props.page === props.back ? "visible" : "hidden";
    }
  }};
`;
export const CloseBtn = styled.div`
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
  @media (min-width: 1500px) {
    font-size: 22.5px;
    top: -30px;
  }
`;

export const ContentsTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ffb4b4;
  margin-bottom: 3%;
`;

export const PageNum = styled.div`
  width: 100%;
  text-align: end;
  font-size: 10px;
  font-weight: 600;
  visibility: ${(props) => {
    return props.zoom ? "hidden" : "visible";
  }};
`;
