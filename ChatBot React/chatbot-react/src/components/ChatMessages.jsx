import { useEffect,useRef } from "react";
import {ChatMessage} from "./ChatMessage"
import "./ChatMessages.css"

// function to create and return all the chat messages between user and robot
function ChatMessages({chatMessages}) {
  const currentMessageRef=useRef(null)
  useEffect(()=>{
    const current=currentMessageRef.current;
    if (current){
      current.scrollTop=current.scrollHeight;
    }
  },[chatMessages])
  return (
    <div className="message-container"
    ref={currentMessageRef}>
      {chatMessages.map(( chatMessage )=>{
        return(
          <ChatMessage 
          message = { chatMessage.message }
          sender = { chatMessage.sender }
          key = { chatMessage.key }
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;