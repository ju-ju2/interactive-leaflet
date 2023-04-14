import * as S from "./skill.styles";

export default function SkillComponent(props) {
  return (
    <>
      <S.Blur zoom={props.zoom} src="/img/page2_moreView.png" />
      <S.Container zoom={props.zoom}>
        <S.Wrapper>
          <S.Title>Language</S.Title>
          <S.ContentsContainer zoom={props.zoom}>
            <S.ContentsWrapper>
              <S.ContentsTitle>javascript</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"100%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>typescript</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"80%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
          </S.ContentsContainer>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>Framework</S.Title>
          <S.ContentsContainer zoom={props.zoom}>
            <S.ContentsWrapper>
              <S.ContentsTitle>React</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"80%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>Next.js</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"60%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>Node.js</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"60%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
          </S.ContentsContainer>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>MarkUp</S.Title>
          <S.ContentsContainer zoom={props.zoom}>
            <S.ContentsWrapper>
              <S.ContentsTitle>HTML</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"100%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>CSS</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"100%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>Emotion</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"100%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
          </S.ContentsContainer>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>Database</S.Title>
          <S.ContentsContainer zoom={props.zoom}>
            <S.ContentsWrapper>
              <S.ContentsTitle>Firebase</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"60%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>MongoDB</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"60%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
          </S.ContentsContainer>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>Tool</S.Title>
          <S.ContentsContainer zoom={props.zoom}>
            <S.ContentsWrapper>
              <S.ContentsTitle>Git</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"100%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.ContentsTitle>Github</S.ContentsTitle>
              <S.ChartDiv>
                <S.ChartPer zoom={props.zoom} per={"100%"}></S.ChartPer>
              </S.ChartDiv>
            </S.ContentsWrapper>
          </S.ContentsContainer>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
