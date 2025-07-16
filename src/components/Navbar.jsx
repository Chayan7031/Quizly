import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <header className="fixed w-full">
            <div className="flex items-center justify-between px-10 py-5">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    {/* <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-slate-800 rounded-full"></div>
            </div>
          </div> */}
                    <NavLink to="/" className="flex items-center gap-2">
                        <img className='w-[50px]' src="src\assets\logo.svg" alt="" />
                        <span className="text-3xl font-bold text-slate-800">Quizly</span>
                    </NavLink>
                </div>

                {/* Desktop Navigation - Same as original */}
                <nav className="hidden md:flex space-x-8">
                    <NavLink
                        to="/"
                        href="#" className="text-slate-700 hover:text-slate-900 font-medium">Home</NavLink>
                    <NavLink
                        to="/quiz"
                        href="#" className="text-slate-700 hover:text-slate-900 font-medium">Quiz</NavLink>
                    <NavLink
                        to="/about"
                        href="#" className="text-slate-700 hover:text-slate-900 font-medium">About</NavLink>
                    <NavLink
                        to="/aichat"
                        href="#" className="text-slate-700 hover:text-slate-900 font-medium">AI Chat</NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col space-y-1 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden static top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="flex flex-col p-4 space-y-4">
                    <NavLink to="" href="#" className="text-slate-700 hover:text-slate-900 font-medium py-2">Home</NavLink>
                    <NavLink to="/quiz" href="#" className="text-slate-700 hover:text-slate-900 font-medium py-2">Quiz</NavLink>
                    <NavLink to="/about" href="#" className="text-slate-700 hover:text-slate-900 font-medium py-2">About</NavLink>
                    <NavLink to="/aichat" href="#" className="text-slate-700 hover:text-slate-900 font-medium py-2">AI Chat</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar