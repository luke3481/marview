import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PageContainer, Title } from "./styles/solution_style.js";

function Solution() {
  return (
    <PageContainer>
      <MapContainer center={[39.1, -76.1]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </PageContainer>
  );
}

export default Solution;
