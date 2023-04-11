import Head from "next/head";
import {
  BackBtn,
  Bold,
  CloseBtn,
  Container,
  Contents,
  ContentsTitle,
  CoverSubTitle,
  CoverTitle,
  Leaflet,
  MoreView,
  Page1,
  Page2,
  Page3,
  PageFace,
  PageFaceInnerBox,
  PageHeader,
  ProfileContents,
  ProfileContents1,
  ProfileContentsWrapper,
  ProfileImage,
  ProfileName,
  ProfileWrapper,
  SkillChartDiv,
  SkillChartdiv,
  SkillContainer,
  SkillContentsContainer,
  SkillContentsTitle,
  SkillContentsWrapper,
  SkillTitle,
  SkillWrapper,
} from "./style";
import { useRef, useState } from "react";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { Progress, Space } from "antd";
import SkillComponent from "@/src/components/units/skills/skill.container";

export default function LeafletPortfolio() {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [dz, setDz] = useState(0);
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(false);
  const page1Ref = useRef(null);
  const [num, setNum] = useState(0);
  const [page, setPage] = useState(0);

  const onClickPage1 = (event) => {
    event.currentTarget.style.transform = `rotateY(-150deg)`;
    page1Ref.current = event.currentTarget;
  };
  const onClickPage3 = (event) => {
    event.currentTarget.style.transform = `rotateY(150deg)`;
  };
  const onClickZoomIn = (page, num) => (event) => {
    if (!zoom) {
      const rect = event.currentTarget.getBoundingClientRect();
      setDx(window.innerWidth / 2 - (rect.x + rect.width / 2));
      // setDy(window.innerHeight / 2 - (rect.y + rect.height / 2));
      setDz(50);
      if (page === 1) {
        setAngle(-30);
        setPage(1);
      } else if (page === 2) {
        setAngle(0);
        setPage(2);
      } else {
        setAngle(30);
        setPage(3);
      }
      setZoom(true);
      setNum(num);
    }
  };
  const onClickBack = (event) => {
    event.stopPropagation();
    setDx(0);
    setDy(0);
    setDz(0);
    setAngle(0);
    setZoom(false);
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
      <Head></Head>
      <Container>
        <Leaflet dx={dx} dy={dy} dz={dz} angle={angle}>
          <Page1 onClick={onClickPage1}>
            <PageFace>
              <CoverTitle>Juyeon's Portfolio</CoverTitle>
              <CoverSubTitle>Click Me!!</CoverSubTitle>
            </PageFace>
            <PageFace>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(1, 1)}
                zoom={zoom}
                num={num}
              >
                <ContentsTitle>Introduction</ContentsTitle>
                <ProfileWrapper zoom={zoom}>
                  {/* <ProfileImage src="/img/profileImage.png" /> */}
                  <ProfileContentsWrapper>
                    <ProfileName>
                      한주연
                      <br />
                      HAN JUYEON.
                    </ProfileName>
                    <ProfileContents>1996.01</ProfileContents>
                    <ProfileContents>
                      <MailOutlined /> hjy2859@naver.com
                    </ProfileContents>
                    <ProfileContents>
                      <GithubOutlined />{" "}
                      <a href="https://github.com/ju-ju2" target="_blank">
                        github.com/ju-ju2
                      </a>
                    </ProfileContents>
                  </ProfileContentsWrapper>
                </ProfileWrapper>
                <Contents zoom={zoom}>
                  <Bold>양방향 의사소통이 가능한 프론트엔드 개발자 </Bold>
                  한주연입니다👩🏻‍💻🎨. <br />
                  디자이너 출신 개발자로써 디자인과 개발 간의 간극을 줄이는
                  원활한 소통 능력을 가지고 있습니다. UI/UX 디자인과 웹 개발을
                  통합적으로 생각하고, 높은 수준의 결과물을 만들어내는 것을
                  목표로 하고 있습니다.
                </Contents>
                <MoreView zoom={zoom}>더보기</MoreView>
              </PageFaceInnerBox>
              <BackBtn onClick={onClickBack} zoom={zoom}>
                ←뒤로가기
              </BackBtn>
              <PageFaceInnerBox
                onClick={onClickZoomIn(1, 2)}
                zoom={zoom}
                num={num}
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
                num={num}
              >
                <ContentsTitle>Experience</ContentsTitle>
              </PageFaceInnerBox>
            </PageFace>
          </Page1>
          <Page2>
            <PageFace>2F</PageFace>
            <PageFace>2B</PageFace>
          </Page2>
          <Page3 onClick={onClickPage3}>
            <PageFace>
              <CoverSubTitle>Welcome</CoverSubTitle>
            </PageFace>
            <PageFace>
              <CloseBtn onClick={onClickClose} zoom={zoom}>
                ✗ close
              </CloseBtn>
              2B
            </PageFace>
          </Page3>
        </Leaflet>
      </Container>
    </>
  );
}
