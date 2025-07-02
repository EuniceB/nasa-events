import PropTypes from "prop-types";
import Icon from "@iconify/react";
import wildfires from "@iconify/icons-mdi/fire";
import severeStorms from "@iconify/icons-mdi/windsock";
import seaLakeIce from "@iconify/icons-mdi/snowflake";
import drought from "@iconify/icons-mdi/water-off";
import dustHaze from "@iconify/icons-mdi/google-podcast";
import earthquakes from "@iconify/icons-mdi/waveform";
import floods from "@iconify/icons-mdi/flood";
import landslides from "@iconify/icons-mdi/slope-downhill";
import manmade from "@iconify/icons-mdi/foot-print";
import snow from "@iconify/icons-mdi/weather-snowy";
import tempExtremes from "@iconify/icons-mdi/temperature-alert";
import volcanoes from "@iconify/icons-mdi/image-size-select-actual";
import waterColor from "@iconify/icons-mdi/waves";

const categoryIcon = {
  wildfires,
  drought,
  dustHaze,
  earthquakes,
  floods,
  landslides,
  manmade,
  seaLakeIce,
  severeStorms,
  snow,
  tempExtremes,
  volcanoes,
  waterColor,
};

const categoryColor = {
  wildfires: "red",
  drought: "yellow",
  dustHaze: "brown",
  earthquakes: "black",
  floods: "blue",
  landslides: "brown",
  manmade: "black",
  seaLakeIce: "blue",
  severeStorms: "black",
  snow: "blue",
  tempExtremes: "red",
  volcanoes: "red",
  waterColor: "purple",
};

const EventPin = ({ event, showEventInfo }) => (
  <div
    className="pin"
    onClick={(e) => {
      e.stopPropagation();
      showEventInfo(event);
    }}
  >
    <Icon
      icon={categoryIcon[event.category]}
      width="24px"
      color={categoryColor[event.category]}
    />
  </div>
);

EventPin.propTypes = {
  event: PropTypes.object.isRequired,
  showEventInfo: PropTypes.func.isRequired,
};

export default EventPin;
