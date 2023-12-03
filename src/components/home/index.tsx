import mainImage from "../../assets/mainImg.png";
import { HomeContainer, MainImageStyle } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <MainImageStyle src={mainImage} />
    </HomeContainer>
  );
};

export default Home;
