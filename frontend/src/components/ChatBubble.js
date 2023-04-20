import React from 'react';

const ChatBubble = ({ text, sender }) => {
  return (
    <div className={`chat-bubble ${sender === 'user' ? 'user' : 'bot'}`}>
      {text}
    </div>
  );
};

export default ChatBubble;
