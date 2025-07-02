# Stripe-Inspired Homepage

A beautiful, responsive homepage inspired by Stripe's design, built with Next.js 15 and Tailwind CSS.

## 🎨 Features

- **Modern Design**: Clean, professional design inspired by Stripe's homepage
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and modern UI components
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Sections

1. **Navigation Bar**: Clean navigation with Stripe branding
2. **Hero Section**: Bold headline with call-to-action buttons
3. **Dashboard Preview**: Mock financial metrics display
4. **Products Section**: Grid showcasing Stripe's main products
5. **Built for Growth**: Features for startups and businesses
6. **Call-to-Action**: Final conversion section
7. **Footer**: Complete site navigation and company info

## 🛠️ Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to your repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as the source
3. **Automatic Deployment**: The GitHub Actions workflow will automatically build and deploy your site when you push to the main branch

### Manual Build:

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Homepage component
├── components/          # Reusable components (if any)
└── ...
```

## 🎯 Customization

- **Colors**: Update the color scheme in the Tailwind classes
- **Content**: Modify text and images in `src/app/page.tsx`
- **Styling**: Adjust styles in `src/app/globals.css`
- **Layout**: Modify the component structure as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and Tailwind CSS
