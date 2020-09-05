import React from "react";
import Message from "../message/Message";

const Messages = ({ messages, userName }) => {
  return (
    <div>
      {messages?.length
        ? messages.map((message, i) => {
            return (
              <Message
                key={`message-${i}`}
                message={message}
                userName={userName}
              />
            );
          })
        : null}
    </div>
  );
};

export default Messages;
