# Coding Exercise

A modern event management application built with React Router 7, featuring internationalization support and a beautiful UI powered by shadcn/ui components.

## ✨ Features

- 📅 Event listing and management
- 🌍 Multi-language support (English, Portuguese, Chinese)
- 🎨 Modern UI with shadcn/ui components
- � Responsive design with Tailwind CSS
- ⚡ Lightning-fast development with Vite
- 🔄 Client-side routing with React Router 7

## 🛠️ Tech Stack

- **Framework**: [React Router 7](https://reactrouter.com/) - Full-stack React framework
- **Build Tool**: [Vite](https://vite.dev/) - Next generation frontend tooling
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Internationalization**: [i18next](https://www.i18next.com/) - Complete i18n solution
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent icons

## 📋 Prerequisites

- Node.js 18+ 
- Yarn 4.12.0

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd coding-exercise

# Install dependencies
yarn install
```

### Development

```bash
# Start the development server
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Build

```bash
# Type-check the code
yarn typecheck

# Build for production
yarn build

# Start the production server
yarn start
```

## 📁 Project Structure

```
coding-exercise/
├── app/                      # Application source code
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   └── LanguageDropdownMenu.tsx
│   ├── layouts/            # Layout components
│   ├── lib/                # Utility functions and libraries
│   │   └── i18next/       # i18n configuration
│   ├── pages/              # Page components
│   ├── routes/             # Route definitions and loaders
│   ├── index.css          # Global styles
│   └── root.tsx           # Root component
├── public/                  # Static assets
│   └── locales/            # Translation files
│       ├── en/            # English
│       ├── cn/            # Chinese
│       └── pt/            # Portuguese
└── ...config files
```

## 🌐 Internationalization

The application supports multiple languages out of the box. Use the language dropdown menu in the UI to switch between:

- 🇺🇸 English (en)
- 🇵🇹 Portuguese (pt)

Translation files are located in `public/locales/{language}/translation.json`.

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components. To add new components:

```bash
npx shadcn@latest add [component-name]
```