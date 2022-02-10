import type { NextPage } from "next";
import GoogleMapReact from "google-map-react";
import FoodIconComponent from "../components/mapComponents/foodIconComponent/FoodIconComponent";
import ModalComponent from "../components/mapComponents/modalComponent/ModalComponent";
import MarkerComponent from "../components/mapComponents/markerComponent/MarkerComponent";

const googleToken = "AIzaSyBwzlcY298eqMx5CL4wfReweDtz_Twafdc";
const FoodMap: NextPage = () => {
  return (
    <>
      <>Start of Google Map</>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleToken }}
          defaultCenter={{
            lat: 1.3169179410827139,
            lng: 103.7574110548476,
          }}
          defaultZoom={11}
        >
          <MarkerComponent
            lat={1.3169179410827139}
            lng={103.7574110548476}
          ></MarkerComponent>
          <MarkerComponent
            lat={1.3392977407180944}
            lng={103.94651651684094}
          ></MarkerComponent>
        </GoogleMapReact>
      </div>
    </>
  );
};

export default FoodMap;
