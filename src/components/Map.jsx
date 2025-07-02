import React, { useState, useEffect } from "react";
import EventPin from "./EventPin";
import GoogleMap from "google-map-react";
import PropTypes from "prop-types";

const getCleanEvents = (dirtyEvents) => {
  return dirtyEvents
    .filter((ev) => ev.geometry.some((g) => g.type === "Point"))
    .map((event) => {
      const latestGeometry = event.geometry.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )[0];

      return {
        id: event.id,
        description: event.description,
        title: event.title,
        lat: latestGeometry.coordinates[1],
        lng: latestGeometry.coordinates[0],
        date: latestGeometry.date,
        category: event.categories[0].id,
      };
    });
};

const calculateCenter = (events) => {
  const sumOfLatLon = events.reduce(
    (result, curr) => [result[0] + curr.lat, result[1] + curr.lng],
    [0, 0]
  );
  return [sumOfLatLon[0] / events.length, sumOfLatLon[1] / events.length];
};

const Map = ({ events, showEventInfo, resetEvent }) => {
  const [center, setCenter] = useState([36.22592, -35.97138]);
  const [mapEvents, setMapEvents] = useState([]);

  useEffect(() => {
    const cleanEvents = getCleanEvents(events);
    setMapEvents(cleanEvents);

    if (cleanEvents.length > 0) {
      setCenter(calculateCenter(cleanEvents));
    }
  }, [events]);

  const renderEvents = () => {
    return mapEvents.map((event) => {
      return (
        <EventPin
          key={event.id}
          lat={event.lat}
          lng={event.lng}
          event={event}
          showEventInfo={showEventInfo}
        />
      );
    });
  };

  let mapHeight = 0;
  if (document.getElementsByTagName("header").length > 0) {
    mapHeight =
      window.innerHeight -
      document.getElementsByTagName("header")[0].clientHeight +
      "px";
  }

  return (
    <div style={{ width: "100vw", height: mapHeight }}>
      <GoogleMap
        bootstrapURLKeys={{
          key: "AIzaSyCzWNIl6YwU2ibmZQonkytVOWzcIXxAxzA",
          v: "3.43",
        }}
        center={center}
        onClick={() => resetEvent()}
        zoom={3}
      >
        {renderEvents()}
      </GoogleMap>
    </div>
  );
};

Map.propTypes = {
  events: PropTypes.array,
  showEventInfo: PropTypes.func,
  resetEvent: PropTypes.func,
};

export default Map;
