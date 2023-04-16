import * as S from "./main.styles";
import { useRef, useState } from "react";
import SkillComponent from "@/src/components/units/skills/skill.container";
import IntroductionProfile from "@/src/components/units/introduction/intro.profile/intro.profile.container";
import IntroductionComment from "@/src/components/units/introduction/intro.comment/intro.commment.container";
import Experience from "@/src/components/units/experience/experience.container";
import Head from "next/head";

export default function LeafletPortfolioMain() {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [dz, setDz] = useState(0);
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(false);
  const page1Ref = useRef(null);
  const [targetBox, setTargetBox] = useState(0);
  const [page, setPage] = useState(0);

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
      setDz(500);
      if (page === 1) {
        setAngle(-30);
      } else if (page === 2) {
        setAngle(0);
      } else {
        setAngle(30);
      }
      setZoom(true);
      setPage(page);
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
      <Head>
        <title>Juyeon's Portfolio</title>
        <meta
          name="description"
          content="리액트로 만든 심플 인터렉티브 포트폴리오"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-juju.ico" />
      </Head>

      <S.Container>
        <S.Notice>
          가로 1024px 사이즈 이상의 환경에서만 구현가능합니다.🙆🏻‍♀️
        </S.Notice>
        <S.Leaflet dx={dx} dy={dy} dz={dz} angle={angle}>
          <S.Page1 onClick={onClickPage(1)}>
            <S.PageFace>
              <S.CoverWrapper>
                <S.CoverTitle>Juyeon's Portfolio</S.CoverTitle>
                <S.CoverSubTitle>Click Me!!</S.CoverSubTitle>
              </S.CoverWrapper>
            </S.PageFace>
            <S.PageFace>
              <S.BackBtn onClick={onClickBack} zoom={zoom} back={1} page={page}>
                ←뒤로가기
              </S.BackBtn>
              <S.PageFaceInnerBox
                onClick={onClickZoomIn(1, 1)}
                zoom={zoom}
                num={1}
                target={targetBox}
              >
                <S.ContentsTitle>Introduction</S.ContentsTitle>
                <IntroductionProfile zoom={zoom} />
                <IntroductionComment zoom={zoom} />
              </S.PageFaceInnerBox>
              <S.PageNum zoom={zoom}>- 1 -</S.PageNum>
            </S.PageFace>
          </S.Page1>
          <S.Page2>
            <S.PageFace>
              <S.BackBtn onClick={onClickBack} zoom={zoom} back={2} page={page}>
                ←뒤로가기
              </S.BackBtn>

              <S.PageFaceInnerBox
                onClick={onClickZoomIn(2, 2)}
                zoom={zoom}
                num={2}
                target={targetBox}
              >
                <S.ContentsTitle>Skills</S.ContentsTitle>

                <SkillComponent zoom={zoom}></SkillComponent>
              </S.PageFaceInnerBox>
              <S.PageNum zoom={zoom}>- 2 -</S.PageNum>
            </S.PageFace>
            <S.PageFace>2B</S.PageFace>
          </S.Page2>
          <S.Page3 onClick={onClickPage(3)}>
            <S.PageFace>
              <S.CoverWrapper>
                <S.CoverSubTitle>Welcome</S.CoverSubTitle>
              </S.CoverWrapper>
            </S.PageFace>
            <S.PageFace>
              <S.CloseBtn onClick={onClickClose} zoom={zoom}>
                ✗ close
              </S.CloseBtn>
              <S.BackBtn onClick={onClickBack} zoom={zoom} back={3} page={page}>
                ←뒤로가기
              </S.BackBtn>

              <S.PageFaceInnerBox
                onClick={onClickZoomIn(3, 5)}
                zoom={zoom}
                num={5}
                target={targetBox}
              >
                <S.ContentsTitle>Experience</S.ContentsTitle>
                <Experience zoom={zoom} />
              </S.PageFaceInnerBox>
              <S.PageNum zoom={zoom}>- 3 -</S.PageNum>
            </S.PageFace>
          </S.Page3>
        </S.Leaflet>
      </S.Container>
    </>
  );
}
