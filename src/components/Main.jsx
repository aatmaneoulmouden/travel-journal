import Place from "./Place";
import PlacesData from "../data.js";

const Main = () => {
  const places = PlacesData.map((place, index) => (
    <Place key={index} place={place} />
  ));
  
  return (
    <main>
      <div className="container">
        <div className="places-container py-4">
          {places}
        </div>
      </div>
    </main>
  );
};

export default Main;
