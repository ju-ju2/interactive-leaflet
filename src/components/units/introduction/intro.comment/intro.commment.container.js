import { Blur, Bold, Contents, HiddenWrapper } from "./intro.commment.styles";

export default function IntroductionComment(props) {
  return (
    <>
      <Blur src="/img/page1_moreView.png" zoom={props.zoom} />
      <Contents zoom={props.zoom}>
        {/* <HiddenWrapper zoom={props.zoom}> */}
        <Bold>양방향 의사소통이 가능한 프론트엔드 개발자 </Bold>
        한주연입니다👩🏻‍💻🎨. <br />
        디자이너 출신 개발자로써 디자인과 개발 간의 간극을 줄이는 원활한 소통
        능력을 가지고 있습니다. UI/UX 디자인과 웹 개발을 통합적으로 생각하고,
        높은 수준의 결과물을 만들어내는 것을 목표로 하고 있습니다.
        {/* </HiddenWrapper> */}
      </Contents>
    </>
  );
}
