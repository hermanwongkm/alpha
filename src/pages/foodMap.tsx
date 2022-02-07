import type { NextPage } from "next";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div style={{ width: "200px", backgroundColor: "red" }}>{text}</div>
);

const googleToken = "";
const FoodMap: NextPage = () => {
  return (
    <>
      <>Start of Google Map</>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleToken }}
          defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627,
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={10.99835602}
            lng={77.01502627}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default FoodMap;
