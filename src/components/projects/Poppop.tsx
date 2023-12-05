import {
  BoxLineStyle,
  BoxStyle,
  ProjectContentContainer,
  ProjectDivisionContainer,
  ProjectDivisionContentStyle,
  ProjectDivisionNameStyle,
  ProjectDivisionStyle,
  ProjectExplanationStyle,
  ProjectImageStyle,
  ProjectNameStyle,
  ProjectPeriodStyle,
  ProjectTextContainer,
} from "./styles";
import NotificationGif from "../../assets/NotificationGif.gif";

const Poppop = () => {
  const handleLinkClick = () => {
    window.location.href = "https://github.com/spoon-chopchop/poppop-readme";
  };

  return (
    <BoxStyle>
      <ProjectNameStyle>Poppop</ProjectNameStyle>
      <ProjectPeriodStyle>2023.04.10 ~ 2023.05.19 (7주)</ProjectPeriodStyle>
      <ProjectContentContainer className="mobile">
        <ProjectImageStyle src={NotificationGif} className="mobile" />
        <ProjectTextContainer className="mobile">
          <ProjectExplanationStyle>
            <span className="bold-text">
              친구와 텍스트 혹은 음성으로 소통하며 가상의 pet을 육성할 수 있는
              워키토키 모바일 앱
            </span>
            입니다. <span className="bold-text">기업연계 프로젝트</span>로서
            현업 PM과 디자이너, 개발자와 소통하며 지속적인 협업 및 코드 리뷰를
            통해 협업 능력을 향상시켰습니다.
          </ProjectExplanationStyle>
          <ProjectExplanationStyle>
            푸시 알림 기능 구현을 맡아 Android 버전별 알림 권한 설정을 구현하는
            과정에서{" "}
            <span className="bold-text">모바일 개발 시 고려해야 할 사항</span>
            (버전별 특징 등)에 대해 학습할 수 있었습니다.
          </ProjectExplanationStyle>
          <ProjectExplanationStyle>
            <span className="bold-text">Clean Code 기반</span>으로 코드를
            리팩토링하며 코드 컨벤션을 준수하고 일관된 네이밍 규칙을 사용하고자
            했습니다.
          </ProjectExplanationStyle>
          <BoxLineStyle className="mobile" />
          <ProjectDivisionContainer className="mobile">
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 인원</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                Front-end 4명 / Back-end 2명 (총 6명)
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 역할</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                Front-end
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 사용 기술</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                TypeScript, React Native, Recoil, Notion, GitLab, Swagger
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 주요 역할</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                푸시 알림 기능 및 권한 설정, FCM 활용, 채팅방 목록 및 header
                컴포넌트 모듈화
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ GitHub</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle
                className="link"
                onClick={() => handleLinkClick()}
              >
                https://github.com/spoon-chopchop/poppop-readme
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
          </ProjectDivisionContainer>
        </ProjectTextContainer>
      </ProjectContentContainer>
    </BoxStyle>
  );
};

export default Poppop;
