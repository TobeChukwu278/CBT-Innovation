import React, { useState } from 'react';
import { FaUser, FaBook, FaBullseye, FaRocket, FaCheck, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        learningGoal: '',
        proficiency: '',
        studyTime: ''
    });

    const steps = [
        {
            title: "Welcome to TestPrep",
            subtitle: "Let's personalize your learning journey",
            description: "We'll help you create a study plan tailored to your goals and schedule.",
            illustration: <ProfileIllustration />,
            fields: [
                {
                    name: 'fullName',
                    label: 'Full Name',
                    type: 'text',
                    placeholder: 'Enter your full name',
                    icon: FaUser,
                    required: true
                }
            ]
        },
        {
            title: "Learning Goals",
            subtitle: "What are you preparing for?",
            description: "Tell us about your exam or learning objectives to customize your experience.",
            illustration: <GoalsIllustration />,
            fields: [
                {
                    name: 'learningGoal',
                    label: 'Primary Goal',
                    type: 'select',
                    options: [
                        'University Entrance Exams',
                        'Professional Certifications',
                        'Skill Development',
                        'Competitive Exams',
                        'Academic Improvement'
                    ],
                    placeholder: 'Select your primary goal',
                    icon: FaBullseye,
                    required: true
                }
            ]
        },
        {
            title: "Proficiency Level",
            subtitle: "Where are you starting from?",
            description: "This helps us create the right difficulty level for your practice tests.",
            illustration: <ProficiencyIllustration />,
            fields: [
                {
                    name: 'proficiency',
                    label: 'Current Level',
                    type: 'select',
                    options: [
                        'Beginner - Just starting out',
                        'Intermediate - Some knowledge',
                        'Advanced - Strong foundation',
                        'Expert - Mastery level'
                    ],
                    placeholder: 'Select your current level',
                    icon: FaBook,
                    required: true
                }
            ]
        },
        {
            title: "Study Preferences",
            subtitle: "How do you learn best?",
            description: "Set up your study schedule and preferences for optimal learning.",
            illustration: <ScheduleIllustration />,
            fields: [
                {
                    name: 'studyTime',
                    label: 'Preferred Study Time',
                    type: 'select',
                    options: [
                        'Morning (6AM - 12PM)',
                        'Afternoon (12PM - 6PM)',
                        'Evening (6PM - 12AM)',
                        'Flexible - Anytime'
                    ],
                    placeholder: 'Select preferred study time',
                    icon: FaRocket,
                    required: true
                }
            ]
        }
    ];

    const handleInputChange = (fieldName, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Handle onboarding completion
            console.log('Onboarding completed:', formData);
            alert('Onboarding completed! Welcome to TestPrep.');
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const isStepValid = () => {
        const currentFields = steps[currentStep].fields;
        return currentFields.every(field => {
            if (field.required) {
                return formData[field.name] && formData[field.name].trim() !== '';
            }
            return true;
        });
    };

    const currentStepData = steps[currentStep];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Illustration Section */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {currentStepData.illustration}

                            {/* Progress Dots for Mobile */}
                            <div className="flex justify-center gap-2 mt-8 lg:hidden">
                                {steps.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStep
                                            ? 'bg-gray-900 w-6'
                                            : index < currentStep
                                                ? 'bg-gray-900'
                                                : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
                        {/* Progress Header */}
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">TP</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Step {currentStep + 1} of {steps.length}</span>
                                </div>

                                {/* Desktop Stepper */}
                                <div className="hidden lg:flex items-center gap-3">
                                    {steps.map((_, index) => (
                                        <React.Fragment key={index}>
                                            <div className="flex items-center">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${index < currentStep
                                                    ? 'bg-gray-900 border-gray-900 text-white'
                                                    : index === currentStep
                                                        ? 'border-gray-900 bg-white text-gray-900'
                                                        : 'border-gray-300 bg-white text-gray-400'
                                                    }`}>
                                                    {index < currentStep ? (
                                                        <FaCheck className="text-xs" />
                                                    ) : (
                                                        <span className="text-sm font-medium">{index + 1}</span>
                                                    )}
                                                </div>
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className={`w-12 h-0.5 transition-all duration-300 ${index < currentStep ? 'bg-gray-900' : 'bg-gray-300'
                                                    }`} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                        {currentStepData.title}
                                    </h1>
                                    <p className="text-lg text-gray-600 mb-2">
                                        {currentStepData.subtitle}
                                    </p>
                                    <p className="text-gray-500">
                                        {currentStepData.description}
                                    </p>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-6">
                                    {currentStepData.fields.map((field, index) => (
                                        <div key={index} className="space-y-3">
                                            <label className="text-sm font-medium text-gray-700">
                                                {field.label}
                                                {field.required && <span className="text-red-500 ml-1">*</span>}
                                            </label>

                                            <div className="relative">
                                                <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />

                                                {field.type === 'select' ? (
                                                    <select
                                                        value={formData[field.name] || ''}
                                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none appearance-none bg-white"
                                                        required={field.required}
                                                    >
                                                        <option value="">{field.placeholder}</option>
                                                        {field.options.map((option, optIndex) => (
                                                            <option key={optIndex} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        value={formData[field.name] || ''}
                                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                        placeholder={field.placeholder}
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                                                        required={field.required}
                                                    />
                                                )}

                                                {/* Custom dropdown arrow */}
                                                {field.type === 'select' && (
                                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                            <button
                                onClick={handlePrevious}
                                disabled={currentStep === 0}
                                className={`flex items-center gap-3 py-3 px-6 rounded-xl border-2 transition-all duration-200 ${currentStep === 0
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 active:scale-95'
                                    }`}
                            >
                                <FaArrowLeft className="text-sm" />
                                <span className="font-medium">Previous</span>
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className={`flex items-center gap-3 py-3 px-8 rounded-xl font-medium transition-all duration-200 ${isStepValid()
                                    ? 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95'
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                <span>
                                    {currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}
                                </span>
                                <FaArrowRight className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Illustration Components
const ProfileIllustration = () => (
    <div className="relative">
        <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center">
            <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <FaUser className="text-3xl text-gray-700" />
                </div>
                <div className="w-32 h-4 bg-white rounded-full mx-auto mb-2 shadow-sm"></div>
                <div className="w-40 h-3 bg-white rounded-full mx-auto mb-4 shadow-sm opacity-80"></div>
                <div className="flex justify-center gap-2">
                    <div className="w-16 h-2 bg-white rounded-full shadow-sm opacity-60"></div>
                    <div className="w-16 h-2 bg-white rounded-full shadow-sm opacity-60"></div>
                </div>
            </div>
        </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
    </div>
);

const GoalsIllustration = () => (
    <div className="relative">
        <div className="w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl flex items-center justify-center">
            <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <FaBullseye className="text-2xl text-gray-700" />
                </div>
                <div className="space-y-3">
                    <div className="w-48 h-3 bg-white rounded-full mx-auto shadow-sm"></div>
                    <div className="w-36 h-3 bg-white rounded-full mx-auto shadow-sm opacity-80"></div>
                    <div className="flex justify-center gap-3 mt-4">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm opacity-60"></div>
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm opacity-80"></div>
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute -top-6 right-8 w-12 h-12 bg-green-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-8 -left-6 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
    </div>
);

const ProficiencyIllustration = () => (
    <div className="relative">
        <div className="w-full h-96 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl flex items-center justify-center">
            <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <FaBook className="text-2xl text-gray-700" />
                </div>
                <div className="space-y-2">
                    <div className="w-44 h-4 bg-white rounded-full mx-auto shadow-sm"></div>
                    <div className="w-36 h-3 bg-white rounded-full mx-auto shadow-sm opacity-70"></div>
                    <div className="flex justify-center gap-1 mt-6">
                        {[1, 2, 3, 4].map(level => (
                            <div key={level} className="w-8 h-2 bg-white rounded-full shadow-sm opacity-60"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute top-12 -left-4 w-10 h-10 bg-amber-200 rounded-full opacity-40"></div>
        <div className="absolute -bottom-4 right-12 w-14 h-14 bg-orange-200 rounded-full opacity-30"></div>
    </div>
);

const ScheduleIllustration = () => (
    <div className="relative">
        <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl flex items-center justify-center">
            <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                    <FaRocket className="text-2xl text-gray-700" />
                </div>
                <div className="space-y-3">
                    <div className="w-40 h-4 bg-white rounded-full mx-auto shadow-sm"></div>
                    <div className="w-32 h-3 bg-white rounded-full mx-auto shadow-sm opacity-80"></div>
                    <div className="flex justify-center gap-4 mt-6">
                        <div className="w-3 h-3 bg-white rounded-full shadow-sm opacity-40"></div>
                        <div className="w-3 h-3 bg-white rounded-full shadow-sm opacity-60"></div>
                        <div className="w-3 h-3 bg-white rounded-full shadow-sm opacity-80"></div>
                        <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute -top-4 left-12 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-8 -right-4 w-16 h-16 bg-pink-200 rounded-full opacity-30"></div>
    </div>
);

export default Stepper;