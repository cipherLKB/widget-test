import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatbox from './chat/Chatbox';

const App = () => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div>
      {
        openChat && (<Chatbox />)
      }
      <button className='fixed-chat-btn' onClick={()=>setOpenChat(!openChat)} >
        Notifire Chat
      </button>
    </div>
  );
}

export default App;
