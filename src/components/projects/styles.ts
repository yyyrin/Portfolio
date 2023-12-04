import { css, styled } from "styled-components";
import { COLOR } from "../../constants/colors";

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 150px;
  background: linear-gradient(
    180deg,
    ${COLOR.Main_Pink} 0%,
    ${COLOR.Side_Pink} 100%
  );
`;

export const TitleStyle = styled.div`
  color: white;
  text-align: center;
  font-size: 55px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const LineStyle = styled.div`
  width: 200px;
  border: 2px solid white;
  margin: 2px auto 30px;
`;

export const BoxGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const BoxStyle = styled.div`
  background-color: white;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 24px 80px;
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.4);
  width: 60%;
`;

export const ProjectNameStyle = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 900;
  line-height: 1.5;
`;

export const ProjectPeriodStyle = styled.div`
  color: ${COLOR.Grey};
  margin: 10px auto 40px;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
`;

export const ProjectContentContainer = styled.div`
  display: flex;
  &.web {
    flex-direction: column;
    align-items: center;
  }
  &.mobile {
    flex-direction: row;
  }
  gap: 60px;
`;

export const ProjectImageStyle = styled.img`
  &.web {
    width: 700px;
  }
  &.mobile {
    width: 300px;
  }
`;

export const ProjectTextContainer = styled.div`
  display: flex;
  &.web {
    flex-direction: row;
  }
  &.mobile {
    flex-direction: column;
  }
`;

const boldTextStyle = css`
  font-weight: 700;
  color: ${COLOR.Main_Blue};
`;

export const ProjectExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 10px;
`;

export const ProjectExplanationStyle = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
  .bold-text {
    ${boldTextStyle}
  }
`;

export const BoxLineStyle = styled.div`
  &.mobile {
    width: 100%;
    border: 0.5px solid ${COLOR.Side_Blue};
    margin-top: 20px;
  }
  &.web {
    flex-grow: 1;
    border-left: 2px solid ${COLOR.Side_Blue};
  }
`;

export const ProjectDivisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  &.mobile {
    margin-top: 16px;
  }
  &.web {
    margin-left: 10px;
    width: 50%;
  }
`;

export const ProjectDivisionStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;

export const ProjectDivisionNameStyle = styled.div`
  color: black;
  width: 120px;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  flex-shrink: 0;
`;

export const ProjectDivisionContentStyle = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  &.link {
    color: ${COLOR.Main_Blue};
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${COLOR.Main_Blue};
  }
`;
