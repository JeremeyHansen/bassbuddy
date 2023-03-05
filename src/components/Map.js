import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import "../css/map.css";
import { BsMusicNote } from "react-icons/bs";

export default function Map({ center, concertsToDisplay, selectedMarker, setSelectedMarker }) {

  return (
    <div className="map-container">
      <div className="border-map"></div>
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          styles: [
            {
              elementType: "labels",
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {concertsToDisplay?.map((concert) => {
          const position = {
            lat: concert.venue.latitude,
            lng: concert.venue.longitude,
          };
          return (
            <Marker
              key={concert.id}
              position={position}
              title={concert.venue}
              icon={{ url: "/pinn.png" }}
              onClick={() => {
              setSelectedMarker(concert);
              }}
            ></Marker>
          );
        })}
        {selectedMarker && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedMarker("")
            }}
            position={{
              lat: selectedMarker.venue.latitude,
              lng: selectedMarker.venue.longitude,
            }}
          >
            <div className="map-card">
              <h2 className="map-title">{selectedMarker.venue.name}</h2>
              <div className="map-artist-container">
                <h2 className="map-artist-title">
                  {selectedMarker.artistList.length > 1
                    ? "Artists: "
                    : "Artist: "}
                </h2>
                {selectedMarker.artistList.map((art) => {
                  return (
                    <h2 key={art.id} className="map-artist-list">
                      &nbsp;{art.name}{" "}
                      <BsMusicNote className="artist-music-note" />
                    </h2>
                  );
                })}
              </div>
              <h2 className="map-address">
                <span>Address: </span>
                {selectedMarker.venue.address}
              </h2>
              <h2 className="map-date">
                <span>Date: </span>
                {selectedMarker.date.slice(5)}
              </h2>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
