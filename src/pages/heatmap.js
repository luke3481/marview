import React, { useEffect } from "react";
import {
  MapContainer,
  ZoomControl,
  LayersControl,
  Circle,
  LayerGroup,
  TileLayer,
} from "react-leaflet";
import { PageContainer, MapTileLayer } from "./styles/product_style.js";
import vdrData from "./water_points_10k.json";

function Heatmap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const center = [25.1, -84.1];
  const url = "./tiles/{z}/{x}/{y}.png";

  return (
    <PageContainer>
      <MapContainer
        center={center}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
        maxZoom={8}
      >
        <LayersControl position="topleft">
          <TileLayer
            url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
            attribution="Tiles &copy; Stamen"
            opacity={1.0}
          />
          <LayersControl.Overlay name="Jan 2022">
            <TileLayer url={url} />
          </LayersControl.Overlay>
        </LayersControl>
        <ZoomControl position="topright" />
      </MapContainer>
    </PageContainer>
  );
}

export default Heatmap;
