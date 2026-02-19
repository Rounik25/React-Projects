import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";


// Function to create a input field and send button for chat messages
export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText,setInputText] = useState('');
  function saveInputText(event){
    setInputText(event.target.value);
  }
  // function to sent push new input message into the array chatMessages
  function sendMessage(){
    const newChatMessage=[
      ...chatMessages,
      {
        message : inputText,
        sender : "user",
        key : crypto.randomUUID()
      }
    ]
    setChatMessages(newChatMessage);
    const response=Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessage,
      {
        message : response,
        sender : "robot",
        key : crypto.randomUUID()
      }
    ]);
    setInputText("");
  }
  // return the input field and the send button
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="input-text"
      />   
      <button
        onClick={sendMessage}
        className="send-button"
      >Send
      </button>
    </div>
  );
}
