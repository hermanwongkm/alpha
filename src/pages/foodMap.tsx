import React from "react";
import type { NextPage } from "next";
import GoogleMapReact from "google-map-react";

import MarkerComponent from "../components/mapComponents/markerComponent/MarkerComponent";
import { useQuery } from "urql";
import getLocations from "../graphql/queries/foodMap/getLocations";
import { IModalEntry } from "../components/mapComponents/modalComponent/ModalComponent";

interface IFoodMapLocation {
  id: number;
  entry: IModalEntry;
  lat: number;
  long: number;
}

interface IFoodMapLocations {
  foodMapLocations: IFoodMapLocation[];
}
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

  //The second type is for your param arguments
  const [result] = useQuery<IFoodMapLocations>({
    query: getLocations,
    pause: false,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

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
          {data?.foodMapLocations.map((dataPoint) => (
            <MarkerComponent
              key={dataPoint.id}
              setOpenModal={setOpenModalIndex}
              isModalOpen={openModalIndex === dataPoint.id}
              index={dataPoint.id}
              entry={dataPoint.entry}
              lat={dataPoint.lat}
              lng={dataPoint.long}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default FoodMap;
