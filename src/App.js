import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { calculateDaysSince } from "./utils";

const App = () => {
  const now = new Date();

  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    title: "Volcanoes",
    id: "volcanoes",
  });
  const [selectedTimePeriod, setSelectedTimePeriod] = useState({
    title: "This year",
    days: calculateDaysSince(new Date(now.getFullYear(), 0, 1)),
    id: 5,
  });
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const fetchEvents = async (categoryId, days) => {
    let url = categoryId
      ? `https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${categoryId}`
      : "https://eonet.sci.gsfc.nasa.gov/api/v3/events";
    url += days ? "?days=" : "";
    const { data } = await axios.get(url);
    setEvents(data.events);
  };

  const fetchCategories = async () => {
    let url = "https://eonet.sci.gsfc.nasa.gov/api/v3/categories";
    const { data } = await axios.get(url);
    setCategories(data.categories);
  };

  useEffect(() => {
    fetchEvents(
      selectedCategory ? selectedCategory.id : null,
      selectedTimePeriod ? selectedTimePeriod.days : null
    );
    if (events.length === 0) {
      showAlert("We found no events. Try another category or time.");
    } else {
      showAlert(`${events.length} events found.`);
    }
  }, [selectedCategory, selectedTimePeriod]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Home
      events={events}
      categories={categories}
      setSelectedCategory={(category) => setSelectedCategory(category)}
      setSelectedTimePeriod={(timePeriod) => setSelectedTimePeriod(timePeriod)}
      alert={alert}
    />
  );
};
export default App;
