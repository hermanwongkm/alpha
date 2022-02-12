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
    },
  },
  {
    id: 2,
    lat: 1.3392977407180944,
    lng: 103.94651651684094,
    entry: {
      title: "San Francisco",
      description: "This is a description",
    },
  },
];

const FoodMap: NextPage = () => {
  const [openModalIndex, setOpenModal] = React.useState<null | number>(null);

  const setOpenModalIndex = (index: number) => setOpenModal(index);
  console.log(process.env.NEXT_PUBLIC_GOOGLE_TOKEN);
  return (
    <>
      <>Start of Google Map</>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_TOKEN }}
          defaultCenter={{
            lat: 1.3169179410827139,
            lng: 103.7574110548476,
          }}
          defaultZoom={11}
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
