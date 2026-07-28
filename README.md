# HackX 2026 - Hackathon Registration Website

A stunning, production-ready hackathon registration website built with React + Vite. Features a dark/light theme, glassmorphism design, micro-animations, and a fully functional registration form with validation.

![HackX 2026](https://img.shields.io/badge/HackX-2026-7c3aed?style=for-the-badge&labelColor=0a0a0f)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat-square&logo=vite&logoColor=white)

## ✨ Features

### Core Features
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Animated Background** - Floating gradient orbs with CSS keyframe animations
- **Live Countdown Timer** - Real-time countdown to the event (April 15, 2026)
- **Smooth Scroll Navigation** - Sticky navbar with section links

### Sections
1. **Hero** - Eye-catching hero with animated orbs, countdown, and CTAs
2. **About** - Stats cards and "Why Join" benefits grid
3. **Schedule** - Interactive vertical timeline with Intersection Observer animations
4. **Prizes** - Podium-style prize cards with special category awards
5. **Sponsors** - Tiered sponsor display (Gold, Silver, Bronze)
6. **Registration** - Full form with validation and success toast
7. **Footer** - Quick links, social icons, and contact info

### Micro-Animations
- Scroll-triggered fade/slide animations
- Hover effects on all interactive elements
- Button press feedback
- Loading states with spinner
- Toast notifications

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Library |
| Vite 5 | Build Tool |
| Plain CSS | Styling (no frameworks) |
| Google Fonts | Typography |

### Fonts
- **Space Grotesk** - Headings
- **Inter** - Body text

## 📁 Project Structure

```
dsc
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Schedule.jsx
│   │   ├── Prizes.jsx
│   │   ├── Sponsors.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── CountdownTimer.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── schedule.css
│   │   ├── prizes.css
│   │   ├── sponsors.css
│   │   ├── form.css
│   │   └── footer.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Ritik0712-ai/dsc.git

# Navigate to project directory
cd hackx-2025

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🌐 Live Deployment

**Deployed on Netlify:** [https://hackathonreg.netlify.app](https://hackathonreg.netlify.app)

### Deploy Instructions
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Vite and deploy

## 🎨 Design System

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0f` | Dark mode background |
| Card | `#111118` | Card backgrounds |
| Primary | `#7c3aed` | Purple accent |
| Secondary | `#06b6d4` | Cyan accent |
| Text | `#f1f5f9` | Primary text |

### Typography
- **Headings**: Space Grotesk, 700 weight
- **Body**: Inter, 400-600 weight

## 📝 Form Validation

The registration form includes:
- Required field validation
- Email format validation
- Phone number (10 digits) validation
- Project idea minimum character count (50)
- Real-time character count display
- Inline error messages
- Success toast notification

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for innovators at HackX 2026
