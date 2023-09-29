import { Fragment } from "react";

function Carousel() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=900&t=st=1689444951~exp=1689445551~hmac=8a493aa45172ac7044a0f661fc24a7dd1922cb410f4621d5afb0770e23ece045"
              className="d-block w-100 h-400"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h4>Software Development</h4>
              <p>Get Software Development and 24/7 support on go with me </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/hologram-projector-screen-with-cloud-system-technology_53876-108502.jpg?w=900&t=st=1689445062~exp=1689445662~hmac=17922b736cca0be3d3b0a271c7f98d4e532584264ee563915e0e5de65cafa7d0"
              className="d-block w-100"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h4>Get cloud in your control</h4>
              <p>
                Now you can control cloud in efficient manner with my
                partnership
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?w=900&t=st=1689445184~exp=1689445784~hmac=fe02a6130d07521cab3af42a2e9945c43e57cce7b18727c194ba3434c991b5fd"
              className="d-block w-100"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h4>In house Grapgic Design</h4>
              <p>
                Now engage your audience with creativity with in house designs
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
