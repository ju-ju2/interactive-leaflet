import {
  BackBtn,
  CloseBtn,
  Container,
  Contents,
  ContentsTitle,
  CoverSubTitle,
  CoverTitle,
  CoverWrapper,
  Leaflet,
  MoreView,
  Notice,
  Page1,
  Page2,
  Page3,
  PageFace,
  PageFaceInnerBox,
  ProjectCard,
} from "./style";
import { useRef, useState } from "react";
import SkillComponent from "@/src/components/units/skills/skill.container";
import IntroductionProfile from "@/src/components/units/introduction/intro.profile/intro.profile.container";
import IntroductionComment from "@/src/components/units/introduction/intro.comment/intro.commment.container";

export default function LeafletPortfolio() {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [dz, setDz] = useState(0);
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(false);
  const page1Ref = useRef(null);
  const [targetBox, setTargetBox] = useState(0);

  const onClickPage = (page) => (event) => {
    if (page === 1) {
      event.currentTarget.style.transform = `rotateY(-150deg)`;
      page1Ref.current = event.currentTarget;
    } else {
      event.currentTarget.style.transform = `rotateY(150deg)`;
    }
  };

  const onClickZoomIn = (page, num) => (event) => {
    if (!zoom) {
      const rect = event.currentTarget.getBoundingClientRect();
      setDx(window.innerWidth / 2 - (rect.x + rect.width / 2));
      // setDy(window.innerHeight / 2 - (rect.y + rect.height / 2));
      setDz(500);
      if (page === 1) {
        setAngle(-30);
      } else if (page === 2) {
        setAngle(0);
      } else {
        setAngle(30);
      }
      setZoom(true);
    }
    setTargetBox(num);
  };
  const onClickBack = (event) => {
    event.stopPropagation();
    setDx(0);
    setDy(0);
    setDz(0);
    setAngle(0);
    setZoom(false);
    setTargetBox(0);
    // setSelectedPage(null);
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
      <Container>
        <Notice>가로 1024px 사이즈 이상의 환경에서만 구현가능합니다.🙆🏻‍♀️</Notice>
        <Leaflet dx={dx} dy={dy} dz={dz} angle={angle}>
          <Page1 onClick={onClickPage(1)}>
            <PageFace>
              <CoverWrapper>
                <CoverTitle>Juyeon's Portfolio</CoverTitle>
                <CoverSubTitle>Click Me!!</CoverSubTitle>
              </CoverWrapper>
            </PageFace>
            <PageFace>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(1, 1)}
                zoom={zoom}
                num={1}
                target={targetBox}
              >
                <ContentsTitle>Introduction</ContentsTitle>
                <IntroductionProfile zoom={zoom} />
                <IntroductionComment zoom={zoom} />

                <MoreView zoom={zoom}>더보기</MoreView>
              </PageFaceInnerBox>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(1, 2)}
                zoom={zoom}
                num={2}
                target={targetBox}
              >
                <ContentsTitle>Skills</ContentsTitle>
                <Contents zoom={zoom}>
                  이런 기술 스택을 보유하고 있습니다.
                </Contents>
                <MoreView zoom={zoom}>더보기</MoreView>
                <SkillComponent zoom={zoom}></SkillComponent>
              </PageFaceInnerBox>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(1, 3)}
                zoom={zoom}
                num={3}
                target={targetBox}
              >
                <ContentsTitle>Experience</ContentsTitle>
              </PageFaceInnerBox>
            </PageFace>
          </Page1>
          <Page2>
            <PageFace>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(2, 4)}
                zoom={zoom}
                num={4}
                target={targetBox}
              >
                <ContentsTitle>Project</ContentsTitle>
                <ProjectCard></ProjectCard>
              </PageFaceInnerBox>
            </PageFace>
            <PageFace>2B</PageFace>
          </Page2>
          <Page3 onClick={onClickPage(3)}>
            <PageFace>
              <CoverWrapper>
                <CoverSubTitle>Welcome</CoverSubTitle>
              </CoverWrapper>
            </PageFace>
            <PageFace>
              <CloseBtn onClick={onClickClose} zoom={zoom}>
                ✗ close
              </CloseBtn>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(3, 5)}
                zoom={zoom}
                num={5}
                target={targetBox}
              >
                <ContentsTitle>Project</ContentsTitle>
              </PageFaceInnerBox>
            </PageFace>
          </Page3>
        </Leaflet>
      </Container>
    </>
  );
}
