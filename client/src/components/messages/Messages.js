import React from "react";

import Message from "../message/Message";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages?.length
        ? messages.map((message, i) => {
            return (
              <Message
                key={`message-${i}`}
                message={message}
              />
            );
          })
        : null}
    </div>
  );
};

export default Messages;
