import { styled } from "styled-components";
import Home from "../components/home";
import About from "../components/about/idex";
import Skills from "../components/skills";
import Projects from "../components/projects";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MainGridItems = styled.div``;

const SectionContainer = styled.div`
  scroll-margin-top: 60px;
`;

const PortfolioPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        const topOffeset =
          targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: topOffeset, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <MainGridItems>
      <Home />
      <SectionContainer id="about">
        <About />
      </SectionContainer>
      <SectionContainer id="skills">
        <Skills />
      </SectionContainer>
      <SectionContainer id="projects">
        <Projects />
      </SectionContainer>
    </MainGridItems>
  );
};

export default PortfolioPage;
