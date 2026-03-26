import React from 'react';
import { UserProfile } from '../types';

// Define the props for the adaptive lesson content renderer component
interface LessonContentProps {
    profile: UserProfile;
}

const LessonContent: React.FC<LessonContentProps> = ({ profile }) => {
    switch (profile.type) {
        case 'student':
            return <div>Welcome, student! Here is your lesson content.</div>;
        case 'teacher':
            return <div>Welcome, teacher! Here are your lesson plans.</div>;
        case 'admin':
            return <div>Welcome, admin! Here are the statistics.</div>;
        default:
            return <div>Welcome! Please select a profile.</div>;
    }
};

export default LessonContent;
