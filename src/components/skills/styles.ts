import { styled } from "styled-components";
import { COLOR } from "../../constants/colors";

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${COLOR.Side_Blue} 0%,
    ${COLOR.Main_Pink} 100%
  );
`;
