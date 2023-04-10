import Head from "next/head";
import {
  BackBtn,
  CloseBtn,
  Container,
  CoverSubTitle,
  CoverTitle,
  Leaflet,
  Page1,
  Page2,
  Page3,
  PageFace,
  PageFaceInnerBox,
} from "./style";
import { useRef, useState } from "react";

export default function LeafletPortfolio() {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [dz, setDz] = useState(0);
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(false);
  const page1Ref = useRef(null);

  const onClickPage1 = (event) => {
    event.currentTarget.style.transform = `rotateY(-150deg)`;
    page1Ref.current = event.currentTarget;
  };
  const onClickPage3 = (event) => {
    event.currentTarget.style.transform = `rotateY(150deg)`;
  };
  const onClickZoomIn = (event) => {
    if (!zoom) {
      const rect = event.currentTarget.getBoundingClientRect();
      setDx(window.innerWidth / 2 - (rect.x + rect.width / 2));
      setDy(window.innerHeight / 2 - (rect.y + rect.height / 2));
      setDz(50);
      setAngle(-30);
      setZoom(true);
    }
  };
  const onClickBack = (event) => {
    event.stopPropagation();
    setDx(0);
    setDy(0);
    setDz(0);
    setAngle(0);
    setZoom(false);
  };
  const onClickClose = (event) => {
    event.stopPropagation();
    const page3 = event.currentTarget.parentNode.parentNode;
    page3.style.transform = `rotateY(0deg)`;
    setTimeout(() => {
      if (page1Ref.current) {
        page1Ref.current.style.transform = "rotateY(0deg)";
      }
    }, 500);
  };
  return (
    <>
      <Head></Head>
      <Container>
        <Leaflet dx={dx} dy={dy} dz={dz} angle={angle}>
          <Page1 onClick={onClickPage1}>
            <PageFace>
              <CoverTitle>Juyeon's Portfolio</CoverTitle>
              <CoverSubTitle>Click Me!!</CoverSubTitle>
            </PageFace>
            <PageFace>
              <PageFaceInnerBox onClick={onClickZoomIn}>
                <BackBtn onClick={onClickBack} zoom={zoom}>
                  ←뒤로가기
                </BackBtn>
              </PageFaceInnerBox>
              <PageFaceInnerBox onClick={onClickZoomIn}></PageFaceInnerBox>
              <PageFaceInnerBox onClick={onClickZoomIn}></PageFaceInnerBox>
            </PageFace>
          </Page1>
          <Page2>
            <PageFace>2F</PageFace>
            <PageFace>2B</PageFace>
          </Page2>
          <Page3 onClick={onClickPage3}>
            <PageFace>
              <CoverSubTitle>About Me</CoverSubTitle>
            </PageFace>
            <PageFace>
              <CloseBtn onClick={onClickClose}>✗ close</CloseBtn>
              3B
            </PageFace>
          </Page3>
        </Leaflet>
      </Container>
    </>
  );
}
