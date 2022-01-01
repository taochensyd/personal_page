import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function HomeBody(data) {
  console.log(data);
  return (
    <div className="pageCenter">
      <h1>
        Hello, I'm {data.data.name.first} {data.data.name.last}
      </h1>
      <h3>
        <FontAwesomeIcon icon={faLocationArrow} />
        {" "}{data.data.location.city}{", "}{data.data.location.country}
      </h3>
    </div>
  );
}

export default HomeBody;
