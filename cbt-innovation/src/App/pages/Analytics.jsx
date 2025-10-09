import React, { useState } from 'react';
import {
    FaChartLine,
    FaChartBar,
    FaChartPie,
    FaArrowUp,
    FaArrowDown,
    FaCalendarAlt,
    FaFilter,
    FaDownload,
    FaShare,
    FaUsers,
    FaAward,
    FaClock,
    FaBook,
    FaStar,
    FaChevronDown
} from 'react-icons/fa';

const Analytics = () => {
    const [timeRange, setTimeRange] = useState('month');
    const [activeMetric, setActiveMetric] = useState('performance');

    const performanceStats = [
        {
            title: 'Overall Score',
            value: '84%',
            change: '+5.2%',
            trend: 'up',
            description: 'Average across all tests'
        },
        {
            title: 'Tests Completed',
            value: '24',
            change: '+8',
            trend: 'up',
            description: 'This period'
        },
        {
            title: 'Study Time',
            value: '36.5h',
            change: '+12.3h',
            trend: 'up',
            description: 'Total learning time'
        },
        {
            title: 'Rank Position',
            value: '#156',
            change: '+24',
            trend: 'up',
            description: 'Global ranking'
        }
    ];

    const subjectPerformance = [
        { subject: 'Mathematics', score: 92, improvement: 8, tests: 12 },
        { subject: 'Physics', score: 78, improvement: 12, tests: 8 },
        { subject: 'Chemistry', score: 85, improvement: 5, tests: 6 },
        { subject: 'Programming', score: 88, improvement: 15, tests: 10 },
        { subject: 'Language', score: 76, improvement: 4, tests: 5 }
    ];

    const studyPatterns = [
        { day: 'Mon', hours: 3.2, tests: 2 },
        { day: 'Tue', hours: 4.1, tests: 3 },
        { day: 'Wed', hours: 2.8, tests: 1 },
        { day: 'Thu', hours: 5.2, tests: 4 },
        { day: 'Fri', hours: 3.6, tests: 2 },
        { day: 'Sat', hours: 6.8, tests: 5 },
        { day: 'Sun', hours: 4.3, tests: 3 }
    ];

    const recentAchievements = [
        {
            title: 'Math Master',
            description: 'Scored 95%+ in 5 math tests',
            icon: FaAward,
            color: 'yellow',
            date: '2 days ago'
        },
        {
            title: 'Study Streak',
            description: '7 days of consistent studying',
            icon: FaClock,
            color: 'green',
            date: '1 day ago'
        },
        {
            title: 'Quick Learner',
            description: 'Improved by 15% in Programming',
            icon: FaChartLine,
            color: 'blue',
            date: '3 days ago'
        }
    ];

    const improvementAreas = [
        { topic: 'Quantum Mechanics', current: 65, target: 85, priority: 'high' },
        { topic: 'Organic Chemistry', current: 72, target: 90, priority: 'medium' },
        { topic: 'Data Structures', current: 78, target: 88, priority: 'medium' },
        { topic: 'Grammar Rules', current: 68, target: 80, priority: 'low' }
    ];

    const StatCard = ({ stat }) => {
        return (
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 text-lg">{stat.title}</h3>
                    <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                        {stat.trend === 'up' ? <FaArrowUp className="text-xs" /> : <FaArrowDown className="text-xs" />}
                        {stat.change}
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                </div>

                {/* Progress line */}
                <div className="w-0 h-1 bg-gray-900 mt-4 group-hover:w-full transition-all duration-300"></div>
            </div>
        );
    };

    const SubjectProgress = ({ subject }) => {
        return (
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{subject.subject}</h4>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">{subject.score}%</span>
                        <span className={`text-sm font-medium ${subject.improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {subject.improvement >= 0 ? '+' : ''}{subject.improvement}%
                        </span>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${subject.score}%` }}
                    ></div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                    <span>{subject.tests} tests completed</span>
                    <span>+{subject.improvement}% improvement</span>
                </div>
            </div>
        );
    };

    const StudyPatternChart = () => {
        const maxHours = Math.max(...studyPatterns.map(day => day.hours));

        return (
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900 text-lg">Study Patterns</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaClock className="text-sm" />
                        <span>Hours per day</span>
                    </div>
                </div>

                <div className="flex items-end justify-between gap-2 h-32">
                    {studyPatterns.map((day, index) => (
                        <div key={day.day} className="flex flex-col items-center flex-1">
                            <div
                                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                                style={{ height: `${(day.hours / maxHours) * 80}%` }}
                            ></div>
                            <div className="text-center mt-2">
                                <div className="text-sm font-medium text-gray-900">{day.day}</div>
                                <div className="text-xs text-gray-500">{day.hours}h</div>
                                <div className="text-xs text-gray-400">{day.tests} test{day.tests !== 1 ? 's' : ''}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const AchievementCard = ({ achievement }) => {
        const Icon = achievement.icon;
        const colorClasses = {
            yellow: 'bg-yellow-50 text-yellow-600',
            green: 'bg-green-50 text-green-600',
            blue: 'bg-blue-50 text-blue-600',
            purple: 'bg-purple-50 text-purple-600'
        };

        return (
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${colorClasses[achievement.color]} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                        <div className="text-xs text-gray-500">{achievement.date}</div>
                    </div>
                </div>
            </div>
        );
    };

    const ImprovementArea = ({ area }) => {
        const priorityColors = {
            high: 'bg-red-50 text-red-700 border-red-200',
            medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
            low: 'bg-blue-50 text-blue-700 border-blue-200'
        };

        return (
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{area.topic}</h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[area.priority]}`}>
                        {area.priority} priority
                    </span>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Current: {area.current}%</span>
                        <span>Target: {area.target}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(area.current / area.target) * 100}%` }}
                        ></div>
                    </div>

                    <div className="text-right text-sm text-gray-500">
                        {area.target - area.current}% to reach target
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    {/* Top Row */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-10"></div>

                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center flex-1">
                            Analytics
                        </h1>

                        <div className="w-10"></div>
                    </div>

                    {/* Bottom Row - Description */}
                    <div className="text-left">
                        <p className="text-gray-600 text-sm sm:text-base">Detailed insights into your learning performance and progress</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Controls Section - Horizontal Scroll */}
                    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {/* Time Range Selector */}
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Time Range:</span>
                                <div className="flex bg-gray-100 rounded-xl p-1">
                                    {['week', 'month', 'quarter', 'year'].map((range) => (
                                        <button
                                            key={range}
                                            onClick={() => setTimeRange(range)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${timeRange === range
                                                    ? 'bg-white text-gray-900 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            {range.charAt(0).toUpperCase() + range.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Metric Selector */}
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">View:</span>
                                <div className="flex bg-gray-100 rounded-xl p-1">
                                    {[
                                        { id: 'performance', label: 'Performance', icon: FaChartLine },
                                        { id: 'progress', label: 'Progress', icon: FaChartBar },
                                        { id: 'comparison', label: 'Comparison', icon: FaChartPie }
                                    ].map((metric) => (
                                        <button
                                            key={metric.id}
                                            onClick={() => setActiveMetric(metric.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeMetric === metric.id
                                                    ? 'bg-white text-gray-900 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            <metric.icon className="text-sm" />
                                            {metric.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 flex-shrink-0">
                                <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap">
                                    <FaDownload className="text-gray-600 text-sm" />
                                    <span className="font-medium text-sm">Export</span>
                                </button>
                                <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap">
                                    <FaShare className="text-gray-600 text-sm" />
                                    <span className="font-medium text-sm">Share</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Performance Overview */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {performanceStats.map((stat, index) => (
                                <StatCard key={index} stat={stat} />
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Subject Performance */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Subject Performance</h2>
                                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                    View Details
                                </button>
                            </div>
                            <div className="space-y-4">
                                {subjectPerformance.map((subject, index) => (
                                    <SubjectProgress key={index} subject={subject} />
                                ))}
                            </div>
                        </section>

                        {/* Study Patterns */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Study Patterns</h2>
                                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                    Last 7 days
                                </button>
                            </div>
                            <StudyPatternChart />
                        </section>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Achievements */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Recent Achievements</h2>
                                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-4">
                                {recentAchievements.map((achievement, index) => (
                                    <AchievementCard key={index} achievement={achievement} />
                                ))}
                            </div>
                        </section>

                        {/* Improvement Areas */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Areas for Improvement</h2>
                                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                    Action Plan
                                </button>
                            </div>
                            <div className="space-y-4">
                                {improvementAreas.map((area, index) => (
                                    <ImprovementArea key={index} area={area} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Learning Insights */}
                    <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 shadow-sm p-8">
                        <div className="text-center max-w-2xl mx-auto">
                            <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Insights</h2>
                            <p className="text-gray-700 text-lg mb-6">
                                Your study consistency has improved by <span className="font-semibold text-green-600">28%</span> this month.
                                Keep maintaining your daily study routine for optimal results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium">
                                    Create Study Plan
                                </button>
                                <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200 font-medium">
                                    View Recommendations
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Analytics;