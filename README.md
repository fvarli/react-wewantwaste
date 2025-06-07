# We Want Waste - Skip Hire Selection Page

This is a modern, responsive redesign of the We Want Waste skip hire selection page built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project completely redesigns the original skip hire selection interface while maintaining all core functionality. The new design focuses on modern UX principles, clean aesthetics, and mobile-first responsive design.

## 🚀 Features

- **Modern Card-Based Interface**: Clean, intuitive skip selection with visual cards
- **Responsive Design**: Optimized for both mobile and desktop experiences
- **Real-time Data**: Fetches live skip data from the We Want Waste API
- **Interactive Progress Indicator**: Multi-step process visualization
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Price Transparency**: Clear pricing with VAT breakdown
- **Visual Feedback**: Selected states and loading indicators

## 🛠 Technical Stack

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **TanStack Query** for efficient data fetching and caching
- **Lucide React** for modern icons

## 📱 Design Approach

### Visual Design
- **Clean, Modern Aesthetic**: Minimalist design with plenty of white space
- **Blue Accent Color**: Professional blue (#2563eb) for primary actions
- **Subtle Gradients**: Light gradients for depth without distraction
- **Card-Based Layout**: Each skip presented in an individual card for clarity

### User Experience
- **Mobile-First**: Designed primarily for mobile, enhanced for desktop
- **Progressive Enhancement**: Features work across all device sizes
- **Visual Hierarchy**: Clear information architecture with logical flow
- **Immediate Feedback**: Instant visual feedback for user interactions

### Responsive Strategy
- **Grid Layout**: 1 column on mobile, 2 on tablet, 3 on desktop
- **Flexible Typography**: Responsive text scaling
- **Touch-Friendly**: Large tap targets for mobile interaction
- **Fixed Navigation**: Sticky bottom bar for quick access to continue

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/fvarli/react-wewantwaste.git

# Navigate to project directory
cd react-wewantwaste

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📊 API Integration

The application fetches real-time skip data from:
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

**Data Structure:**
- Skip size (4-40 yards)
- Hire period (14 days)
- Pricing (before VAT + VAT rate)
- Road placement permissions
- Heavy waste allowance

## 🎨 Component Architecture

```
src/
├── components/
│   ├── ProgressIndicator.tsx    # Multi-step progress visualization
│   ├── SkipGrid.tsx            # Grid layout for skip cards
│   ├── SkipCard.tsx            # Individual skip selection card
│   ├── LoadingSpinner.tsx      # Loading state component
│   └── ErrorMessage.tsx        # Error handling component
├── pages/
│   └── Index.tsx               # Main page component
└── hooks/
    └── use-toast.ts            # Toast notifications
```
