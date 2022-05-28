import React from "react";


const MyPortfolio = () => {
  
  return (
    <div className="flex justify-center mb-2">
      <div className="card  w-3/4  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary text-4xl font-bold">Md Arif Uddin</h2>
          <h1>Email:mdarifuddin040@gmail.com</h1>
          <h1 className="text-xl font-bold text-primary">Edcational Background:</h1>
          <h1>Running:BSc in CSE,PORT CITY INTERNATIONAL UNIVERSITY</h1>
          <h1>HSC:CHATTAGRAM BIGGAN COLLEGE,2018</h1>
          <h1>SSC:BANSKHALI BANGABANDHU HIGH SCHOOL,2016</h1>
          <h1 className="mt-6 text-3xl text-primary font-bold">Skills:</h1>
          <h2>HTML</h2>
          <h2>JAVA</h2>
          <h2>JAVASCRIPT</h2>
          <h2>REACT</h2>
          <h2>NODE JS</h2>
          <h1 className="mt-6 text-3xl text-primary font-bold">Some of my project(live site link):</h1>
          <a href="https://fruits-stock-982ee.web.app">1.https://fruits-stock-982ee.web.app</a>
          <a href="https://lens-king-96d37.web.app">2.https://lens-king-96d37.web.app/</a>
          <a href="https://choose-bullet-123.netlify.app">3.https://choose-bullet-123.netlify.app</a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
