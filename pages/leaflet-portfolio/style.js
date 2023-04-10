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
        return `${props.dx}px, ${props.dy}px, ${props.dz}vw`;
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
  > :nth-child(2) {
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
  > :nth-child(1) {
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
  > :nth-child(2) {
    background-color: white;
  }
`;
export const PageFace = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: antiquewhite;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  :nth-of-type(2) {
    transform: rotateY(180deg);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  /* font-family: "Shadows Into Light", cursive; */
`;
export const CoverTitle = styled.div`
  font-size: 5vw;
  text-align: center;
  margin-bottom: 10%;
  text-align: center;
`;
export const CoverSubTitle = styled.div`
  font-size: 2vw;
  text-align: center;
`;

export const PageFaceInnerBox = styled.div`
  width: 100%;
  height: 20%;
  background-color: yellow;
  margin-bottom: 5%;
`;
export const BackBtn = styled.button`
  background: none;
  border: none;
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
`;
