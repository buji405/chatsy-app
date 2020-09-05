import React from "react";

const ChatInput = ({ message, sendMessage, setMessage }) => {
  return (
    <form style={{height: "40px"}}>
      <input
        style={{ height: "100%", width: "420px" }}
        placeholder="Enter a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
    </form>
  );
};

export default ChatInput;
