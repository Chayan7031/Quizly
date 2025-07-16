import React from 'react'
import { Brain } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Brain className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">Quizly</span>
                            </div>
                            <p className="text-slate-400">
                                Empowering learners with AI-driven education technology.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Features</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>AI-Powered Quizzes</li>
                                <li>Interactive Chat</li>
                                <li>Progress Tracking</li>
                                <li>Multiple Subjects</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>Help Center</li>
                                <li>Documentation</li>
                                <li>Community</li>
                                <li>Feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                        <p>&copy; 2025 Quizly. All rights reserved.</p>
                    </div>
                </div>
            </footer>
  )
}

export default Footer