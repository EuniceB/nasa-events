import Filters from "./Filters";

const Header = ({ categories, setSelectedCategory, setSelectedTimePeriod }) => {
  return (
    <header>
      <div>
        <h1>NASA Events</h1>
        <div className="desc">Developed by <a href="https://eunice.dev">Eunice Beijinho</a>, powered by NASA.</div>
      </div>
      <Filters
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setSelectedTimePeriod={setSelectedTimePeriod}
      />
    </header>
  );
};
export default Header;
