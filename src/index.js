import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import Phone from "./components/Phone";
const ROOT = document.getElementById("root");
const ContentWrapper = () => {
  return (
    <main className="content-wrapper">
      <div className="bg-pattern top"></div>
      <div className="bg-pattern bottom"></div>
      <Phone />
      <div className="heading">
        <h1>Simple Booking</h1>
        <p>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can eate your walker and book again all through
          the chat.
        </p>
      </div>
    </main>
  );
};
ReactDOM.render(<ContentWrapper />, ROOT);
