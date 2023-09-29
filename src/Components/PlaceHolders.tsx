import { Fragment } from "react";
function PlaceHolders() {
  return (
    <>
      <div className="card">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGCXp85o5OzUw/profile-displayphoto-shrink_800_800/0/1683613422990?e=2147483647&v=beta&t=couqQAgKTXNP_5Mk_4aH6GPZGk9BUo4aq-s8luc9YGE"
          className="card-img-top"
          alt="..."
        ></img>

        <div className="card-body">
          <h5 className="card-title">Somit Shaw</h5>
          <p className="card-text">
            An engineer is a professional who applies scientific knowledge,
            mathematics, and practical skills to design, develop, and construct
            solutions for various industries. They analyze problems, create
            designs, oversee implementation, and ensure the functionality,
            efficiency, and safety of projects. Engineers contribute to
            advancements in technology and drive innovation.
          </p>
          <a href="#" className="btn btn-primary">
            Explore More
          </a>
        </div>
      </div>
    </>
  );
}

export default PlaceHolders;
