import {
  faMessage,
  faPeopleCarry,
  faSackDollar,
  faToolbox,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-primary text-center">
        Business Summary
      </h2>
      <div className="px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="m-4  card card-compact border-none">
          <div className="card-body gap-0 text-center">
            <p className="text-4xl text-primary">
              <FontAwesomeIcon icon={faPeopleCarry} />
            </p>
            <h2 className="card-title justify-center">Total Customers</h2>
            <p className="text-2xl font-bold">
              <CountUp end={1000} />+
            </p>
          </div>
        </div>
        <div className="m-4 card card-compact border-none">
          <div className="card-body gap-0 text-center">
            <p className="text-4xl text-primary-focus">
              <FontAwesomeIcon icon={faTruck} />
            </p>
            <h2 className="card-title justify-center">Delivery Record</h2>
            <p className="text-2xl font-bold">
              <CountUp end={1200} />
              +
            </p>
          </div>
        </div>
        <div className="m-4 card card-compact border-none">
          <div className="card-body gap-0 text-center">
            <p className="text-4xl text-primary">
              <FontAwesomeIcon icon={faMessage} />
            </p>
            <h2 className="card-title justify-center">Reviews</h2>
            <p className="text-2xl font-bold">
              <CountUp end={90} />
              K+
            </p>
          </div>
        </div>
        <div className="m-4 card card-compact border-none">
          <div className="card-body text-center">
            <p className="text-4xl text-primary">
              <FontAwesomeIcon icon={faToolbox} />
            </p>
            <h2 className="card-title justify-center">Tools</h2>
            <p className="text-2xl font-bold">
              <CountUp end={30} />+
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
