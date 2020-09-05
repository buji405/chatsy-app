import React from "react";
import "./Message.css";

const Message = ({ message, userName }) => {
  const currentUser = message.user === userName;

  return currentUser ? (
    <div className="message-container end">
      <small>{message.user}</small>
      <div className="text-bubble current-user">
        <p>{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container start">
      <small>{message.user}</small>
      <div className="text-bubble receiving-user">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
