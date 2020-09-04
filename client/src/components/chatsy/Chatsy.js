import React, { useState, useEffect } from "react";
import SignInModal from "../signInModal/SignInModal";
import Messages from "../messages/Messages";
import io from "socket.io-client";

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
    //prevent from refreshing page on send.
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", { userName, message }, () => setMessage(""));
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     
      {!isModalOpen ? (
        <div style={{ height: "50%", background: "white", width: "50%" }}>
             {userName && !messages.length && <div>Hello, {userName}!</div>}
          <div>
            <Messages messages={messages} />
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
            />
            <button onClick={(e) => sendMessage(e)}>Send</button>
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
