import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatBubble from './components/ChatBubble';

const socket = io('http://localhost:3001');

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (message) => {
    socket.emit('message', message);
    setMessages((messages) => [...messages, message]);
  };

  return (
    <div className="App">
      <h1>My Chat App</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            username={message.username}
            text={message.text}
            isUser={message.isUser}
          />
        ))}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const messageInput = e.target.elements.message;
        const message = {
          username: 'User',
          text: messageInput.value,
          isUser: true,
        };
        sendMessage(message);
        messageInput.value = '';
      }}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
