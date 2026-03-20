# UniPortal 🎓✨

> Streamlining campus support with intelligent issue tracking and fast resolutions.

UniPortal is a modern, responsive web application designed for universities to manage student and faculty requests efficiently. With a stunning user interface featuring 3D visuals and dynamic animations, UniPortal makes navigating campus services a breeze.

## ✨ Features

- 🔐 **Role-based Access**: Dedicated portals for Students and Admins to ensure tailored experiences.
- 🎨 **Beautiful UI**: Built with Framer Motion and Three.js for liquid-smooth animations and 3D background elements.
- ⚡ **Fast & Responsive**: Powered by Next.js 16 and React 19, delivering exceptional performance.
- 🛡️ **Secure Authentication**: Protected routes and state management.
- 📱 **Mobile First**: Fully responsive design that looks great on any screen using Tailwind CSS v4.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hardik0385/Uniportal.git
   cd Uniportal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📜 License

This project is licensed under the MIT License.

## 🧪 Test Credentials

To test the application, you can use the following mock credentials for different roles (Powered by Supabase Authentication):

- **Admin**:
  - Email: `admin@university.edu.in`
  - Password: `password123`
- **Teacher/Staff**:
  - Email: `teacher@university.edu.in`
  - Password: `password123`
- **Student**:
  - Email: `student@university.edu.in`
  - Password: `password123`

## 🆕 Recent Changes
- **Backend Authentication Integration**: Replaced mock login toggles with real email/password validation against a Supabase database. Protected routes and role-based access control are now enforced effectively based on the fetched user roles.
