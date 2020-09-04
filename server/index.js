const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("A user has connected.");

  //user generated message
  socket.on("sendMessage", ({ userName, message }, callback) => {
    io.emit("message", {user: userName, text: message});
    callback();
  });
  socket.on("disconnect", () => {
    console.log("A user has disconnected.");
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
