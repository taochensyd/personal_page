import React from "react";
import "../styles/componentsStyle.css";

function HomeBody(data) {
  console.log(data);
  return (
    <div className="pageCenter">
      <h1>
        Hello, I'm {data.data.name.first} {data.data.name.last}
      </h1>
      <h3>
        {"@"}
        {data.data.location.city} {data.data.location.country}
      </h3>
    </div>
  );
}

export default HomeBody;
