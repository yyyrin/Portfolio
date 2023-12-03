import {
  HeaderFont,
  HeaderContainer,
  Container,
  MainLogo,
  NavContainer,
  NavStyle,
} from "./styles";
import LogoBlackImage from "../../../assets/logoBlackImg.svg";
// import LogoWhiteImage from "../../../assets/logoWhiteImg.svg";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HeaderFont>
      <HeaderContainer>
        <NavStyle to="/">
          <Container>
            <MainLogo src={LogoBlackImage} onClick={scrollToTop} />
          </Container>
        </NavStyle>
        <NavContainer>
          <NavStyle to="/#about">About</NavStyle>
          <NavStyle to="/#skills">Skills</NavStyle>
          <NavStyle to="/#projects">Projects</NavStyle>
          <NavStyle to="/image">Images</NavStyle>
        </NavContainer>
      </HeaderContainer>
    </HeaderFont>
  );
};

export default Header;
