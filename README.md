# Personal Website

A minimal, modern personal website built with Astro and Tailwind CSS.

## Features

- 🏠 **Home Page**: Photo and introduction
- 📁 **Projects**: Easy-to-manage project showcase
- 🛤️ **Experience**: Professional timeline and roadmap
- 📄 **Resume**: Downloadable resume with markdown content
- 📱 **Responsive**: Mobile-first design
- ⚡ **Fast**: Static site generation with Astro
- 🎨 **Minimal**: Clean, professional design

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

### Personal Information

1. Update your name and links in:
   - `src/components/Header.astro`
   - `src/components/Footer.astro`
   - `src/pages/index.astro`

2. Add your profile photo to `src/assets/images/profile.jpg`

### Content Management

#### Adding Projects

1. Create a new markdown file in `src/content/projects/`
2. Add frontmatter with project details:
   ```markdown
   ---
   title: "Project Name"
   description: "Brief description"
   tags: ["React", "TypeScript"]
   link: "https://project-url.com"
   github: "https://github.com/username/repo"
   featured: true
   date: 2024-01-15
   ---
   ```

#### Adding Experience

1. Create markdown files in `src/content/experience/`
2. Include job details in frontmatter:
   ```markdown
   ---
   company: "Company Name"
   position: "Job Title"
   startDate: 2023-01-01
   endDate: 2024-01-01
   location: "City, State"
   description: "Brief role description"
   ---
   ```

#### Updating Resume

Edit `src/content/resume.md` with your resume content in markdown format.

## Deployment

Deploy to platforms like:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: Markdown with frontmatter
- **Typography**: Inter font from Google Fonts

## Project Structure

```
src/
├── components/          # Reusable components
├── layouts/            # Page layouts
├── pages/              # Routes and pages
├── content/            # Markdown content
│   ├── projects/       # Project files
│   └── experience/     # Experience files
├── styles/             # Global styles
└── assets/             # Images and static files
```

## License

MIT License - feel free to use this template for your own personal website!