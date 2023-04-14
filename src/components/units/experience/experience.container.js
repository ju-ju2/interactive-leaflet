import * as Exp from "./experience.styles";

export default function Experience(props) {
  return (
    <>
      <Exp.Blur src="/img/page3_moreView.png" zoom={props.zoom} />
      <Exp.Container zoom={props.zoom}>
        <Exp.Wrapper>
          <Exp.Title>Work</Exp.Title>
          <Exp.ContentsWrapper>
            <Exp.Year>2021-2022</Exp.Year>
            <Exp.Contents>주식회사 코콤 홍보팀 디자이너</Exp.Contents>
          </Exp.ContentsWrapper>
        </Exp.Wrapper>
        <Exp.Wrapper>
          <Exp.Title>Experience</Exp.Title>
          <Exp.ContentsWrapper>
            <Exp.Year>2022</Exp.Year>
            <Exp.Contents>
              마켓컬리 제 1회 해커톤 <br /> 리뷰시스템 개편안 | 막컬리뷰
            </Exp.Contents>
            <Exp.Year>2021</Exp.Year>

            <Exp.Contents>
              한화 드림플러스 해커톤 <br />
              우리집 주차장 찾기 | 우주서비스
            </Exp.Contents>
          </Exp.ContentsWrapper>
        </Exp.Wrapper>
        <Exp.Wrapper>
          <Exp.Title>Awards</Exp.Title>
          <Exp.ContentsWrapper>
            <Exp.Year>2020</Exp.Year>
            <Exp.Contents>
              한화 드림인 해커톤 입상 <br />
              투명한 공동 구매 시장 | 모블
            </Exp.Contents>
            <Exp.Contents>
              FOUNDERS in JEJU 해커톤 최우수상 <br />
              식품 공유 서비스 | 마음마켓
            </Exp.Contents>
            <Exp.Contents>
              삼성전자, FOUNDERS 3rd 우수상 <br />
              양육비 보장 플랫폼 | 아빠어디가
            </Exp.Contents>
          </Exp.ContentsWrapper>
        </Exp.Wrapper>
        <Exp.Wrapper>
          <Exp.Title>Education</Exp.Title>
          <Exp.ContentsWrapper>
            <Exp.Year>2019</Exp.Year>
            <Exp.Contents>금오공과대학교 산업공학부 졸업</Exp.Contents>
          </Exp.ContentsWrapper>
        </Exp.Wrapper>
      </Exp.Container>
    </>
  );
}
