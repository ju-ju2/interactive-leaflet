import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import * as S from "./intro.profile.styles";

export default function IntroductionProfile(props) {
  return (
    <>
      <S.ProfileWrapper zoom={props.zoom}>
        {/* <ProfileImage src="/img/profileImage.png" /> */}
        <S.ProfileContentsWrapper>
          <S.ProfileName>
            한주연
            <br />
            HAN JUYEON.
          </S.ProfileName>
          <S.ProfileContents>1996.01</S.ProfileContents>
          <S.ProfileContents>
            <MailOutlined /> hjy2859@naver.com
          </S.ProfileContents>
          <S.ProfileContents>
            <GithubOutlined />
            <a href="https://github.com/ju-ju2" target="_blank">
              github.com/ju-ju2
            </a>
          </S.ProfileContents>
        </S.ProfileContentsWrapper>
      </S.ProfileWrapper>
    </>
  );
}
