import React from "react";
import type { NextPage } from "next";
import GoogleMapReact from "google-map-react";

import MarkerComponent from "../components/mapComponents/markerComponent/MarkerComponent";

const data = [
  {
    id: 1,
    lat: 1.3169179410827139,
    lng: 103.7574110548476,
    entry: {
      title: "BirdFolks",
      description: "This is a description",
      address: "Block 487 Segar Road #06-554, 670487",
      rating: 4.7,
    },
  },
  {
    id: 2,
    lat: 1.3392977407180944,
    lng: 103.94651651684094,
    entry: {
      title: "San Francisco",
      description: "This is a description",
      address: "Block 487 Segar Road #06-554, 670487",
      rating: 4.7,
    },
  },
];

const MAP_DEFAULT_SETTINGS = {
  zoom: 11,
  center: {
    lat: 1.352083,
    lng: 103.819839,
  },
  mapOptions: {
    scrollwheel: true,
    clickableIcons: false,
  },
};

const FoodMap: NextPage = () => {
  const [openModalIndex, setOpenModal] = React.useState<null | number>(null);

  const setOpenModalIndex = (index: number) => setOpenModal(index);

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_TOKEN ?? "input key",
          }}
          defaultCenter={MAP_DEFAULT_SETTINGS.center}
          defaultZoom={MAP_DEFAULT_SETTINGS.zoom}
          options={MAP_DEFAULT_SETTINGS.mapOptions}
          onClick={() => setOpenModal(null)}
        >
          {data.map((dataPoint) => (
            <MarkerComponent
              key={dataPoint.id}
              setOpenModal={setOpenModalIndex}
              isModalOpen={openModalIndex === dataPoint.id}
              index={dataPoint.id}
              entry={dataPoint.entry}
              lat={dataPoint.lat}
              lng={dataPoint.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default FoodMap;
