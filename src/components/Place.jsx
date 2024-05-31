const Place = () => {
  return (
    <article className="place flex gap-5 items-center py-8">
      <img
        src="https://source.unsplash.com/WLxQvbMyfas"
        alt="Mount Fuji"
        className="w-4/12 rounded-xl object-cover min-h-52"
      />
      <div>
        <div className="location flex gap-3 text-sm mb-1">
          <span className="country uppercase flex gap-1 items-center">
            <i className="fa-solid fa-location-dot text-[12px]"></i>
            Japan
          </span>
          <a href="" className="map-link font-light underline text-cool-gray">
            View on Google Maps
          </a>
        </div>
        <h2 className="title text-2xl text-dark-blue font-bold mb-2">Mount Fuji</h2>
        <span className="date text-sm text-dark-blue font-bold mb-2 block">
          12 Jan, 2021 - 24 Jan, 2021
        </span>
        <p className="description text-sm">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
};

export default Place;
