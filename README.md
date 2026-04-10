# عدسة (Adasa) - Photography Blog Platform

<div align="center">

![Adasa Logo](https://img.shields.io/badge/عدسة-Photography%20Blog-orange?style=for-the-badge)
[![Angular](https://img.shields.io/badge/Angular-20.3.14-red?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-86%25-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

**[Live Demo](https://david-samir-luis.github.io/Adasa/)** | **[Documentation](#documentation)** | **[Features](#features)**

A modern, fully responsive Arabic-first photography blog built with Angular 20, featuring intelligent search, dynamic filtering, and a beautiful RTL-optimized interface.

</div>

---

## 📸 About

**عدسة (Adasa)** is a sophisticated photography blog platform designed specifically for Arabic-speaking photography enthusiasts and content creators. The platform combines modern web technologies with culturally-aware design principles to deliver an exceptional blogging experience.

### Why Adasa?

- 🌍 **Arabic-First Design**: Complete RTL (Right-to-Left) support with proper Arabic text flow
- ⚡ **High Performance**: Built with Angular's latest standalone components and optimized rendering
- 📱 **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- 🎨 **Beautiful UI/UX**: Clean, minimalist design tailored for visual content presentation
- 🔍 **Smart Search**: Real-time search and category-based filtering for easy content discovery

---

## ✨ Features

### 🔍 Content Discovery
- **Real-time Search**: Instant search functionality across titles and excerpts
- **Category Filtering**: Filter articles by photography categories (إضاءة, بورتريه, مناظر طبيعية, تقنيات, معدات)
- **Dynamic Result Count**: Live display of filtered results
- **Combined Filters**: Search and category filters work together seamlessly

### 📊 Display Options
- **Grid View**: Card-based layout with 3-column responsive grid
- **List View**: Horizontal layout with larger images and detailed previews
- **Toggle Switch**: Easily switch between viewing modes

### 📄 Advanced Pagination
- **Custom Pagination System**: Built from scratch with full control
- **Page Navigation**: Direct page number selection
- **Previous/Next Buttons**: Easy sequential navigation
- **Auto-scroll**: Smooth scrolling to content section on page change
- **Dynamic Page Count**: Pagination adapts to filtered results

### 🎨 UI/UX Excellence
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Interactive Cards**: Engaging card designs with author information
- **Rich Metadata**: Display of reading time, publish date, and categories
- **Author Profiles**: Author avatars, names, and roles on each post
- **Responsive Images**: Optimized image loading with proper sizing

### 🌐 RTL & Localization
- **Complete RTL Support**: Native right-to-left layout and navigation
- **Arabic Typography**: Proper Arabic font rendering and spacing
- **Mirrored Layouts**: Icons, buttons, and components properly mirrored
- **Date Localization**: Arabic date formatting (ar-EG locale)

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices first
- **Breakpoint Management**: Responsive across all screen sizes
- **Touch-Friendly**: Large tap targets and gesture-friendly interface
- **Adaptive Layouts**: Different layouts for different screen sizes

---

## 🛠️ Technologies

### Core Technologies
- **[Angular 20.3.14](https://angular.io/)**: Latest framework with standalone components
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe programming (86% coverage)
- **[Bootstrap 5](https://getbootstrap.com/)**: Responsive grid and UI components
- **[Font Awesome](https://fontawesome.com/)**: Comprehensive icon library

### Development Tools
- **Angular CLI**: Project scaffolding and build tools
- **RxJS**: Reactive programming utilities
- **Angular Signals**: Modern reactive state management
- **Angular Router**: Navigation and routing with hash location strategy

### Architecture Patterns
- **Standalone Components**: Modern Angular architecture without NgModules
- **Component-Based Design**: Modular, reusable components
- **Interface-Driven Development**: Strong TypeScript interfaces
- **Reactive Programming**: Signal-based state management

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Angular CLI** (v20 or higher)

```bash
# Install Angular CLI globally
npm install -g @angular/cli@20
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/David-Samir-Luis/Adasa.git
cd Adasa
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
ng serve
```

4. **Open your browser**
Navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

---

## 📁 Project Structure

```
Adasa/
├── src/
│   ├── app/
│   │   ├── blog/              # Blog page component
│   │   │   ├── blog.ts        # Component logic
│   │   │   ├── blog.html      # Template
│   │   │   └── blog.css       # Styles
│   │   ├── footer/            # Footer component
│   │   ├── navbar/            # Navigation component
│   │   ├── main-page/         # Home page component
│   │   ├── not-found/         # 404 page component
│   │   ├── app.ts             # Root component
│   │   ├── app.routes.ts      # Route configuration
│   │   ├── app.config.ts      # Application configuration
│   │   ├── iposts.ts          # Post interface
│   │   └── icategory-icon.ts  # Category interface
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   └── styles.css             # Global styles
├── public/                    # Static assets
├── angular.json               # Angular configuration
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

---

## 🎯 Key Components

### Blog Component
The main blog page featuring:
- Search functionality
- Category filtering
- Grid/List display toggle
- Custom pagination
- 28 pre-loaded photography articles

### Footer Component
Reusable footer with:
- Site information and branding
- Navigation links
- Category links
- Social media integration
- Newsletter subscription form

### Navbar Component
Navigation component with:
- RTL-optimized layout
- Responsive mobile menu
- Smooth scroll navigation

---

## 🔧 Configuration

### Router Configuration
The app uses hash-based routing for GitHub Pages compatibility:

```typescript
provideRouter(routes, withInMemoryScrolling({
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}))
```

### Build Configuration
Production build optimizations:

```bash
ng build --configuration production --base-href="/Adasa/"
```

---

## 📊 Data Structure

### Post Interface
```typescript
interface Ipost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}
```

### Categories
- **إضاءة** (Lighting) - 3 articles
- **بورتريه** (Portrait) - 3 articles
- **مناظر طبيعية** (Landscape) - 2 articles
- **تقنيات** (Techniques) - 5 articles
- **معدات** (Equipment) - 3 articles

---

## 🎨 Customization

### Styling
Global styles are defined in `styles.css`:
- Custom color scheme (orange/black theme)
- Typography settings
- Utility classes

### Content
Edit blog posts in `src/app/blog/blog.ts`:
- Modify the `posts` array
- Add/remove categories
- Update site information

---

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
```bash
ng build --configuration production --base-href="/Adasa/"
```

2. **Deploy to GitHub Pages**
```bash
npx angular-cli-ghpages --dir=dist/assignment14/browser
```

Or use the built-in GitHub Actions workflow for automatic deployment.

---

## 📈 Performance Optimizations

- ✅ **Lazy Loading**: Components loaded on demand
- ✅ **Change Detection**: Optimized with OnPush strategy
- ✅ **Bundle Optimization**: Tree-shaking and code splitting
- ✅ **Image Optimization**: Responsive images with proper sizing
- ✅ **Scroll Position Restoration**: Maintains scroll position on navigation

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mohamed Khaled**

- GitHub: [Mohamed Khaled Shoukry](https://github.com/Mkhaled-Ahmed)
- LinkedIn: [Mohamed Khaled Shoukry](https://www.linkedin.com/in/mohammed-khaled7)

---

## 🙏 Acknowledgments

Special thanks to my instructor for their exceptional guidance, mentorship, and continuous support throughout this project's development. Their expertise in Angular best practices and software engineering principles has been instrumental in bringing this platform to life.

---

## 🗺️ Roadmap

Future enhancements planned:
- [ ] Backend integration with REST API
- [ ] User authentication and authorization
- [ ] Comment system for articles
- [ ] Admin dashboard for content management
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (English)
- [ ] Progressive Web App (PWA) features
- [ ] Advanced search with filters
- [ ] Related articles suggestions
- [ ] Social sharing integration

---

<div align="center">

**Made with ❤️ and Angular**

⭐ Star this repository if you find it helpful!

</div>
