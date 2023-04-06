import styled from "styled-components";
import heatmap from "../../imgs/heatmap.png";

export const PageContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${heatmap});
  background-repeat: no-repeat;
  background-position: center;
`;
