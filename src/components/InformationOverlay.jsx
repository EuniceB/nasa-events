const InformationOverlay = ( { event: { title, description, date } }) => {
    return <div className="card information-overlay">
        <h2>{title}</h2>
        <p>{new Date(date).toLocaleDateString()}</p>
        {description && <p>{description}</p>}
    </div>
}
export default InformationOverlay;