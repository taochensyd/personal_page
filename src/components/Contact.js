import React from "react";

function Contact(data) {
  return (
    <>
      <div className="containerCard">
        <p className="info">Mobile: {data.data.mobileNumber}</p>
        <p className="info">Email: {data.data.emailAddress.toUpperCase()}</p>
      </div>
    </>
  );
}

export default Contact;
