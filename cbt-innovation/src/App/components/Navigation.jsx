import React, { useState } from 'react';
import {
    FaHome,
    FaClipboardList,
    FaChartBar,
    FaCog,
    FaQuestionCircle,
    FaBars,
    FaTimes,
    FaChevronRight,
    FaUserCircle
} from 'react-icons/fa';

// Import your page components
import Dashboard from '../pages/Dashboard';
import TestsPractice from '../pages/TestsPractice';
// import Analytics from '../pages/Analytics';
// import Settings from '../pages/Settings';
// import Help from '../pages/Help';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    const navItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: FaHome,
            description: 'Overview of your learning progress',
            component: <Dashboard />
        },
        {
            id: 'tests',
            label: 'Tests & Practice',
            icon: FaClipboardList,
            description: 'Take practice tests and exams',
            component: <TestsPractice />
        },
        {
            id: 'analytics',
            label: 'Analytics',
            icon: FaChartBar,
            description: 'Detailed performance insights',
            component: <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
                <p className="text-gray-600">Performance analytics and insights will appear here.</p>
            </div>
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: FaCog,
            description: 'Customize your experience',
            component: <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-600">Platform settings and preferences will appear here.</p>
            </div>
        },
        {
            id: 'help',
            label: 'Help & Support',
            icon: FaQuestionCircle,
            description: 'Get help and documentation',
            component: <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
                <p className="text-gray-600">Help documentation and support resources will appear here.</p>
            </div>
        }
    ];

    const NavItem = ({ item }) => {
        const Icon = item.icon;
        const isActive = activeItem === item.id;

        const handleClick = () => {
            setActiveItem(item.id);
            setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
        };

        return (
            <button
                onClick={handleClick}
                className={`
                    w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group
                    ${isActive
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md'
                    }
                `}
            >
                <div className={`
                    flex items-center justify-center transition-all duration-300
                    ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                `}>
                    <Icon className={`
                        text-lg transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}
                    `} />
                </div>

                <div className="flex-1 text-left">
                    <div className="font-medium text-sm transition-colors duration-300">
                        {item.label}
                    </div>
                    <div className={`
                        text-xs transition-all duration-300 mt-1
                        ${isActive
                            ? 'text-gray-300 opacity-100'
                            : 'text-gray-500 opacity-0 group-hover:opacity-100'
                        }
                    `}>
                        {item.description}
                    </div>
                </div>

                <FaChevronRight className={`
                    text-xs transition-all duration-300
                    ${isActive
                        ? 'text-white opacity-100'
                        : 'text-gray-400 opacity-0 group-hover:opacity-100'
                    }
                    ${isActive ? 'translate-x-0' : '-translate-x-1 group-hover:translate-x-0'}
                `} />
            </button>
        );
    };

    const CurrentContent = () => {
        const currentItem = navItems.find(item => item.id === activeItem);
        return currentItem ? currentItem.component : null;
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="text-gray-600 text-sm" />
                            ) : (
                                <FaBars className="text-gray-600 text-sm" />
                            )}
                        </button>

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">TP</span>
                            </div>
                            <span className="font-bold text-gray-900 text-lg">TestPrep</span>
                        </div>
                    </div>

                    <button className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                        <FaUserCircle className="text-gray-600 text-lg" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Mobile Menu */}
                    <div className="absolute top-0 left-0 bottom-0 w-80 bg-white shadow-2xl border-r border-gray-200 transform transition-transform duration-300">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">TP</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">TestPrep</div>
                                        <div className="text-xs text-gray-500">Learning Platform</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <FaTimes className="text-gray-500 text-sm" />
                                </button>
                            </div>

                            {/* User Profile */}
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <FaUserCircle className="text-white text-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-900 text-sm">TobeChukwu Ejiofor</div>
                                    <div className="text-xs text-gray-500">Premium Member</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <nav className="p-4 space-y-2">
                            {navItems.map((item) => (
                                <NavItem key={item.id} item={item} />
                            ))}
                        </nav>

                        {/* Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                            <div className="text-center text-xs text-gray-500">
                                © 2024 TestPrep v2.1
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-80 bg-white border-r border-gray-200 z-30">
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-sm">TP</span>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-lg">TestPrep</div>
                                <div className="text-xs text-gray-500">Learning Platform</div>
                            </div>
                        </div>

                        {/* User Profile */}
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <FaUserCircle className="text-white text-xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900">TobeChukwu Ejiofor</div>
                                <div className="text-sm text-gray-500">tobe.j@example.com</div>
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2">
                        {navItems.map((item) => (
                            <NavItem key={item.id} item={item} />
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="p-6 border-t border-gray-200">
                        <div className="text-center text-sm text-gray-500 mb-2">
                            © 2024 TestPrep
                        </div>
                        <div className="text-xs text-gray-400 text-center">
                            Version 2.1.0
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={`
                min-h-screen bg-gray-50 transition-all duration-300
                lg:ml-80
            `}>
                <div className={`
                    pt-20 lg:pt-0 p-6 lg:p-8
                `}>
                    {/* Dynamic Content based on active navigation item */}
                    <CurrentContent />
                </div>
            </main>
        </>
    );
};

export default Navigation;