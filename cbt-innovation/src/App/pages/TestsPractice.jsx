import React, { useState } from 'react';
import {
    FaSearch,
    FaFilter,
    FaPlay,
    FaClock,
    FaQuestionCircle,
    FaBook,
    FaStar,
    FaUsers,
    FaChartLine,
    FaBookmark,
    FaHistory,
    FaSort,
    FaChevronRight
} from 'react-icons/fa';

const TestsPractice = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('recent');

    const categories = [
        { id: 'all', name: 'All Tests', count: 24 },
        { id: 'math', name: 'Mathematics', count: 8 },
        { id: 'science', name: 'Science', count: 6 },
        { id: 'programming', name: 'Programming', count: 5 },
        { id: 'language', name: 'Language', count: 3 },
        { id: 'business', name: 'Business', count: 2 }
    ];

    const tests = [
        {
            id: 1,
            title: 'Advanced Calculus Final',
            subject: 'Mathematics',
            difficulty: 'advanced',
            questions: 50,
            duration: '120 min',
            attempts: 1247,
            averageScore: 68,
            popularity: 4.8,
            isBookmarked: true,
            lastAttempt: '2 days ago',
            tags: ['Calculus', 'Derivatives', 'Integrals']
        },
        {
            id: 2,
            title: 'Quantum Physics Basics',
            subject: 'Physics',
            difficulty: 'intermediate',
            questions: 30,
            duration: '60 min',
            attempts: 892,
            averageScore: 72,
            popularity: 4.6,
            isBookmarked: false,
            lastAttempt: '1 week ago',
            tags: ['Quantum', 'Physics', 'Basics']
        },
        {
            id: 3,
            title: 'JavaScript Fundamentals',
            subject: 'Programming',
            difficulty: 'beginner',
            questions: 25,
            duration: '45 min',
            attempts: 2156,
            averageScore: 85,
            popularity: 4.9,
            isBookmarked: true,
            lastAttempt: '3 days ago',
            tags: ['JavaScript', 'Web', 'Programming']
        },
        {
            id: 4,
            title: 'Organic Chemistry Reactions',
            subject: 'Chemistry',
            difficulty: 'advanced',
            questions: 40,
            duration: '90 min',
            attempts: 567,
            averageScore: 61,
            popularity: 4.3,
            isBookmarked: false,
            lastAttempt: 'Never attempted',
            tags: ['Organic', 'Chemistry', 'Reactions']
        },
        {
            id: 5,
            title: 'Business Statistics',
            subject: 'Business',
            difficulty: 'intermediate',
            questions: 35,
            duration: '75 min',
            attempts: 734,
            averageScore: 78,
            popularity: 4.5,
            isBookmarked: false,
            lastAttempt: '2 weeks ago',
            tags: ['Statistics', 'Business', 'Analysis']
        },
        {
            id: 6,
            title: 'English Grammar Mastery',
            subject: 'Language',
            difficulty: 'beginner',
            questions: 20,
            duration: '30 min',
            attempts: 1890,
            averageScore: 88,
            popularity: 4.7,
            isBookmarked: true,
            lastAttempt: '5 days ago',
            tags: ['English', 'Grammar', 'Language']
        }
    ];

    const practiceSets = [
        {
            id: 1,
            title: 'Quick Math Drills',
            type: 'practice',
            questions: 10,
            duration: '15 min',
            completed: true,
            progress: 100
        },
        {
            id: 2,
            title: 'Science Fundamentals',
            type: 'practice',
            questions: 15,
            duration: '20 min',
            completed: false,
            progress: 60
        },
        {
            id: 3,
            title: 'Code Challenges',
            type: 'practice',
            questions: 8,
            duration: '25 min',
            completed: false,
            progress: 0
        }
    ];

    const DifficultyBadge = ({ difficulty }) => {
        const colorClasses = {
            beginner: 'bg-green-100 text-green-700 border-green-200',
            intermediate: 'bg-blue-100 text-blue-700 border-blue-200',
            advanced: 'bg-purple-100 text-purple-700 border-purple-200'
        };

        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${colorClasses[difficulty]}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
        );
    };

    const TestCard = ({ test }) => {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-gray-800 transition-colors duration-200">
                                    {test.title}
                                </h3>
                                <button className={`p-1 rounded-lg transition-colors duration-200 ${test.isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}>
                                    <FaBookmark className="text-sm" />
                                </button>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <DifficultyBadge difficulty={test.difficulty} />
                                <span className="text-sm text-gray-500">{test.subject}</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">{test.questions}</div>
                            <div className="text-xs text-gray-500">Questions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">{test.duration}</div>
                            <div className="text-xs text-gray-500">Duration</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">{test.averageScore}%</div>
                            <div className="text-xs text-gray-500">Avg Score</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1">
                                <FaStar className="text-yellow-400 text-sm" />
                                <span className="text-lg font-bold text-gray-900">{test.popularity}</span>
                            </div>
                            <div className="text-xs text-gray-500">Rating</div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {test.tags.map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <FaUsers className="text-xs" />
                                {test.attempts.toLocaleString()}
                            </span>
                            <span>{test.lastAttempt}</span>
                        </div>
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 group">
                            <FaPlay className="text-xs" />
                            <span className="font-medium">Start Test</span>
                        </button>
                    </div>
                </div>

                {/* Hover effect line */}
                <div className="w-0 h-1 bg-gray-900 group-hover:w-full transition-all duration-300"></div>
            </div>
        );
    };

    const PracticeCard = ({ practice }) => {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">{practice.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <FaQuestionCircle className="text-xs" />
                                {practice.questions} questions
                            </span>
                            <span className="flex items-center gap-1">
                                <FaClock className="text-xs" />
                                {practice.duration}
                            </span>
                        </div>
                    </div>
                    {practice.completed && (
                        <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{practice.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${practice.progress}%` }}
                        ></div>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:border-gray-400 hover:bg-gray-50 active:scale-95 transition-all duration-200 group">
                    {practice.completed ? (
                        <>
                            <FaHistory className="text-sm" />
                            <span className="font-medium">Retake Practice</span>
                        </>
                    ) : (
                        <>
                            <FaPlay className="text-sm" />
                            <span className="font-medium">Continue Practice</span>
                        </>
                    )}
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    {/* Top Row - Organization Button */}
                    <div className="flex justify-between items-center mb-4">
                        {/* Left side - Empty for alignment */}
                        <div className="w-10"></div>

                        {/* Page Title - Centered */}
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center flex-1">
                            Tests & Practice
                        </h1>

                        {/* Empty space for balance */}
                        <div className="w-10"></div>
                    </div>

                    {/* Bottom Row - Description */}
                    <div className="text-left">
                        <p className="text-gray-600 text-sm sm:text-base">Practice tests and exam preparation materials</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Search and Filter Section */}
                    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                            {/* Search Bar */}
                            <div className="flex-1 relative">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Search tests and practice sets..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                                />
                            </div>

                            {/* Filter and Sort */}
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-3 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                                    <FaFilter className="text-gray-600 text-sm" />
                                    <span className="font-medium text-sm">Filter</span>
                                </button>
                                <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-3 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                                    <FaSort className="text-gray-600 text-sm" />
                                    <span className="font-medium text-sm">Sort</span>
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex overflow-x-auto gap-2 mt-6 pb-2 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 ${activeCategory === category.id
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <span className="font-medium text-sm">{category.name}</span>
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category.id
                                            ? 'bg-gray-700 text-gray-300'
                                            : 'bg-gray-300 text-gray-600'
                                        }`}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Practice Sets */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Continue Practicing</h2>
                            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1">
                                View All
                                <FaChevronRight className="text-xs" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {practiceSets.map((practice) => (
                                <PracticeCard key={practice.id} practice={practice} />
                            ))}
                        </div>
                    </section>

                    {/* All Tests */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Available Tests</h2>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border-0 bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-0"
                                >
                                    <option value="recent">Most Recent</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="difficulty">Difficulty</option>
                                    <option value="score">Average Score</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {tests.map((test) => (
                                <TestCard key={test.id} test={test} />
                            ))}
                        </div>
                    </section>

                    {/* Quick Stats */}
                    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Test Performance</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { label: 'Tests Completed', value: '12', icon: FaBook, color: 'blue' },
                                { label: 'Average Score', value: '78%', icon: FaChartLine, color: 'green' },
                                { label: 'Study Time', value: '24h', icon: FaClock, color: 'purple' },
                                { label: 'Current Rank', value: '#156', icon: FaStar, color: 'orange' }
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                const colorClasses = {
                                    blue: 'bg-blue-50 text-blue-600',
                                    green: 'bg-green-50 text-green-600',
                                    purple: 'bg-purple-50 text-purple-600',
                                    orange: 'bg-orange-50 text-orange-600'
                                };

                                return (
                                    <div key={index} className="text-center">
                                        <div className={`w-12 h-12 ${colorClasses[stat.color]} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                                            <Icon className="text-xl" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default TestsPractice;