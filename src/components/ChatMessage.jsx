import { Bot } from 'lucide-react'
import React from 'react'

function ChatMessage({chat}) {
    return (
        <div className={`message flex gap-[11px]  ${chat.role === "model"? 'bot': 'user'}-message `}>
            {/* <img className='w-[20px]' src="src\assets\logo.svg" alt="" /> */}
            {chat.role === "model" &&  <img className='w-[25px]' src="src\assets\logo.svg" alt="" />}
            <p className='message-text py-[12px] px-[16px] max-w-[75%]  wrap-break-word whitespace-pre-line'>
                {chat.text}
            </p>
        </div>
    )
}

export default ChatMessage