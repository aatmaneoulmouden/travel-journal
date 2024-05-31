const Place = (props) => {
  // Place data
  const title = props.place.title;
  const description = props.place.description;
  const imageSrc = props.place.imageUrl;
  const date = `${props.place.startDate} - ${props.place.endDate}`;
  const location = props.place.location;
  const googleMapsUrl = props.place.googleMapsUrl;

  return (
    <article className="place flex gap-5 items-center py-8">
      <img
        src={imageSrc}
        alt={title}
        className="w-4/12 rounded-xl object-cover min-h-52"
      />
      <div>
        <div className="location flex gap-3 text-sm mb-1">
          <span className="country uppercase flex gap-1 items-center">
            <i className="fa-solid fa-location-dot text-[12px]"></i>
            {location}
          </span>
          <a
            href={googleMapsUrl}
            target="_blank"
            className="map-link font-light underline text-cool-gray"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="title text-2xl text-dark-blue font-bold mb-2">
          {title}
        </h2>
        <span className="date text-sm text-dark-blue font-bold mb-2 block">
          {date}
        </span>
        <p className="description text-sm">{description}</p>
      </div>
    </article>
  );
};

export default Place;
