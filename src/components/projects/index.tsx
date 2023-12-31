import Dawool from "./Dawool";
import Poppop from "./Poppop";
import {
  BoxGroupContainer,
  LineStyle,
  ProjectsContainer,
  TitleStyle,
} from "./styles";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <TitleStyle>Projects</TitleStyle>
      <LineStyle />
      <BoxGroupContainer>
        <Poppop />
        <Dawool />
      </BoxGroupContainer>
    </ProjectsContainer>
  );
};

export default Projects;
