# Acker Group - Corporate Website

A modern, high-performance corporate website built with Next.js 14, TypeScript, and Tailwind CSS. This project features a monorepo structure with shared UI components and configuration packages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

```bash
# Install all dependencies (including workspace packages)
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

### Build

```bash
# Build the UI package and Next.js application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
acker-group/
├── src/                      # Main Next.js application
│   ├── app/                  # App router pages
│   ├── components/           # Shared components
│   ├── config/              # App configuration
│   └── lib/                 # Utility functions
├── packages/
│   ├── ui/                  # Shared UI component library
│   └── config/              # Shared configuration
└── tests/                   # Test files
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build all packages and application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Vitest |
| `npm run type-check` | TypeScript type checking |

## 🌐 Pages

- **Home** (`/`) - Landing page with company overview
- **About** (`/about`) - Company mission, vision, and values
- **Subsidiaries** (`/subsidiaries`) - Portfolio of companies
- **Contact** (`/contact`) - Contact form

## 📄 License

© 2025 Acker Group. All rights reserved.
