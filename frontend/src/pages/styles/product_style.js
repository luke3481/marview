import styled from "styled-components";
import { TileLayer } from "react-leaflet";

export const PageContainer = styled.div`
  background-color: #f8f8f8;
  // margin-top: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  position: relative;
  color: #00008b;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
`;

export const MapTileLayer = styled(TileLayer)`
  filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3)
    brightness(0.7);
`;
