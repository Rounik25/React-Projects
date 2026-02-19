import robotImage from '../assets/robot.png'; 
import userImage from '../assets/user.png'; 
import "./ChatMessage.css";


// function to create one chat message component of sender/robot
export function ChatMessage( {message,sender} ) {

  return (
    <div 
      className = {
            sender==='user'
              ? 'user-text-view'
              : 'robot-text-view'
          }>
      { 
        sender === 'robot' && 
        <img src={robotImage} width="50px" className='icon' /> 
      }
      <div className="text-container">
        { message }
      </div>
      { 
        sender === 'user' && 
        <img src={userImage} width="50px" className='icon' /> 
      }
      
    </div>
      
  )

}