import React from "react";

const Statistic = () => {
  return (
    <>
      <div className=" dashboard-statistics dash-statistics dashboard-active">
        <div className="stats books-listed">
          <i className="fa fa-facebook"></i>
          <h4>Books Listed</h4>
          <p>
            <b>50 </b>
          </p>
        </div>
        <div className="stats books-not-yet">
          <i className="fa fa-facebook"></i>
          <h4>Books Not Returned Yet</h4>
          <p>
            <b>2 </b>
          </p>
        </div>
        <div className="stats registered-users">
          <i className="fa fa-facebook"></i>
          <h4>Registered Users</h4>
          <p>
            <b>152 </b>
          </p>
        </div>
        <div className="stats authors-listed">
          <i className="fa fa-facebook"></i>
          <h4>Authors Listed</h4>
          <p>
            <b>20 </b>
          </p>
        </div>
        <div className="stats listed-categories">
          <i className="fa fa-facebook"></i>
          <h4>Listed Categories</h4>
          <p>
            <b>125 </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistic;
