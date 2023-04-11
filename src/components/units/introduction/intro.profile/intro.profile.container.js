import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import * as S from "./intro.profile.styles";

export default function IntroductionProfile(props) {
  return (
    <>
      <S.ProfileWrapper zoom={props.zoom}>
        <S.ProfileImage src="/img/profileImg.png" />
        <S.ProfileContentsWrapper>
          <S.ProfileName>한주연</S.ProfileName>
          <S.ProfileNameE>HAN JUYEON.</S.ProfileNameE>
          <S.ProfileContents> 1996.01</S.ProfileContents>
          <S.ProfileContents>M : hjy2859@naver.com</S.ProfileContents>
          <S.ProfileContents>
            <a href="https://github.com/ju-ju2" target="_blank">
              G : github.com/ju-ju2
            </a>
          </S.ProfileContents>
        </S.ProfileContentsWrapper>
      </S.ProfileWrapper>
    </>
  );
}
