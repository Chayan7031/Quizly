import React, { useEffect, useRef, useState } from 'react'
import { Bot } from 'lucide-react'
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';

function AiChat() {
    const [chatHistory, setChatHistory] = useState([]);
    const chatBodeyRef = useRef();

    const generateBotResponse =async (history) =>{
        //helper function to update chat history
        const updateHistory = (text)=>{
            setChatHistory(prev => [...prev.filter(msg=>msg.text !== "thinking.."), {role: "model", text}])
        }

        history = history.map(({role, text}) =>({role, parts:[{text}]}))

        // console.log(history)
        const requestOptions = {
            method: "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify({ contents : history})
        }

        try{
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            if(!response.ok) throw new Error(data.error.message || "something went wrong!");

            // console.log(data);
            //clean and update chat history with bot response
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        chatBodeyRef.current.scrollTo({top: chatBodeyRef.current.scrollHeight, behavior: "smooth"})
    }, [chatHistory])

    return (
        <div className='container min-h-screen flex items-end justify-center w-full'>
            <div className='chatbot-popup relative w-3xl max-h-screen rounded-2xl p-3 mt-5'>
                {/* chatheader */}
                <div className="chat-header">
                    <div className="header-info hidden md:flex h-10 text-2xl items-center">
                        {/* <Bot className='' /> */}
                        <img className='w-[35px]' src="src\assets\logo.svg" alt="" />
                        <h2 className='logo-text'>QuizlyAI</h2>
                    </div>
                    {/* <button className='material-symbols-rounded'>keyboard_arrow_down</button> */}
                </div>

                {/* body */}
                <div ref={chatBodeyRef} className="chat-body h-[700px] overflow-y-auto py-[25px] px-[22px] flex flex-col gap-[15px] mb-[82px]">
                    <div className="message flex gap-[11px] items-center bot-message ">
                        <img className='w-[20px]' src="src\assets\logo.svg" alt="" />
                        <p className='message-text py-[12px] px-[16px] max-w-[75%]  wrap-break-word whitespace-pre-line'>
                            Hey there. <br /> How can i help you?
                        </p>
                    </div>

                    {/* render chat history dynamically */}
                    {chatHistory.map((chat, index) =>(
                        <ChatMessage key={index} chat={chat}/>
                    ))}
                </div>

                {/* chat footer */}
                <div className="chat-footer absolute bottom-0 w-full p-5">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>

        </div>
    )
}

export default AiChat