import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="my-28">
      <h2 className="text-4xl font-bold text-center">Our Tools</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {tools
          .slice(0, 6).map((tools) => <Tool key={tools._id} tools={tools}></Tool>)
          .reverse()}
      </div>
    </div>
  );
};

export default Tools;
