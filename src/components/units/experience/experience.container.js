import {
  ExperienceContainer,
  ExperienceContents,
  ExperienceContentsWrapper,
  ExperienceTitle,
  ExperienceWrapper,
  ExperienceYear,
  HiddenWrapper,
} from "./experience.styles";

export default function Experience(props) {
  return (
    <>
      <ExperienceContainer>
        <ExperienceWrapper>
          <ExperienceTitle>Work</ExperienceTitle>
          <ExperienceContentsWrapper zoom={props.zoom}>
            <HiddenWrapper zoom={props.zoom}>
              <ExperienceYear>2021-2022</ExperienceYear>
              <ExperienceContents>
                주식회사 코콤 홍보팀 디자이너
              </ExperienceContents>
            </HiddenWrapper>
          </ExperienceContentsWrapper>
        </ExperienceWrapper>
        <ExperienceWrapper>
          <ExperienceTitle>Experience</ExperienceTitle>
          <ExperienceContentsWrapper zoom={props.zoom}>
            <HiddenWrapper zoom={props.zoom}>
              <ExperienceYear>2022</ExperienceYear>
              <ExperienceContents>
                마켓컬리 제 1회 해커톤 <br /> 리뷰시스템 개편안 | 막컬리뷰
              </ExperienceContents>
              <ExperienceYear>2021</ExperienceYear>

              <ExperienceContents>
                한화 드림플러스 해커톤 <br />
                우리집 주차장 찾기 | 우주서비스
              </ExperienceContents>
              <ExperienceYear>2020</ExperienceYear>

              <ExperienceContents>
                한화 드림인 해커톤 입상 <br />
                투명한 공동 구매 시장 | 모블
              </ExperienceContents>
              <ExperienceContents>
                FOUNDERS in JEJU 해커톤 최우수상 <br />
                식품 공유 서비스 | 마음마켓
              </ExperienceContents>
              <ExperienceContents>
                삼성전자, 디센터 FOUNDERS 3rd 우수상 <br />
                양육비 보장 플랫폼 | 아빠어디가
              </ExperienceContents>
            </HiddenWrapper>
          </ExperienceContentsWrapper>
        </ExperienceWrapper>
        <ExperienceWrapper>
          <ExperienceTitle>Education</ExperienceTitle>
          <ExperienceContentsWrapper zoom={props.zoom}>
            <HiddenWrapper zoom={props.zoom}>
              <ExperienceYear>2019</ExperienceYear>
              <ExperienceContents>
                금오공과대학교 산업공학부 졸업
              </ExperienceContents>
            </HiddenWrapper>
          </ExperienceContentsWrapper>
        </ExperienceWrapper>
      </ExperienceContainer>
    </>
  );
}
