import Map from "./Map";
import InformationOverlay from "./InformationOverlay";
import PropTypes from "prop-types";
import Alert from "./Alert";
import { useState } from "react";
import Filters from "./Filters";
import Header from "./Header";

const Home = ({
  categories,
  events,
  alert,
  setSelectedCategory,
  setSelectedTimePeriod,
}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <Header categories={categories} setSelectedCategory={setSelectedCategory} setSelectedTimePeriod={setSelectedTimePeriod}/>
      <Map events={events} showEventInfo={(event) => setSelectedEvent(event)} />
      {selectedEvent && <InformationOverlay event={selectedEvent} />}
      {alert && <Alert alert={alert} />}
    </>
  );
};

Home.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  setSelectedCategory: PropTypes.func,
  setSelectedTimePeriod: PropTypes.func,
  alert: PropTypes.string,
};

Home.defaultProps = {
  events: [],
  categories: [],
  setSelectedCategory: null,
  setSelectedTimePeriod: null,
  alert: null,
};

export default Home;
