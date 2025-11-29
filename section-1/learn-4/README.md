# Tea & Code - React Router Tutorial

A comprehensive React Router DOM v6.4+ tutorial project demonstrating industry-standard patterns and best practices for building scalable Single Page Applications.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── routes.jsx        # Centralized routing configuration
├── pages/
│   ├── Home/             # Home page with hero & features
│   ├── About/            # About page with mission
│   ├── Contact/          # Contact page with form
│   ├── Github/           # GitHub API integration demo
│   └── User/             # Dynamic routing demo
├── components/
│   ├── Header.jsx        # Navigation header
│   └── Footer.jsx        # Site footer
├── layouts/
│   └── MainLayout.jsx    # Layout with persistent header/footer
├── services/
│   └── githubService.js  # API service layer
└── styles/
    └── globals.css       # Global styles & Tailwind config
```

## ✨ Features Demonstrated

### React Router Concepts
- ✅ Client-side routing with `createBrowserRouter`
- ✅ Layout patterns with `Outlet`
- ✅ Dynamic routes with URL parameters (`:id`)
- ✅ Data fetching with `loader` functions
- ✅ Active navigation states with `NavLink`
- ✅ Programmatic navigation with `useLoaderData` and `useParams`

### Architecture Patterns
- ✅ Industry-standard folder structure
- ✅ Separation of concerns (pages, components, layouts, services)
- ✅ Centralized routing configuration
- ✅ Service layer for API calls
- ✅ Scalable component organization

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📚 Learning Objectives

This project teaches you how to:
- Build a complete SPA with React Router DOM
- Implement nested routing with persistent layouts
- Fetch data efficiently with loaders
- Handle dynamic routes and URL parameters
- Structure a React project for scalability
- Integrate external APIs (GitHub)
- Create responsive navigation with active states

## 🎯 Key Routes

- `/` - Home page with feature overview
- `/about` - About page explaining the mission
- `/contact` - Contact form with validation
- `/github` - GitHub profile loaded via API (demonstrates loaders)
- `/user/:id` - Dynamic user page (demonstrates URL parameters)

## 🛠️ Technologies

- React 18.2
- React Router DOM 6.15
- Vite 4.4
- Tailwind CSS 3.3
- Modern ES6+ JavaScript

## 📖 Documentation

Each component is thoroughly documented and demonstrates real-world patterns. Check out the code comments for detailed explanations of:
- Route configuration
- Loader functions
- Dynamic routing
- Component composition
- State management

## 🎨 Design Philosophy

Unlike basic UI clone tutorials, this project focuses on:
- **Complete application architecture** - Not just components
- **Production-ready patterns** - Scalable folder structure
- **Real functionality** - Working forms, API calls, routing
- **Best practices** - Error handling, loading states, accessibility

---

Built with ☕ and code by the Tea & Code community.
