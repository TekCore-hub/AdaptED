# AdaptED - AI-Powered Adaptive Learning Platform

An innovative, AI-powered learning platform designed specifically for neurodivergent students (ADHD and Autism). AdaptED adapts its interface and content dynamically based on each student's learning profile, creating a truly personalized educational experience.

## 🎯 Features

### Core Features

✨ **Adaptive User Interface**
- **ADHD Profile**: Bright colors, short content blocks, timers, progress bars, interactive elements
- **Autism Profile**: Minimal UI, structured layouts, step-by-step content, calm colors

🤖 **AI-Powered Personalization**
- Smart recommendations based on learning behavior
- Real-time adaptation to engagement levels
- Focus score tracking and insights

📊 **Comprehensive Dashboards**
- **Student Dashboard**: Track progress, lessons, focus scores, and AI recommendations
- **Parent Insights**: Monitor child's learning, engagement, and behavioral insights
- **Caregiver Dashboard**: Manage multiple students, track performance, identify at-risk learners

🎓 **Interactive Learning**
- Animated lesson transitions
- Real-time distraction detection and adaptation
- Progress tracking and engagement metrics

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Context API
- **No Backend Required**: Fully functional frontend with simulated logic

## 📋 Project Structure

```
adapted/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── profile/page.tsx        # Profile selection
│   ├── analysis/page.tsx       # AI analysis page
│   ├── learn/page.tsx          # Adaptive learning
│   ├── dashboard/page.tsx      # Student dashboard
│   ├── parent/page.tsx         # Parent insights
│   └── caregiver/page.tsx      # Caregiver dashboard
├── components/
│   ├── Navigation.tsx
│   ├── ProgressBar.tsx
│   ├── Timer.tsx
│   └── LessonContent.tsx
├── context/
│   └── LearningContext.tsx     # Global state
├── lib/
│   ├── adaptationEngine.ts     # AI adaptation logic
│   └── mockData.ts             # Mock data
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/TekCore-hub/AdaptED.git
cd adapted
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📖 Usage Guide

### User Flow

1. **Landing Page** → Click "Start Learning"
2. **Profile Selection** → Choose ADHD or Autism profile
3. **AI Analysis** → 3-second personalization analysis
4. **Adaptive Learning** → Complete profile-specific lessons
5. **Dashboard** → View progress and recommendations
6. **Parent/Caregiver Views** → Additional insights and management tools

### Key Features to Try

- **Simulate Distraction**: During lessons, click "📴 Simulate Distraction" to see real-time UI adaptation
- **Test Focus Score**: Use the "Test Decline" button on dashboard to see recommendation changes
- **Switch Profiles**: Navigate back to profile selection to switch learning styles

## 🎨 Design System

### ADHD Profile
- **Colors**: Bright red (#FF6B6B), Teal (#4ECDC4), Yellow (#FFE66D)
- **Layout**: Compact, fast-paced, high animation intensity
- **Content**: Small blocks (5-10 min), interactive elements, timers

### Autism Profile
- **Colors**: Purple (#6C5CE7), Soft Purple (#A29BFE), Light Gray (#DFE6E9)
- **Layout**: Spacious, structured, low animation intensity
- **Content**: Larger blocks (15-25 min), step-by-step, clear guidance

## 🧠 Adaptation Engine

The `adaptationEngine.ts` provides intelligent recommendations based on:
- Student profile (ADHD vs. Autism)
- Current focus score
- Engagement patterns
- Learning history

### Recommendations Include
- **ADHD**: Shorter tasks, visual aids, breaks, gamification
- **Autism**: Structured routines, minimal distractions, clear steps, consistency

## 📊 Mock Data

The platform includes realistic mock data:
- 5 sample students with varying profiles and scores
- 3 lessons per profile type
- Behavioral insights and intervention suggestions
- Parent and caregiver recommendations

## 🔮 Future Enhancements

- Real backend integration with database
- User authentication and profiles
- Advanced analytics and reporting
- Video lessons and multimedia content
- Community features and peer learning
- Mobile native apps
- Real-time collaboration tools

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Team

Built with ❤️ at TekCore-hub for neurodivergent students everywhere.

## 💬 Support

For questions or support:
- Open an issue on GitHub
- Check existing documentation
- Review the code comments for implementation details

---

**AdaptED**: Empowering every learner to succeed. 🌟