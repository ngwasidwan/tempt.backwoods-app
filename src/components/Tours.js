import Title from "./title";
import { tours } from "../data";
const Tours = function () {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subtitle={"tours"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, title, infos, location, duration, cost } =
            tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{infos}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{`from ${cost}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
