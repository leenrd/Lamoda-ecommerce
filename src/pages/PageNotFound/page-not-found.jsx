import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="bar"></div>
      <div className="heading-cont">
        <h1 className="headingTitle">404</h1>
        <div className="headsubText">Nothing to find here</div>
        <img
          src="/assets/MessyDoodle.png"
          alt="404.png"
          style={{ maxWidth: "500px", marginBottom: "3em" }}
        />
        <Link
          className="btn-secondary"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
