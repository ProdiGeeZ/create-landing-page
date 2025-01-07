# Create Landing Page

A powerful CLI tool to generate high-converting landing pages with Next.js, TypeScript, and your choice of UI framework. Built for developers who want to quickly scaffold professional landing pages with best practises baked in.

## 🚀 Quick Start

```bash
npx create-landing-page
```

Follow the interactive prompts:
1. Enter your project name
2. Choose your UI framework

## ✨ Features

### UI Framework Support
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible components
- [Chakra UI](https://chakra-ui.com/) - Modular and accessible component library
- [Mantine](https://mantine.dev/) - Full-featured component library

### Pre-built Sections
- ⭐️ Hero Section
- 💡 Features Grid
- 🤝 Social Proof
- 📊 Solution Overview
- ✨ Benefits
- 🔄 How It Works
- 🔌 Integrations
- 👥 Testimonials
- ❓ FAQ
- 🎯 Call-to-Action (CTA)

### Technical Features
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- SEO optimised
- Performance optimised

## 📁 Project Structure

```
your-landing-page/
├── src/
│   ├── app/                # Next.js app directory
│   ├── components/         # React components
│   │   └── sections/      # Landing page sections
│   ├── config/            # Site configuration
│   └── types/             # TypeScript types
├── public/                # Static assets
└── package.json          # Project dependencies
```

## 🎨 Customisation

### Content
Edit `src/config/site.ts` to update your landing page content:

```typescript
export const siteConfig = {
  name: "Your Product",
  description: "Your landing page description",
  nav: [
    {
      label: "Features",
      href: "#features",
    },
  ],
  features: [
    {
      title: "Feature 1",
      description: "Description of feature 1",
    },
  ],
};
```

### Styling
- Base styles via Tailwind CSS
- Framework-specific theming available
- Customise `tailwind.config.ts` for design system changes

### Components
Each section is a standalone component in `src/components/sections/`. Customise by:
1. Editing components directly
2. Updating props via `site.ts`
3. Adding new sections as needed

## 🛠 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📚 Best Practises

### Performance
- Optimised images via Next.js Image component
- Efficient component splitting
- Lazy loading for below-the-fold content

### SEO
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and OpenGraph support

### Accessibility
- ARIA labels where needed
- Keyboard navigation support
- Colour contrast compliance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT © Mohammed Saabir Ahmed

## 💬 Support

For support, issues, or feature requests, please file an issue in the GitHub repository.

## Badges

[![npm version](https://badge.fury.io/js/create-landing-page.svg)](https://badge.fury.io/js/create-landing-page)
[![Test](https://github.com/yourusername/create-landing-page/actions/workflows/test.yml/badge.svg)](https://github.com/yourusername/create-landing-page/actions/workflows/test.yml)