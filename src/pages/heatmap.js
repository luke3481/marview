import React, { useEffect } from "react";
import {
  MapContainer,
  ZoomControl,
  LayersControl,
  TileLayer,
} from "react-leaflet";
import { PageContainer } from "./page_styles/product_style.js";
import MouseCoordinates from "../components/other/mouse_coordinates.js";

function Heatmap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const center = [25.1, -84.1];
  const jan_tiles = "./tiles_jan_22/{z}/{x}/{y}.png";
  const feb_tiles = "./tiles_feb_22/{z}/{x}/{y}.png";
  const mar_tiles = "./tiles_mar_22/{z}/{x}/{y}.png";
  const apr_tiles = "./tiles_apr_22/{z}/{x}/{y}.png";
  const may_tiles = "./tiles_may_22/{z}/{x}/{y}.png";
  const jun_tiles = "./tiles_jun_22/{z}/{x}/{y}.png";
  const jul_tiles = "./tiles_jul_22/{z}/{x}/{y}.png";
  const aug_tiles = "./tiles_aug_22/{z}/{x}/{y}.png";
  const sep_tiles = "./tiles_sep_22/{z}/{x}/{y}.png";
  const oct_tiles = "./tiles_oct_22/{z}/{x}/{y}.png";
  const nov_tiles = "./tiles_nov_22/{z}/{x}/{y}.png";
  const dec_tiles = "./tiles_dec_22/{z}/{x}/{y}.png";

  return (
    <PageContainer>
      <MapContainer
        center={center}
        zoom={4}
        scrollWheelZoom={true}
        zoomControl={false}
        maxZoom={8}
      >
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}"
          attribution="Tiles &copy; Stamen Design"
          opacity={1.0}
          ext="png"
        />
        <LayersControl position="topleft" collapsed={false}>
          <LayersControl.BaseLayer name="Jan 2022">
            <TileLayer url={jan_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Feb 2022">
            <TileLayer url={feb_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Mar 2022">
            <TileLayer url={mar_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Apr 2022">
            <TileLayer url={apr_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="May 2022">
            <TileLayer url={may_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Jun 2022">
            <TileLayer url={jun_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Jul 2022">
            <TileLayer url={jul_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Aug 2022">
            <TileLayer url={aug_tiles} />
          </LayersControl.BaseLayer> 
          {/* <LayersControl.BaseLayer name="Sep 2022">
            <TileLayer url={sep_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Oct 2022">
            <TileLayer url={oct_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Nov 2022">
            <TileLayer url={nov_tiles} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Dec 2022">
            <TileLayer url={dec_tiles} />
          </LayersControl.BaseLayer> */}
        </LayersControl>
        <ZoomControl position="topright" />
        <div className="leaflet-bottom leaflet-left">
          <MouseCoordinates />
        </div>
      </MapContainer>
    </PageContainer>
  );
}

export default Heatmap;
