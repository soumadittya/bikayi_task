import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div className="jumbotron p-3 mb-2 bg-secondary text-white">
        <h1 className="display-4"><b>Hello, world!</b></h1>
        <p className="lead">
          <b>This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.</b>
        </p>
        <hr className="my-4" />
        <p>
          <b>It uses utility classes for typography and spacing to space content
          out within the larger container.</b>
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
