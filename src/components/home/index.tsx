import mainImage from "../../assets/mainImg.png";
import {
  HomeContainer,
  ContentContainer,
  MainFontStyle,
  LineStyle,
  SideFontStyle,
  MainImageStyle,
  IconContainer,
  ArrowIcStyle,
} from "./styles";
import ArrowIc from "../../assets/arrowIc.svg";

const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <MainFontStyle>
          - 최예린 -<br />
          매일 1px씩 성장하는 개발자
        </MainFontStyle>
        <LineStyle />
        <SideFontStyle>
          안녕하세요 :)
          <br />
          프론트엔드 개발자 최예린입니다.
          <br />
          공부한 내용을 매일 기록하고, 동료들과 지식을 나누는 것을 좋아합니다.
        </SideFontStyle>
      </ContentContainer>
      <IconContainer to="/#about">
        <ArrowIcStyle src={ArrowIc} />
      </IconContainer>
      <MainImageStyle src={mainImage} />
    </HomeContainer>
  );
};

export default Home;
