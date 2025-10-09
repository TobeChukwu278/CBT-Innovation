import React, { useState } from 'react';
import {
    FaUser,
    FaBell,
    FaPalette,
    FaLock,
    FaDownload,
    FaQuestionCircle,
    FaMoon,
    FaSun,
    FaGlobe,
    FaVolumeUp,
    FaVolumeMute,
    FaEye,
    FaEyeSlash,
    FaSave,
    FaTimes,
    FaCheck,
    FaEdit
} from 'react-icons/fa';

const Settings = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        testReminders: true,
        progressUpdates: false,
        promotional: false
    });
    const [privacy, setPrivacy] = useState({
        profileVisibility: 'public',
        showScores: true,
        showActivity: true,
        dataCollection: true
    });
    const [appearance, setAppearance] = useState({
        theme: 'light',
        fontSize: 'medium',
        reduceAnimations: false
    });

    const settingsSections = [
        { id: 'profile', name: 'Profile', icon: FaUser },
        { id: 'notifications', name: 'Notifications', icon: FaBell },
        { id: 'appearance', name: 'Appearance', icon: FaPalette },
        { id: 'privacy', name: 'Privacy & Security', icon: FaLock },
        { id: 'data', name: 'Data & Storage', icon: FaDownload },
        { id: 'help', name: 'Help & Support', icon: FaQuestionCircle }
    ];

    const ProfileSettings = () => {
        const [profile, setProfile] = useState({
            firstName: 'TobeChukwu',
            lastName: 'Ejiofor',
            email: 'tobe.j@example.com',
            bio: 'Passionate learner focused on academic excellence and continuous improvement.',
            location: 'Lagos, Nigeria'
        });

        return (
            <div className="space-y-6">
                {/* Profile Header */}
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">TE</span>
                        </div>
                        <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white">
                            <FaEdit className="text-white text-xs" />
                        </button>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{profile.firstName} {profile.lastName}</h2>
                        <p className="text-gray-600">Premium Member • Joined March 2024</p>
                    </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                            type="text"
                            value={profile.firstName}
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                            type="text"
                            value={profile.lastName}
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                            type="text"
                            value={profile.location}
                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                        <textarea
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none resize-none"
                        />
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center gap-2">
                        <FaSave className="text-sm" />
                        Save Changes
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium">
                        Cancel
                    </button>
                </div>
            </div>
        );
    };

    const NotificationSettings = () => {
        const toggleNotification = (key) => {
            setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
        };

        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>

                <div className="space-y-4">
                    {[
                        { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
                        { key: 'push', label: 'Push Notifications', description: 'Get notified on your device' },
                        { key: 'testReminders', label: 'Test Reminders', description: 'Reminders for upcoming tests' },
                        { key: 'progressUpdates', label: 'Progress Updates', description: 'Weekly learning progress reports' },
                        { key: 'promotional', label: 'Promotional Emails', description: 'Updates about new features and offers' }
                    ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <div>
                                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <button
                                onClick={() => toggleNotification(item.key)}
                                className={`w-12 h-6 rounded-full transition-all duration-300 ${notifications[item.key] ? 'bg-gray-900' : 'bg-gray-300'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${notifications[item.key] ? 'translate-x-7' : 'translate-x-1'
                                    }`} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const AppearanceSettings = () => {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Appearance Settings</h2>

                {/* Theme Selection */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-4">Theme</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { id: 'light', name: 'Light', icon: FaSun, active: appearance.theme === 'light' },
                            { id: 'dark', name: 'Dark', icon: FaMoon, active: appearance.theme === 'dark' }
                        ].map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => setAppearance({ ...appearance, theme: theme.id })}
                                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${theme.active
                                    ? 'border-gray-900 bg-gray-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <theme.icon className={`text-lg ${theme.active ? 'text-gray-900' : 'text-gray-500'}`} />
                                <span className="font-medium text-gray-900">{theme.name}</span>
                                {theme.active && (
                                    <FaCheck className="text-gray-900 ml-auto" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Font Size */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-4">Font Size</h3>
                    <div className="flex gap-4">
                        {['small', 'medium', 'large'].map((size) => (
                            <button
                                key={size}
                                onClick={() => setAppearance({ ...appearance, fontSize: size })}
                                className={`flex-1 py-3 rounded-xl border-2 transition-all duration-200 ${appearance.fontSize === size
                                    ? 'border-gray-900 bg-gray-900 text-white'
                                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <span className="font-medium capitalize">{size}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Additional Options */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-4">Accessibility</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium text-gray-900">Reduce Animations</h4>
                                <p className="text-sm text-gray-600">Minimize motion and transitions</p>
                            </div>
                            <button
                                onClick={() => setAppearance({ ...appearance, reduceAnimations: !appearance.reduceAnimations })}
                                className={`w-12 h-6 rounded-full transition-all duration-300 ${appearance.reduceAnimations ? 'bg-gray-900' : 'bg-gray-300'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${appearance.reduceAnimations ? 'translate-x-7' : 'translate-x-1'
                                    }`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const PrivacySettings = () => {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy & Security</h2>

                <div className="space-y-4">
                    {/* Profile Visibility */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">Profile Visibility</h3>
                        <div className="space-y-3">
                            {[
                                { value: 'public', label: 'Public', description: 'Anyone can see your profile and activity' },
                                { value: 'friends', label: 'Friends Only', description: 'Only your connections can see your profile' },
                                { value: 'private', label: 'Private', description: 'Only you can see your profile' }
                            ].map((option) => (
                                <label key={option.value} className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="visibility"
                                        value={option.value}
                                        checked={privacy.profileVisibility === option.value}
                                        onChange={(e) => setPrivacy({ ...privacy, profileVisibility: e.target.value })}
                                        className="mt-1 text-gray-900 focus:ring-gray-900"
                                    />
                                    <div>
                                        <div className="font-medium text-gray-900">{option.label}</div>
                                        <div className="text-sm text-gray-600">{option.description}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Data Sharing */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">Data Preferences</h3>
                        <div className="space-y-4">
                            {[
                                { key: 'showScores', label: 'Show Test Scores', description: 'Display your scores to other users' },
                                { key: 'showActivity', label: 'Show Learning Activity', description: 'Share your study progress publicly' },
                                { key: 'dataCollection', label: 'Allow Data Collection', description: 'Help improve the platform with anonymous data' }
                            ].map((item) => (
                                <div key={item.key} className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-gray-900">{item.label}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                    <button
                                        onClick={() => setPrivacy({ ...privacy, [item.key]: !privacy[item.key] })}
                                        className={`w-12 h-6 rounded-full transition-all duration-300 ${privacy[item.key] ? 'bg-gray-900' : 'bg-gray-300'
                                            }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${privacy[item.key] ? 'translate-x-7' : 'translate-x-1'
                                            }`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const DataSettings = () => {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data & Storage</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Storage Usage */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">Storage Usage</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <span>Used: 1.2 GB</span>
                                    <span>Total: 5 GB</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                                </div>
                            </div>
                            <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium">
                                Clear Cache
                            </button>
                        </div>
                    </div>

                    {/* Data Export */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">Data Export</h3>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">Download your personal data and learning history.</p>
                            <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium">
                                <FaDownload className="text-sm" />
                                Export All Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const HelpSettings = () => {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Support Options */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">Get Help</h3>
                        <div className="space-y-3">
                            {[
                                { label: 'Help Center', description: 'Browse our knowledge base' },
                                { label: 'Contact Support', description: 'Get help from our team' },
                                { label: 'Report a Problem', description: 'Let us know about issues' },
                                { label: 'Feature Request', description: 'Suggest new features' }
                            ].map((item, index) => (
                                <button key={index} className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                                    <div className="font-medium text-gray-900">{item.label}</div>
                                    <div className="text-sm text-gray-600">{item.description}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* App Info */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">About</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm text-gray-600">App Version</div>
                                <div className="font-medium text-gray-900">2.1.0 (Build 217)</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Last Updated</div>
                                <div className="font-medium text-gray-900">December 5, 2024</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Terms & Privacy</div>
                                <div className="space-y-2 mt-2">
                                    <button className="block text-blue-600 hover:text-blue-700 text-sm">Terms of Service</button>
                                    <button className="block text-blue-600 hover:text-blue-700 text-sm">Privacy Policy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'profile': return <ProfileSettings />;
            case 'notifications': return <NotificationSettings />;
            case 'appearance': return <AppearanceSettings />;
            case 'privacy': return <PrivacySettings />;
            case 'data': return <DataSettings />;
            case 'help': return <HelpSettings />;
            default: return <ProfileSettings />;
        }
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
                            Settings
                        </h1>

                        <div className="w-10"></div>
                    </div>

                    {/* Bottom Row - Description */}
                    <div className="text-left">
                        <p className="text-gray-600 text-sm sm:text-base">Manage your account preferences and application settings</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Settings Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24">
                                <nav className="space-y-2">
                                    {settingsSections.map((section) => {
                                        const Icon = section.icon;
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => setActiveSection(section.id)}
                                                className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${activeSection === section.id
                                                    ? 'bg-gray-900 text-white shadow-lg'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md'
                                                    }`}
                                            >
                                                <Icon className="text-lg" />
                                                <span className="font-medium">{section.name}</span>
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>

                        {/* Settings Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                                {renderActiveSection()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;