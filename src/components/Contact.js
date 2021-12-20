import React from "react";

function Contact(data) {
  return (
    <>
      <div>
        <h3>Mobile: </h3>
        <p>{data.data.mobileNumber}</p>
        <h3>Email:</h3>
        <p>{data.data.emailAddress}</p>
      </div>
      {console.log(data.data)}
    </>
  );
}

export default Contact;
