import { useEffect } from "react";
import Dropdown from "./Dropdown";
import { calculateDaysSince } from "../utils";

const timePeriods = [
  { id: 1, title: "Today", days: 1 },
  { id: 2, title: "Last 7 days", days: 7 },
  { id: 3, title: "Last 2 weeks", days: 15 },
];

const addMonthAnYearToTimePeriodOptions = () => {
  const now = new Date();
  timePeriods.push({
    title: "This month",
    days: calculateDaysSince(new Date(now.getFullYear(), now.getMonth(), 1)),
    id: 4,
  });
  timePeriods.push({
    title: "This year",
    days: calculateDaysSince(new Date(now.getFullYear(), 0, 1)),
    id: 5,
  });
};

const Filters = ({
  categories,
  setSelectedCategory,
  setSelectedTimePeriod,
}) => {
  useEffect(() => {
    addMonthAnYearToTimePeriodOptions();
  }, []);

  return (
    <div className="filters">
      {categories && categories.length > 0 && (
        <Dropdown
          title={"Category"}
          options={categories}
          defaultOptionIndex={10}
          onChange={setSelectedCategory}
        />
      )}
      {timePeriods && timePeriods.length === 5 && (
        <Dropdown
          title={"Time period"}
          options={timePeriods}
          defaultOptionIndex={4}
          onChange={setSelectedTimePeriod}
        />
      )}
    </div>
  );
};
export default Filters;
