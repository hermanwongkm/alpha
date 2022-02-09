import type { NextPage } from "next";
import GoogleMapReact from "google-map-react";
import FoodIconComponent from "../components/mapComponents/foodIconComponent/FoodIconComponent";
import ModalComponent from "../components/mapComponents/modalComponent/ModalComponent";

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
          <FoodIconComponent lat={1.3169179410827139} lng={103.7574110548476} />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default FoodMap;
