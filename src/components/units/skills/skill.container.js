import * as S from "./skill.styles";

export default function SkillComponent(props) {
  return (
    <S.SkillContainer zoom={props.zoom}>
      <S.SkillWrapper>
        <S.SkillTitle>Language</S.SkillTitle>
        <S.SkillContentsContainer zoom={props.zoom}>
          <S.HiddenWrapper zoom={props.zoom}>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/javascript.svg" />
              <S.SkillContentsTitle>javascript</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"100%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/typescript.svg" />
              <S.SkillContentsTitle>typescript</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"80%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
          </S.HiddenWrapper>
        </S.SkillContentsContainer>
      </S.SkillWrapper>
      <S.SkillWrapper>
        <S.SkillTitle>Framework</S.SkillTitle>
        <S.SkillContentsContainer zoom={props.zoom}>
          <S.HiddenWrapper zoom={props.zoom}>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/react.svg" />
              <S.SkillContentsTitle>React</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"80%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/nextjs.svg" />

              <S.SkillContentsTitle>Next.js</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"60%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/nodejs.svg" />

              <S.SkillContentsTitle>Node.js</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"60%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
          </S.HiddenWrapper>
        </S.SkillContentsContainer>
      </S.SkillWrapper>
      <S.SkillWrapper>
        <S.SkillTitle>MarkUp</S.SkillTitle>
        <S.SkillContentsContainer zoom={props.zoom}>
          <S.HiddenWrapper zoom={props.zoom}>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/html.svg" />

              <S.SkillContentsTitle>HTML</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"100%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/css.svg" />

              <S.SkillContentsTitle>CSS</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"100%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillContentsTitle>Emotion</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"100%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
          </S.HiddenWrapper>
        </S.SkillContentsContainer>
      </S.SkillWrapper>
      <S.SkillWrapper>
        <S.SkillTitle>Database</S.SkillTitle>
        <S.SkillContentsContainer zoom={props.zoom}>
          <S.HiddenWrapper zoom={props.zoom}>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/firebase.svg" />

              <S.SkillContentsTitle>Firebase</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"60%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/mongodb.svg" />

              <S.SkillContentsTitle>MongoDB</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"60%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
          </S.HiddenWrapper>
        </S.SkillContentsContainer>
      </S.SkillWrapper>
      <S.SkillWrapper>
        <S.SkillTitle>Tool</S.SkillTitle>
        <S.SkillContentsContainer zoom={props.zoom}>
          <S.HiddenWrapper zoom={props.zoom}>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/git.svg" />

              <S.SkillContentsTitle>Git</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"100%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
            <S.SkillContentsWrapper>
              <S.SkillIcon src="/img/skills/github.svg" />

              <S.SkillContentsTitle>Github</S.SkillContentsTitle>
              <S.SkillChartDiv>
                <S.SkillChartPer
                  zoom={props.zoom}
                  per={"100%"}
                ></S.SkillChartPer>
              </S.SkillChartDiv>
            </S.SkillContentsWrapper>
          </S.HiddenWrapper>
        </S.SkillContentsContainer>
      </S.SkillWrapper>
    </S.SkillContainer>
  );
}
