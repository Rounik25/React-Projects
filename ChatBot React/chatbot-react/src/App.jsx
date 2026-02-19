import './App.css'
import {useState} from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';


// App function to wrap all the component inside for rendering
function App() {
  
  const [chatMessages, setChatMessages] = useState([]);

  // wrap all the components to be rendered inside return 
  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages 
      chatMessages={chatMessages}
      />
      </div>
  )
}
  


export default App
