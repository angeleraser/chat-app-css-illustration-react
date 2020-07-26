import React, { useState } from "react";
import "../css/Phone.css";
import PhoneUserBar from "./PhoneUserBar";
import { userData } from "../data";
import PhoneTextInput from "./PhoneTextInput";
import PhoneChat from "./PhoneChat";
const randomMessages = [
  {
    type: "received",
    text: "Im busy, sorry.",
  },
  {
    type: "received",
    text: "Thanks!, i hope to see you again.",
  },
  {
    type: "received",
    text: "You can?",
  },
  {
    type: "received",
    text: "Yes, i'm here.",
  },
  {
    type: "received",
    text: "Hi, how are you?",
  },
  {
    type: "received",
    text: "Lorem ipsum dolor!",
  },
  {
    type: "received",
    text: "Hello!",
  },
];
const Phone = () => {
  const [messagesHistory, setMessage] = useState([]);
  const getText = (text) => {
    if (/\w/gi.test(text)) {
      setMessage(
        messagesHistory.concat([
          text,
          randomMessages[Math.floor(Math.random() * randomMessages.length)],
        ])
      );
    }
  };
  return (
    <div className="phone">
      <PhoneUserBar data={userData} />
      <PhoneChat messages={messagesHistory} />
      <PhoneTextInput storeMessage={getText} />
    </div>
  );
};
export default Phone;
