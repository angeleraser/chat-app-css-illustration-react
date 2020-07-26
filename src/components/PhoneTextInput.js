import React, { useState } from "react";
import "../css/PhoneTextInput.css";

const Input = ({ getText }) => {
  return (
    <input
      onChange={(e) => {
        getText({
          type: "send",
          text: e.target.value,
        });
      }}
      id="input"
      type="text"
      placeholder="Type a message..."
    />
  );
};
const PhoneTextInput = ({ storeMessage }) => {
  let [message, setMessage] = useState("");
  const writeMessage = (text) => {
    setMessage((message = text));
  };
  return (
    <div className="phone-input">
      <Input getText={writeMessage} />
      <button type = "submit"
        onClick={(e) => {
          document.getElementById("input").value = "";
          setTimeout(() => {
            document
              .querySelector(".phone-chat")
              .scrollTo(0, 9999999999);
          }, 10);
          storeMessage(message);
          setMessage((message = ""));
        }}>
        {">"}
      </button>
    </div>
  );
};

export default PhoneTextInput;
