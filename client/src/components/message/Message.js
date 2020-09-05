import React from "react";

const Message = ({ message, userName }) => {
  const currentUser = message.user === userName;

  return currentUser ? (
    <div
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <small>{message.user}</small>
      <div
        style={{
          height: "40px",
          background: "#078377",
          color: "white",
          width: "fit-content",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          marginLeft: "5px",
        }}
      >
        <p>{message.text}</p>
      </div>
    </div>
  ) : (
    <div
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <small>{message.user}</small>
      <div
        style={{
          height: "40px",
          background: "#d3d3d3",
          color: "#000",
          width: "fit-content",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          marginLeft: "5px",
        }}
      >
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
