import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatInput from "../chatInput/ChatInput";
import SignInModal from "../signInModal/SignInModal";
import Messages from "../messages/Messages";
import "./Chatsy.css";

let socket;

const Chatsy = () => {
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io("localhost:5000");
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", { userName, message }, () => setMessage(""));
    }
  };

  return (
    <div className="chat-container">
      {!isModalOpen ? (
        <div>
          <div className="main">
            {userName && !messages.length && (
              <b style={{ marginLeft: "10px" }}>Hello, {userName}!</b>
            )}
            <div>
              <Messages messages={messages} userName={userName} />
            </div>
          </div>
          <div className="input-btn-container">
            <ChatInput
              message={message}
              sendMessage={sendMessage}
              setMessage={setMessage}
            />
            <button className="send-btn" onClick={(e) => sendMessage(e)}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <SignInModal
          setUserName={setUserName}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Chatsy;
