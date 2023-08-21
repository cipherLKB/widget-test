import React, { useState } from "react";

const Chatbox = () => {
  const [chats, setChats] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateText = () => {
    if (inputText === "") {
    } else {
      let updatedChat = [...chats, inputText];
      setChats(updatedChat);
      setInputText("");
    }
  };

  return (
    <div className="chatbox-contain">
      <div className="chatbox-wrap">
        <div className="chatbox-header">
          <p className="chatbox-headertext">Live Chat</p>
          <p  >x</p>
        </div>
        <div className="msg-wrap" >
          {
            chats.map((msg, id) => (
              <div key={id} className="chat-wrap" >
                <div className="chat-bubble" >{msg}</div>
              </div>
            ))
          }
        </div>
        <div className="chatbox-textbox-contain">
          <input
            className="chatbox-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your message..."
          />
          <button onClick={updateText} >Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
