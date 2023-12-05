import {
  BoxLineStyle,
  BoxStyle,
  ProjectContentContainer,
  ProjectDivisionContainer,
  ProjectDivisionContentStyle,
  ProjectDivisionNameStyle,
  ProjectDivisionStyle,
  ProjectExplanationContainer,
  ProjectExplanationStyle,
  ProjectImageStyle,
  ProjectNameStyle,
  ProjectPeriodStyle,
  ProjectTextContainer,
} from "./styles";
import RecommendGif from "../../assets/RecommentGif.gif";

const Dawool = () => {
  const handleLinkClick = () => {
    window.location.href = "https://github.com/muyeochu/dawool";
  };

  return (
    <BoxStyle>
      <ProjectNameStyle>Dawool</ProjectNameStyle>
      <ProjectPeriodStyle>2023.02.20 ~ 2023.04.07 (7주)</ProjectPeriodStyle>
      <ProjectContentContainer className="web">
        <ProjectImageStyle src={RecommendGif} className="web" />
        <ProjectTextContainer className="web">
          <ProjectExplanationContainer>
            <ProjectExplanationStyle>
              <span className="bold-text">
                빅데이터를 활용하여 이동약자에게 무장애 여행지를 추천하는 웹
                서비스
              </span>
              입니다. 사용자 경험이 매끄럽다는 긍정적인 평가와 함께{" "}
              <span className="bold-text">
                빅데이터 도메인 프로젝트 우수상(1등)
              </span>
              을 수상하였습니다.
            </ProjectExplanationStyle>
            <ProjectExplanationStyle>
              이미지 로딩 속도를 개선하기 위해{" "}
              <span className="bold-text">lazy loading</span>을 구현함으로써
              로딩 속도 향상과 성능 최적화를 고려할 수 있었습니다.
            </ProjectExplanationStyle>
            <ProjectExplanationStyle>
              <span className="bold-text">UI 컴포넌트를 모듈화</span>하여
              컴포넌트의 재사용성과 유지보수성을 향상시킬 수 있었습니다.
            </ProjectExplanationStyle>
          </ProjectExplanationContainer>
          <BoxLineStyle className="web" />
          <ProjectDivisionContainer className="web">
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 인원</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                Front-end 3명 / Back-end 3명 (총 6명)
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 역할</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                Front-end, UI/UX 디자인, 팀장
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 사용 기술</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                TypeScript, React, Recoil, styled-components, Figma, Notion,
                GitLab, Slack
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ 주요 역할</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle>
                여행지 목록 페이지(lazy loading, 지역별 필터링) 및 취향 설문
                페이지 구현, 공통 컴포넌트 모듈화, UI/UX 디자인
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
            <ProjectDivisionStyle>
              <ProjectDivisionNameStyle>✔️ GitHub</ProjectDivisionNameStyle>
              <ProjectDivisionContentStyle
                className="link"
                onClick={() => handleLinkClick()}
              >
                https://github.com/muyeochu/dawool
              </ProjectDivisionContentStyle>
            </ProjectDivisionStyle>
          </ProjectDivisionContainer>
        </ProjectTextContainer>
      </ProjectContentContainer>
    </BoxStyle>
  );
};

export default Dawool;
