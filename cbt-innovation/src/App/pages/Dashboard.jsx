import React, { useState } from 'react';
import {
    FaBuilding,
    FaPlus,
    FaEye,
    FaChevronDown,
    FaUsers,
    FaChartLine,
    FaAward,
    FaClock,
    FaBook,
    FaStar,
    FaArrowUp,
    FaCalendarAlt
} from 'react-icons/fa';

const Dashboard = () => {
    const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState('Personal Workspace');

    const organizations = [
        { id: 1, name: 'Personal Workspace', type: 'personal', members: 1 },
        { id: 2, name: 'Tech University Prep', type: 'education', members: 24 },
        { id: 3, name: 'Code Masters Inc', type: 'corporate', members: 156 }
    ];

    const stats = [
        {
            title: 'Tests Taken',
            value: '47',
            change: '+12%',
            trend: 'up',
            icon: FaBook,
            color: 'blue'
        },
        {
            title: 'Avg Score',
            value: '84%',
            change: '+5%',
            trend: 'up',
            icon: FaAward,
            color: 'green'
        },
        {
            title: 'Study Time',
            value: '36h',
            change: '+8h',
            trend: 'up',
            icon: FaClock,
            color: 'purple'
        },
        {
            title: 'Streak',
            value: '12d',
            change: 'Active',
            trend: 'neutral',
            icon: FaArrowUp,
            color: 'orange'
        }
    ];

    const recentActivity = [
        {
            id: 1,
            title: 'Math Test',
            description: '92% score',
            time: '2h ago',
            type: 'test_completed',
            score: 92
        },
        {
            id: 2,
            title: 'Physics Practice',
            description: '30 questions',
            time: '5h ago',
            type: 'practice',
            score: null
        },
        {
            id: 3,
            title: 'Chemistry Exam',
            description: 'Scheduled',
            time: '1d ago',
            type: 'scheduled',
            score: null
        },
        {
            id: 4,
            title: 'Biology Quiz',
            description: '88% score',
            time: '1d ago',
            type: 'test_completed',
            score: 88
        }
    ];

    const upcomingTests = [
        {
            id: 1,
            subject: 'Physics',
            topic: 'Quantum Mechanics',
            date: 'Tomorrow, 10:00 AM',
            duration: '2 hours'
        },
        {
            id: 2,
            subject: 'Mathematics',
            topic: 'Calculus',
            date: 'Dec 15, 2:00 PM',
            duration: '1.5 hours'
        }
    ];

    const StatCard = ({ stat }) => {
        const Icon = stat.icon;
        const colorClasses = {
            blue: { bg: 'bg-blue-50', icon: 'text-blue-600', change: 'text-blue-600' },
            green: { bg: 'bg-green-50', icon: 'text-green-600', change: 'text-green-600' },
            purple: { bg: 'bg-purple-50', icon: 'text-purple-600', change: 'text-purple-600' },
            orange: { bg: 'bg-orange-50', icon: 'text-orange-600', change: 'text-orange-600' }
        };

        const colors = colorClasses[stat.color];

        return (
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-xl ${colors.bg}`}>
                        <Icon className={`text-lg sm:text-xl ${colors.icon}`} />
                    </div>
                    <div className={`text-xs sm:text-sm font-medium ${colors.change}`}>
                        {stat.change}
                    </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.title}</div>
                </div>

                {/* Hover effect line */}
                <div className="w-0 h-1 bg-gray-900 mt-3 sm:mt-4 group-hover:w-full transition-all duration-300"></div>
            </div>
        );
    };

    const ActivityItem = ({ activity }) => {
        const getActivityIcon = (type) => {
            switch (type) {
                case 'test_completed':
                    return <FaAward className="text-green-500 text-xs sm:text-sm" />;
                case 'practice':
                    return <FaBook className="text-blue-500 text-xs sm:text-sm" />;
                case 'scheduled':
                    return <FaCalendarAlt className="text-purple-500 text-xs sm:text-sm" />;
                default:
                    return <FaStar className="text-gray-500 text-xs sm:text-sm" />;
            }
        };

        return (
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-gray-300 transition-colors duration-200">
                    {getActivityIcon(activity.type)}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-gray-900 text-sm leading-tight">{activity.title}</h4>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2 whitespace-nowrap">{activity.time}</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 leading-tight">{activity.description}</p>

                    {activity.score && (
                        <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                            <FaAward className="text-xs" />
                            <span>{activity.score}%</span>
                        </div>
                    )}
                </div>
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
                            Dashboard
                        </h1>

                        {/* Organizations Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                                className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group"
                            >
                                <FaBuilding className="text-gray-600 text-sm sm:text-lg" />
                                <div className="text-left hidden sm:block">
                                    <div className="text-sm font-medium text-gray-900">{selectedOrg}</div>
                                    <div className="text-xs text-gray-500">Organization</div>
                                </div>
                                <div className="text-left sm:hidden">
                                    <div className="text-sm font-medium text-gray-900">Org</div>
                                </div>
                                <FaChevronDown className={`text-gray-400 text-xs sm:text-sm transition-transform duration-200 ${isOrgDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isOrgDropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-30">
                                    {/* Header */}
                                    <div className="p-4 border-b border-gray-200">
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Organizations</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage your learning spaces</p>
                                    </div>

                                    {/* Organization List */}
                                    <div className="p-2">
                                        {organizations.map((org) => (
                                            <button
                                                key={org.id}
                                                onClick={() => {
                                                    setSelectedOrg(org.name);
                                                    setIsOrgDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 ${selectedOrg === org.name
                                                    ? 'bg-gray-900 text-white'
                                                    : 'hover:bg-gray-50 text-gray-700'
                                                    }`}
                                            >
                                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${selectedOrg === org.name
                                                    ? 'bg-gray-700'
                                                    : 'bg-gray-100'
                                                    }`}>
                                                    <FaBuilding className={
                                                        selectedOrg === org.name ? 'text-white' : 'text-gray-600'
                                                    } />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-sm truncate">{org.name}</div>
                                                    <div className={`text-xs ${selectedOrg === org.name ? 'text-gray-300' : 'text-gray-500'
                                                        }`}>
                                                        {org.members} members • {org.type}
                                                    </div>
                                                </div>
                                                {selectedOrg === org.name && (
                                                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="p-4 border-t border-gray-200 space-y-2">
                                        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                            <FaPlus className="text-gray-600 text-sm" />
                                            <span className="font-medium text-sm">Create Organization</span>
                                        </button>
                                        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                            <FaEye className="text-gray-600 text-sm" />
                                            <span className="font-medium text-sm">View All Organizations</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Row - Welcome Text */}
                    <div className="text-left">
                        <p className="text-gray-600 text-sm sm:text-base">Welcome back! Here's your learning overview.</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
                    {/* Stats Grid */}
                    <section>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {stats.map((stat, index) => (
                                <StatCard key={index} stat={stat} />
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                        {/* Recent Activity */}
                        <section>
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-4 sm:p-6 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Recent Activity</h2>
                                        <button className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                            View All
                                        </button>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
                                    {recentActivity.map((activity) => (
                                        <ActivityItem key={activity.id} activity={activity} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Upcoming Tests */}
                        <section>
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                                <div className="p-4 sm:p-6 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Upcoming Tests</h2>
                                        <button className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                            View Calendar
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                    {upcomingTests.map((test) => (
                                        <div key={test.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-200 group">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaBook className="text-blue-600 text-sm sm:text-lg" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">{test.subject}</h4>
                                                <p className="text-gray-600 text-xs sm:text-sm mb-2 leading-tight line-clamp-1">{test.topic}</p>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <FaCalendarAlt className="text-xs flex-shrink-0" />
                                                        <span className="truncate">{test.date}</span>
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FaClock className="text-xs flex-shrink-0" />
                                                        <span>{test.duration}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <button className="px-3 py-2 bg-gray-900 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap flex-shrink-0">
                                                Prepare
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Quick Actions */}
                    <section>
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                                {[
                                    { label: 'Practice Test', icon: FaBook, color: 'blue' },
                                    { label: 'Analytics', icon: FaChartLine, color: 'green' },
                                    { label: 'Schedule', icon: FaClock, color: 'purple' },
                                    { label: 'Achievements', icon: FaAward, color: 'orange' }
                                ].map((action, index) => {
                                    const Icon = action.icon;
                                    const colorClasses = {
                                        blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
                                        green: 'bg-green-50 text-green-600 hover:bg-green-100',
                                        purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
                                        orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                                    };

                                    return (
                                        <button
                                            key={index}
                                            className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl transition-all duration-200 hover:scale-105 ${colorClasses[action.color]}`}
                                        >
                                            <Icon className="text-lg sm:text-xl" />
                                            <span className="font-medium text-xs sm:text-sm text-center leading-tight">{action.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;