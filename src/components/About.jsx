import React from 'react';
import { Brain, Target, Users, Zap, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const features = [
        {
            icon: <Brain className="w-8 h-8 text-blue-600" />,
            title: "AI-Powered Learning",
            description: "Our advanced AI creates personalized quizzes and provides intelligent explanations to enhance your learning experience."
        },
        {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: "Topic-Based Quizzes",
            description: "Choose from a wide range of subjects and difficulty levels to test your knowledge in specific areas."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Interactive AI Chat",
            description: "Engage in conversations with our AI to get instant answers, explanations, and personalized learning guidance."
        },
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Instant Feedback",
            description: "Get immediate results and detailed explanations for every question to understand your mistakes and improve."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-blue-600" />,
            title: "Comprehensive Content",
            description: "Access thousands of questions across multiple subjects, from basic concepts to advanced topics."
        },
        {
            icon: <Award className="w-8 h-8 text-blue-600" />,
            title: "Track Progress",
            description: "Monitor your learning journey with detailed analytics and performance tracking over time."
        }
    ];

    const stats = [
        { number: "10,000+", label: "Quiz Questions" },
        { number: "50+", label: "Subject Areas" },
        { number: "95%", label: "User Satisfaction" },
        { number: "24/7", label: "AI Availability" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 ">

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-slate-800 mb-6">
                        About Quizly
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Empowering learners worldwide with AI-driven education technology.
                        Our mission is to make learning accessible, engaging, and effective for everyone.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">
                            Why Choose Quizly?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Discover the features that make Quizly the perfect platform for your learning journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                    <p className="text-xl leading-relaxed mb-8">
                        At Quizly, we believe that learning should be personalized, engaging, and accessible to everyone.
                        We're committed to revolutionizing education through the power of artificial intelligence,
                        creating adaptive learning experiences that grow with each user.
                    </p>
                    <p className="text-lg opacity-90">
                        Join thousands of learners who have already discovered the future of education with Quizly.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Experience the power of AI-driven education today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            <Link to="/quiz">
                                Start Quiz
                            </Link>
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            <Link to="/aichat">
                                Ask AI
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}