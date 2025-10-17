# Pops & Bags - Car Parts Online Store

A modern React.js car parts e-commerce website built with Tailwind CSS, featuring a comprehensive catalog of JDM and performance parts.

## 🚗 Live Demo

[View Live Site](https://your-vercel-deployment-url.vercel.app)

## ✨ Features

- **Modern Design**: Clean and responsive design with Tailwind CSS
- **Comprehensive Catalog**: 73+ car parts including ROTA wheels, body kits, and performance parts
- **Smart Filtering**: Toggle between brand-based and category-based filtering
- **Shopping Cart**: Full cart functionality with promo codes and quantity management
- **Contact Form**: Working PHP contact form with email integration
- **Mobile Responsive**: Optimized for all device sizes
- **Product Details**: Detailed specifications and descriptions for each product

## 🛠 Tech Stack

- **Frontend**: React.js 18, Tailwind CSS 3, React Router DOM 6
- **Backend**: PHP for email handling and API endpoints
- **State Management**: React Context API
- **Deployment**: Vercel with PHP runtime support
- **Version Control**: Git & GitHub

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vperalta-git/popsnbags.git
cd popsnbags
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Landing.js      # Homepage component
│   ├── Products.js     # Product catalog with filtering
│   ├── ProductDetail.js # Individual product pages
│   ├── Contact.js      # Contact form
│   ├── About.js        # About page
│   ├── Navigation.js   # Navigation header
│   ├── ShoppingCart.js # Shopping cart component
│   └── FlashSale.js    # Flash sale banner
├── context/            # Context providers
│   └── CartContext.js  # Global cart state management
├── data/               # Product data
│   └── products.js     # Complete product catalog
└── App.js             # Main app component

api/
└── products.php       # Product API endpoint

public/
└── send-email.php     # Email handling endpoint
```

## 🛒 Available Scripts

### Development
```bash
npm start          # Run development server
npm test           # Run tests
npm run build      # Build for production
```

### Deployment
The app is configured for deployment on Vercel with automatic builds from GitHub.

## 💰 Promo Codes

- **POPS40**: 40% off all items
- **BAGS30**: 30% off all items
- **NEWBIE20**: 20% off for new customers
- **balaqBAGS40**: 40% off special promotion

## 📧 Contact & Email Configuration

The contact form sends emails to: `vionneulrichp@gmail.com`

Email functionality is handled by `/public/send-email.php` with proper CORS configuration for deployment.

## 🌐 Deployment

This project is configured for deployment on Vercel:

1. **Push to GitHub**: The repository is ready for GitHub
2. **Connect to Vercel**: Link your GitHub repository to Vercel
3. **Automatic Deployment**: Vercel will automatically build and deploy on push

### Vercel Configuration
- React build output: `build/` directory
- PHP runtime support for email functionality
- Proper routing for SPA (Single Page Application)

## 🛠 Key Features

### Product Catalog
- 73+ products across multiple categories
- ROTA wheels collection
- Body kits and performance parts
- Detailed specifications for each product

### Smart Filtering System
- Toggle between "Brands" and "Categories" view
- Dynamic filter generation from product data
- Real-time search functionality

### Shopping Cart
- Add/remove items with quantity control
- Apply promo codes with validation
- Persistent cart state across navigation
- Cart total calculations with discounts

### Email Integration
- PHP-powered contact form
- Proper email validation and sanitization
- CORS-enabled for production deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Use the contact form on the website
- Email: vionneulrichp@gmail.com
- Create an issue on GitHub

---

**Built with ❤️ for the JDM and car enthusiast community**