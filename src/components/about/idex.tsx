import {
  AboutContainer,
  BoxStyle,
  ContentContainer,
  IconAndTextContainer,
  IconStyle,
  LineStyle,
  ProfileImageStyle,
  TextStyle,
  TitleStyle,
  DivideLineStyle,
} from "./styles";
import ProfileImage from "../../assets/profileImg.png";
import PersonIc from "../../assets/personIc.svg";
import CalendarIc from "../../assets/calendarIc.svg";
import PlaceIc from "../../assets/placeIc.svg";
import EmailIc from "../../assets/emailIc.svg";
import SchoolIc from "../../assets/schoolIc.svg";
import GithubIc from "../../assets/githubIc.svg";
import DocumentIc from "../../assets/documentIc.svg";

const About = () => {
  const handleLinkClick = (linkType: string) => {
    if (linkType === "github") {
      window.location.href = "https://github.com/yyyrin";
    }
    if (linkType === "blog") {
      window.location.href = "https://velog.io/@yeguu037";
    }
  };

  return (
    <AboutContainer id="about">
      <TitleStyle>About</TitleStyle>
      <LineStyle />
      <BoxStyle>
        <ProfileImageStyle src={ProfileImage} />
        <ContentContainer>
          <IconAndTextContainer>
            <IconStyle src={PersonIc} />
            <TextStyle>최예린</TextStyle>
          </IconAndTextContainer>
          <IconAndTextContainer>
            <IconStyle src={CalendarIc} />
            <TextStyle>1998.08.29</TextStyle>
          </IconAndTextContainer>
          <IconAndTextContainer>
            <IconStyle src={PlaceIc} />
            <TextStyle>경상북도 경산시</TextStyle>
          </IconAndTextContainer>
          <IconAndTextContainer>
            <IconStyle src={EmailIc} />
            <TextStyle>qsc130@naver.com</TextStyle>
          </IconAndTextContainer>
          <IconAndTextContainer>
            <IconStyle src={SchoolIc} />
            <TextStyle>경기대학교 (응용통계학과, 경영학과)</TextStyle>
          </IconAndTextContainer>
          <DivideLineStyle />
          <IconAndTextContainer
            className="github"
            onClick={() => handleLinkClick("github")}
          >
            <IconStyle src={GithubIc} />
            <TextStyle>GitHub</TextStyle>
          </IconAndTextContainer>
          <IconAndTextContainer
            className="blog"
            onClick={() => handleLinkClick("blog")}
          >
            <IconStyle src={DocumentIc} />
            <TextStyle>Blog</TextStyle>
          </IconAndTextContainer>
        </ContentContainer>
      </BoxStyle>
    </AboutContainer>
  );
};

export default About;
