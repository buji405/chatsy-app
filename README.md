# chatsy-app
a small chat application 

**Set Up**

* Clone the repo
* cd into client directory and run ```npm install```, then run ```npm start```
* In another terminal window cd into server directory and run ```npm install```, then run ```npm start```
* Navigate to localhost:3000 in your browser and sign in
* Open another browser window and navigate to localhost:3000 and sign in as a different user
* Begin chatting in the text box and see the two accounts interacting with each other

**Description**

Chatsy is a real-time messaging app I developed using React, Express.js, Node, and Socket.io. With the [Socket.io](https://socket.io/get-started/chat/) library, two or more users are able to communicate with each other in real-time, creating a seamless online communication experience. 
Socket.io was quick to implement and get going out of the box and was ideal for what I needed it to do. I found Socket.io had plenty of documentation and a robust community answering questions. 

**Future Implementations**

*Add testing*

- check if server is running
- check server recognizes new users connecting
- check if server recognizes users disconnecting
- check submit is working
- add validation and tests for errors

**UI**

* It would be great to broadcast a notifcation pop up with the user who has entered or left the chat
* I also would like to have the '...' chat bubble indicating a user is typing
* Timestamps near chat bubbles
* A list of the user names in the chat somewhere near the top
* Incorporating different chatrooms/group texts to join could be a neat future implementation

**Challenges**

When I started out, I went down a path of creating a "sign in" socket event where I wanted to display a message to the user who had joined by passing in the userName through the socket event to the server. I am using React Hooks and I think in my useEffect I couldn't get my conditional quite right for when the useEffect should trigger so I was getting some weird behavior and the users were getting mixed up and my messages weren't being added to the messages array. For the sake of time, I ended up nixing the signin socket, and ended up passing in the userName to the 'sentMessage' socket event instead. I was excited I was able to get the userName in there as that later on helped me to show the userNames with the chat bubbles as well as get the chat bubbles to appear on opposite sides/appear in different colors, which made for a better UI experience.

**Screenshots**

<img width="1278" alt="Screen Shot 2020-09-05 at 9 44 24 AM" src="https://user-images.githubusercontent.com/18603030/92505631-99d3d400-f1c1-11ea-92d9-daf33c089600.png">

<img width="995" alt="Screen Shot 2020-09-05 at 9 53 58 AM" src="https://user-images.githubusercontent.com/18603030/92505634-9b050100-f1c1-11ea-8778-cdf1defd26a0.png">

