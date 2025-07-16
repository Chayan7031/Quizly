import { text } from 'framer-motion/client';
import React, { useRef } from 'react'
import { MdArrowUpward } from "react-icons/md";

function ChatForm({setChatHistory, generateBotResponse, chatHistory}) {
    const inputRef = useRef();

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";

        // console.log(userMessage);
        //add thinking in place of reply
        setChatHistory(history => [...history, {role: "user", text: userMessage}])

        //update chat history with the user's message
        setTimeout(()=> setChatHistory(history => [...history, {role: "model", text: "thinking.."}]), 600);


        generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);

    }

    return (
        <form action="#"
        onSubmit={handleFormSubmit}
         className="chat-form flex items-center bg-white outline-1 outline-[#CCCCE5] p-2 rounded-2xl shadow-gray-400 shadow-lg focus-within:outline-[2px] focus-within:outline-[#6D4FC2]">
            <input ref={inputRef} type="text" placeholder='search..' className='message-input w-full border-0 outline-0 h-[40px] px-6 text-xl' required />
            <button className=' w-[40px]] bg-[#6D4FC2] text-amber-50 rounded-full shrink-0 border-0 outline-0 p-3 cursor-pointer transition-all hover:bg-[#593bab]'>
                <MdArrowUpward />
            </button>
        </form>
    )
}

export default ChatForm