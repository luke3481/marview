import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  LayersControl,
  useMapEvents,
  Circle,
  CircleMarker,
  LayerGroup,
  useMap,
} from "react-leaflet";
import {
  PageContainer,
  MapTileLayer,
  AisTileLayer,
} from "./styles/product_style.js";
import TemperatureLegend from "../components/legend_temp.js";
import MouseCoordinates from "../components/mouse_coordinates.js";
import AISLegend from "../components/legend_ais.js";
import vdrData from "./water_points_10k.json";

function Product() {
  // const API_KEY = "06aac0fd4ba239a20d824ef89602f311"; /* api key that works */
  const API_KEY = "e6d8c9c20269bd6d193a610ab4f7d761"; /* my api key */
  const center = [25.1, -84.1];
  const [activeLayer, setActiveLayer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function LegendControl() {
    useMapEvents({
      overlayadd: (e) => {
        if (e.name === "Temperature") {
          setActiveLayer("Temperature");
        }
        if (e.name === "AIS") {
          setActiveLayer("AIS");
        }
      },
      overlayremove: (e) => {
        if (e.name === "Temperature") {
          setActiveLayer(null);
        }
        if (e.name === "AIS") {
          setActiveLayer(null);
        }
      },
    });

    return null;
  }

  return (
    <PageContainer>
      <MapContainer
        center={center}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <LayersControl position="topleft">
          <LayersControl.BaseLayer checked name="Streets">
            <MapTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Ocean">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
              maxZoom={13}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Topographic">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Copyright: &copy; DeLorme"
              maxZoom={11}
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="AIS">
            <AisTileLayer
              url={`https://tiles.marinetraffic.com/ais_helpers/shiptilesingle.aspx?output=png&sat=1&grouping=shiptype&tile_size=256&legends=1&zoom=
            {z}&X={x}&Y={y}`}
              attribution='&copy; <a href="https://www.marinetraffic.com/en/ais/home/centerx:-86.8/centery:25.3/zoom:6">MarineTraffic</a>'
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Radar (demo)">
            <LayerGroup>
              {vdrData.map((vdr) => (
                <Circle
                  center={[vdr.latitude, vdr.longitude]}
                  // pathOptions={{ color: "#FFFF00" }}
                  pathOptions={{ color: "#ffae42" }}
                ></Circle>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Precipitation">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Clouds">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Temperature">
            <TileLayer
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Wind">
            <TileLayer
              url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              // url={`http://maps.openweathermap.org/maps/2.0/weather/WND/{z}/{x}/{y}?use_norm=true&arrow_step=16&appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Pressure">
            <TileLayer
              url={`https://tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
        </LayersControl>
        <ZoomControl position="topright" />
        <div className="leaflet-bottom leaflet-left">
          <MouseCoordinates />
        </div>
        <LegendControl />
        {activeLayer === "Temperature" && <TemperatureLegend />}
        {activeLayer === "AIS" && <AISLegend />}
      </MapContainer>
    </PageContainer>
  );
}

export default Product;
