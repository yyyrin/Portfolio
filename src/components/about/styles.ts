import { styled } from "styled-components";
import { COLOR } from "../../constants/colors";

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #001b79 0%, #1640d6 100%);
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

export const BoxStyle = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  gap: 60px;
  display: inline-flex;
  flex-direction: row;
  border-radius: 50px;
  padding: 60px 80px;
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.4);
`;

export const ProfileImageStyle = styled.img`
  width: 240px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14px;
`;

export const IconAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &.github,
  &.blog {
    cursor: pointer;
  }
`;

export const IconStyle = styled.img`
  height: 30px;
  width: 30px;
`;

export const TextStyle = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

export const DivideLineStyle = styled.div`
  width: 350px;
  border: 1px solid ${COLOR.Main_Blue};
`;
