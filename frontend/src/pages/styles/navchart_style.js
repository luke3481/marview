import styled from "styled-components";
import navchart from "../../imgs/navchart.png";

export const PageContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${navchart});
  background-repeat: no-repeat;
  background-position: center;
`;
