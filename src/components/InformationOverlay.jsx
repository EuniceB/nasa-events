const InformationOverlay = ({ event: { title, description, date, link } }) => {
  return (
    <div className="card information-overlay">
      <h2>{title}</h2>
      <p>{new Date(date).toLocaleDateString()}</p>
      {description && <p>{description}</p>}
      {link && (
        <a href={link} target="_blank">
          See more information
        </a>
      )}
    </div>
  );
};
export default InformationOverlay;
