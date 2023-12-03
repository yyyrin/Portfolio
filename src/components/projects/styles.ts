import { styled } from "styled-components";
import { COLOR } from "../../constants/colors";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${COLOR.Main_Pink} 0%,
    ${COLOR.Side_Pink} 100%
  );
`;
