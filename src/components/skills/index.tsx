import {
  BoxColumn,
  BoxGroupContainer,
  BoxImageStyle,
  BoxLineStyle,
  BoxStyle,
  BoxTextStyle,
  LineStyle,
  SkillsContainer,
  TitleStyle,
} from "./styles";
import FrontendToolImage from "../../assets/frontendToolImg.png";
import VersionControlToolImage from "../../assets/versionControlToolImg.png";
import CommunicationToolImage from "../../assets/communicationToolImg.png";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <TitleStyle>Skills</TitleStyle>
      <LineStyle />
      <BoxGroupContainer>
        <BoxStyle>
          <BoxTextStyle>Frontend</BoxTextStyle>
          <BoxLineStyle />
          <BoxImageStyle src={FrontendToolImage} />
        </BoxStyle>
        <BoxColumn>
          <BoxStyle>
            <BoxTextStyle>Version Control</BoxTextStyle>
            <BoxLineStyle />
            <BoxImageStyle src={VersionControlToolImage} />
          </BoxStyle>
          <BoxStyle>
            <BoxTextStyle>Communication</BoxTextStyle>
            <BoxLineStyle />
            <BoxImageStyle src={CommunicationToolImage} />
          </BoxStyle>
        </BoxColumn>
      </BoxGroupContainer>
    </SkillsContainer>
  );
};

export default Skills;
