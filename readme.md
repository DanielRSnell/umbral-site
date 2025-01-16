# Umbral - Business Automation & AI Solutions Website

A modern, fast website built with Astro showcasing Umbral's automation and AI integration services.

## 🚀 Features

- ⚡️ Built with Astro 3.0
- 📱 Responsive design
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 📝 MDX for blog posts and documentation
- 🔍 SEO optimized
- 📊 Integration showcase pages
- 💻 Career listings
- 🤖 AI and automation focused content

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [MDX](https://mdxjs.com)

## 🏗️ Project Structure

```
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── authors/
│   │   ├── careers/
│   │   ├── integrations/
│   │   ├── pages/
│   │   └── posts/
│   ├── layouts/
│   ├── styles/
│   └── pages/
└── package.json
```

## 📚 Content Structure

- `authors/` - Team member profiles and information
- `careers/` - Job listings and career opportunities
- `integrations/` - Integration documentation and use cases
- `pages/` - Static pages (About, Contact, etc.)
- `posts/` - Blog posts about automation and AI

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/umbral-website.git
cd umbral-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/posts/`
2. Include required frontmatter:

```yaml
---
title: "Your Post Title"
meta_title: ""
date: YYYY-MM-DDT05:00:00Z
image: "/images/articles/your-image.jpg"
author: "Author Name"
author_avatar: "/images/authors/avatar.jpg"
categories: ["Category"]
tags: ["tag1", "tag2"]
draft: false
---
```

### Adding Integration Pages

1. Create a new `.md` file in `src/content/integrations/`
2. Include required frontmatter:

```yaml
---
title: "Integration Name"
description: "Brief description"
icon: "/images/integration/icon.svg"
meta_title: "Integration Title - Umbral"
draft: false
---
```

### Adding Career Positions

1. Create a new `.md` file in `src/content/careers/`
2. Include required frontmatter:

```yaml
---
title: "Position Title"
description: "Brief description"
location: "Location"
type: "fulltime"
draft: false
---
```

## 🎨 Customization

### Styling

- Tailwind CSS configuration in `tailwind.config.js`
- Global styles in `src/styles/global.css`
- Component-specific styles in their respective files

### Components

- Reusable components in `src/components/`
- Layout components in `src/layouts/`

## 📄 Content Types

The site uses TypeScript content collections for:

- Blog posts
- Integration documentation
- Career listings
- Author profiles
- Static pages

## 🔒 TypeScript Support

Content collections are typed using Astro's content collections API:

```typescript
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // ... other fields
  }),
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Umbral Development Team

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Icons from [Font Awesome](https://fontawesome.com)
- Images from [Unsplash](https://unsplash.com)
