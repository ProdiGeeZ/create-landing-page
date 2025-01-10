# Next.js Landing Page Template

A modern, customisable landing page template built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 🎯 TypeScript for type safety
- 🎨 Multiple theme options
- 📱 Fully responsive
- 🔍 SEO optimised
- ♿️ Accessible components

## Quick Start

1. Create a new project using this template:
```bash
npx create-landing-page-cli my-landing-page
```

2. Navigate to the project:
```bash
cd my-landing-page
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── config/          # Configuration files
│   ├── lib/             # Utility functions
│   ├── providers/       # React context providers
│   └── types/           # TypeScript types
├── public/              # Static assets
└── templates/           # Template files
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Customization

### Themes
Edit `src/config/themes.ts` to customize theme colors.

### Available Themes
- forest
- ocean
- crimson
- sunset
- wine
- lavender
- tropical
- sage
- emerald
- carnival
- coastal
- rose
- sand
- bubblegum
- midnight
- autumn

### Components
All components are built with Tailwind CSS and can be customized in the respective component files.

### Styles
Global styles are in `src/app/globals.css`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 