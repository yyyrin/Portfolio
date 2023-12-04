import { styled } from "styled-components";
import { COLOR } from "../../constants/colors";

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  background: linear-gradient(
    180deg,
    ${COLOR.Side_Blue} 0%,
    ${COLOR.Main_Pink} 100%
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 63px;
`;

export const BoxStyle = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 20px 40px;
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.4);
`;

export const BoxTextStyle = styled.div`
  color: ${COLOR.Side_Blue};
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
`;

export const BoxLineStyle = styled.div`
  width: 400px;
  border: 0.5px solid ${COLOR.Side_Blue};
  margin-top: 4px;
`;

export const BoxImageStyle = styled.img`
  margin-top: 20px;
`;
