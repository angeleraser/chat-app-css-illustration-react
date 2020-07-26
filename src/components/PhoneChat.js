import React, { useState } from "react";
import "../css/PhoneChat.css";
import MessageOptions from "./MessageOptions";
const Message = ({ message: { type, text }, hiddenBg, isActive }) => {
  const isMsgSend = type === "send";
  let [isOptionsActive, setClassName] = useState(false);
  const renderMsgOptions = () => {
    if (isMsgSend) {
      return <MessageOptions isActive={isOptionsActive} />;
    }
  };
  const displayMenu = () => {
    setClassName(!isOptionsActive);
    hiddenBg(!isOptionsActive);
  };
  return (
    <div
      onClick={isMsgSend ? displayMenu : undefined}
      className={`message-wrapper ${isMsgSend ? "right" : ""}`}>
      <p className={isMsgSend ? "msg-send" : "msg-received"}> {text}</p>
      {renderMsgOptions()}
    </div>
  );
};
const PhoneChat = ({ messages }) => {
  const [bgIsHidden, setClassName] = useState(false);
  return (
    <div className="phone-chat">
      <p className="msg-received">
        That's sounds great. I'd be happy to discuss more.
      </p>
      <p className="msg-received">
        Could you send over some pictures of your dog, please?
      </p>
      <div className="pictures">
        <img src="./images/dog-image-1.jpg" alt="dog" />
        <img src="./images/dog-image-2.jpg" alt="dog" />
        <img src="./images/dog-image-3.jpg" alt="dog" />
      </div>
      <p className="msg-send">Here are a few pictures. She's a happy girl!</p>
      <p className="msg-send deleted">Can you make it?</p>
      <p className="msg-received">
        She looks so happy! The time we discussed works. How long shall I take
        her out for?
      </p>
      <div className="pricing">
        <p>30 minute walk</p>
        <div className="price">$29</div>
      </div>
      <div className="pricing">
        <p>1 hour walk</p>
        <div className="price">$49</div>
      </div>
      {messages.map((m, i) => (
        <Message
          message={m}
          key={i}
          hiddenBg={setClassName}
          isActive={bgIsHidden}
        />
      ))}
      <div
        onClick={() => {
          setClassName(!bgIsHidden);
        }}
        className={`bg ${bgIsHidden ? "" : "hidden"}`}></div>
    </div>
  );
};

export default PhoneChat;
