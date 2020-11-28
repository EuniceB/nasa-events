import React from "react";
import EventPin from "./EventPin";
import GoogleMap from "google-map-react";
import PropTypes from "prop-types";

const Map = ({initialLocation, events, showEventInfo}) => {
  const renderEvents = () => {
    return events
      .filter((ev) => ev.geometry.some((g) => g.type === "Point"))
      .map((event) => {
        const latestGeometry = event.geometry.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )[0];
        const newEvent = {
          date: latestGeometry.date,
          description: event.description,
          title: event.title,
          category: event.categories[0].id,
        };
        return (
          <EventPin
            key={event.id}
            lat={latestGeometry.coordinates[1]}
            lng={latestGeometry.coordinates[0]}
            event={newEvent}
            showEventInfo={showEventInfo}
          />
        );
      });
  };

  return (
    <div style={{ width: "100vw", height: "90.7vh" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyDSghDK0XWTOPMyvT2rvgPWycmNjfcnN7Y" }}
        center={initialLocation}
        zoom={4}
      >
        {renderEvents()}
      </GoogleMap>
    </div>
  );
};

Map.propTypes = {
  initialLocation: PropTypes.object,
  events: PropTypes.array,
  showEventInfo: PropTypes.func
}

Map.defaultProps = {
  initialLocation: {
    lat: 45.191613,
    lng: -33.408711
  }
}

export default Map;
