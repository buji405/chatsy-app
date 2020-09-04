import React from "react";

const Message = ({ message }) => {
  return (
    <>
      <p>{message.text}<small>{message.user}</small></p>
    </>
  );
};

export default Message;
