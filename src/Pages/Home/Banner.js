import React from "react";
import './Banner.css';
const Banner = () => {
  return (
    <div
      style={{ "font-family": "'Poppins',sans-serif" }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="w-3/4"
          alt="alternative pic"
          src="https://imgs.search.brave.com/_WvMP1pDc75FzXSFjHBA-quCr8yO4xlntLc-xXNZyT8/rs:fit:1200:844:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiL2Jk/LzkzLzRiYmQ5MzM4/YWE1OWYyNzJiMTU1/NGI1ZTAzZDZmZTI1/LmpwZw"
        />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Scrap</span> Tools Ltd
          </h1>
          <p className="py-6">
            Scrap tools ltd, based in bangladesh, MI, serves the tools sell,
            manufacture. They offer standard and custom parts and tools, with
            custom manufacturing services including machining, additive
            manufacturing, molding, cutting, extrusions, stamping, bending, and
            welding.
          </p>
          <button className="btn btn-primary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
