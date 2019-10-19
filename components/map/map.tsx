import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

type MapProps = {
  latitude: number;
  longitude: number;
  width: number;
  height: number;
  zoom?: number;
};

export const Map = ({ latitude, longitude, width, height, zoom }: MapProps) => {
  const [viewport, setViewPort] = useState({
    latitude,
    longitude,
    width,
    height,
    zoom,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.MAP_BOX_TOKEN}
      onViewportChange={viewport => setViewPort(viewport)}
    ></ReactMapGL>
  );
};

Map.defaultProps = {
  zoom: 10,
};

export default Map;
