import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

function QuizlyLanding() {
    return (
        <div className=" px-6 min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-100">
            {/* <Navbar />  */}

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center px-4 md:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight">
                        Welcome to Quizly
                    </h1>

                    <div className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto ">
                        <p className="mb-4">
                            Test your knowledge with topic-based quizzes, or
                        </p>
                        <p className="mb-4">
                            have a conversation with our AI to learn and grow.
                        </p>
                        <p>
                            Start your learning adventure now.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                        <button className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors">
                            <NavLink to="/quiz">
                                Start Quiz
                            </NavLink>
                        </button>
                        <button className="bg-transparent border-2 border-slate-800 text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors">
                            <NavLink to="/aichat">
                                Ask AI
                            </NavLink>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default QuizlyLanding