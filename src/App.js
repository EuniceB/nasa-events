import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { calculateDaysSince } from "./utils";

const App = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    title: "Volcanoes",
    id: "volcanoes",
  });
  const now = new Date();
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

  useEffect(() => {
    const updateEvents = async () => {
      let url = selectedCategory
        ? `https://eonet.gsfc.nasa.gov/api/v3/categories/${selectedCategory.id}`
        : "https://eonet.gsfc.nasa.gov/api/v3/events";
      url += selectedTimePeriod ? "?days=" + selectedTimePeriod.days : "";
      const { data } = await axios.get(url);
      setEvents(data.events);
      if (data.events.length === 0) {
        showAlert("We found no events. Try another category or time.");
      } else {
        showAlert(`${data.events.length} events found.`);
      }
    };

    updateEvents();
  }, [selectedCategory, selectedTimePeriod]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v3/categories"
      );
      setCategories(data.categories);
    };

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
