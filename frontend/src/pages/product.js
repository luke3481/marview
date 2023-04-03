import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  LayersControl,
  LayerGroup,
  Circle,
} from "react-leaflet";
import { PageContainer, MapTileLayer } from "./styles/product_style.js";
import TemperatureLegend from "../components/legend_temp.js";

function Product() {
  // const API_KEY = "06aac0fd4ba239a20d824ef89602f311"; /* api key that works */
  const API_KEY = "e6d8c9c20269bd6d193a610ab4f7d761"; /* my api key */

  return (
    <PageContainer>
      <MapContainer
        center={[39.1, -76.1]}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <MapTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <LayersControl position="topleft">
          <LayersControl.Overlay name="Precipitation">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Clouds">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Temperature">
            <LayerGroup>
              <TileLayer
                url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Wind">
            <TileLayer
              url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Pressure">
            <TileLayer
              url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
        </LayersControl>
        <ZoomControl position="topright" />
        <TemperatureLegend />
      </MapContainer>
    </PageContainer>
  );
}

export default Product;
