# 🛒 MERN E-commerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" />
  <img src="https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Cloudinary" />
</p>

<p align="center">
  A full-featured e-commerce platform built with the MERN stack, featuring secure authentication, payment integration, and admin panel for complete store management.
</p>

<p align="center">
  <a href="#-demo">🚀 Live Demo</a> - 
  <a href="#-features">✨ Features</a> - 
  <a href="#-installation">📦 Installation</a> - 
  <a href="#-usage">🎯 Usage</a> - 
  <a href="#-contributing">🤝 Contributing</a>
</p>

## 🚀 Demo

**Live Demo:** [Coming Soon]


## ✨ Features

### 🛍️ **Customer Features**
- **User Authentication** - JWT-based secure login/register system
- **Product Browsing** - Browse products with advanced filtering and search
- **Shopping Cart** - Add/remove products with quantity management
- **Secure Checkout** - Integrated PayPal payment gateway
- **Order Tracking** - Real-time order status updates
- **User Profile** - Manage personal information and order history
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### 👨‍💼 **Admin Features**
- **Product Management** - CRUD operations for products
- **Order Management** - View and update order statuses
- **User Management** - Manage customer accounts
- **Inventory Control** - Track stock levels and manage inventory
- **Dashboard Analytics** - Sales reports and key metrics
- **Image Upload** - Cloudinary integration for product images

### 🔧 **Technical Features**
- **RESTful API** - Well-structured API endpoints
- **Database Security** - MongoDB with Mongoose ODM
- **File Upload** - Multer with Cloudinary storage
- **Authentication** - bcryptjs password hashing
- **CORS** - Cross-origin resource sharing enabled
- **Environment Configuration** - dotenv for secure configuration

## 🛠️ Tech Stack

### **Frontend**
- **React.js** - Component-based UI library
- **React Router** - Client-side routing
- **Context API** - State management
- **CSS3** - Modern styling with Flexbox/Grid
- **Responsive Design** - Mobile-first approach

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### **Authentication & Security**
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - HTTP cookie parsing
- **CORS** - Cross-origin resource sharing

### **Payment & Storage**
- **PayPal REST SDK** - Payment processing
- **Cloudinary** - Image storage and optimization
- **Multer** - File upload middleware

### **Development Tools**
- **nodemon** - Development server auto-restart
- **dotenv** - Environment variable management

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.x or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### 🔧 Setup Instructions

1. **Clone the repository**
git clone https://github.com/ayushkumar1991/Celebal_Assign7-8-Ecommerce-Site-.git
cd Celebal_Assign7-8-Ecommerce-S


2. **Install dependencies**
   **Backend dependencies:**
cd server
npm install


3. **Frontend dependencies:**
cd ../client
npm install


3. **Environment Configuration**

Create `.env` file in the `server` directory:

Database
MONGO_URI=mongodb://localhost:27017/mern-ecommerce

JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d

Cookies
COOKIE_EXPIRE=7

Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PayPal
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox # or 'live' for production

Server
PORT=5000
NODE_ENV=development


4. **Start the application**

**Start backend server (Terminal 1):**
cd server
npm run dev


**Start frontend server (Terminal 2):**
cd client
npm start


5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎯 Usage

### **For Customers:**
1. **Browse Products** - Visit the home page to see featured products
2. **Search & Filter** - Use search bar and category filters
3. **Add to Cart** - Click "Add to Cart" on product pages
4. **Checkout** - Complete purchase using PayPal
5. **Track Orders** - View order status in your profile

### **For Administrators:**
1. **Access Admin Panel** - Login with admin credentials
2. **Manage Products** - Add, edit, or delete products
3. **Process Orders** - Update order statuses
4. **View Analytics** - Check sales reports and metrics

### **📁 Project Structure:**
Celebal_Assign7-8-Ecommerce-Site-/
├── client/                    # React frontend
│   ├── public/                # Public assets (index.html, favicon, etc.)
│   └── src/                   # Application source code
│       ├── assets/            # Images, fonts, icons
│       ├── components/        # Reusable UI components
│       ├── context/           # React context providers
│       ├── pages/             # Route/page components
│       ├── styles/            # Global and module CSS files
│       └── utils/             # Helper functions and constants
├── server/                    # Node.js backend
│   ├── config/                # Configuration (DB, PayPal, Cloudinary)
│   ├── controllers/           # Route handler logic
│   ├── helpers/               # Utility functions (e.g., error handling)
│   ├── middleware/            # Express middleware
│   ├── models/                # Mongoose schemas and models
│   ├── routes/                # API route definitions
│   ├── uploads/               # Temporary file uploads (before Cloudinary)
│   └── server.js              # Server entry point
├── .gitignore                 # Files and folders to ignore in Git
└── README.md                  # Project overview and documentation



## 🚀 API Endpoints

### **Authentication**
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout
- `GET /api/users/profile` - Get user profile

### **Products**
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### **Orders**
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order payment

### **PayPal**
- `POST /api/paypal/create-payment` - Create PayPal payment
- `POST /api/paypal/execute-payment` - Execute PayPal payment

## 🧪 Testing

Run backend tests
cd server
npm test

Run frontend tests
cd client
npm test


## 🚀 Deployment

### **Backend Deployment (Railway/Render)**
1. Create account on Railway or Render
2. Connect your GitHub repository
3. Set environment variables in dashboard
4. Deploy from `server` directory

### **Frontend Deployment (Vercel/Netlify)**
1. Build the project: `npm run build`
2. Deploy the `build` folder
3. Set `REACT_APP_API_URL` environment variable

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### **Contribution Guidelines**
- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure all tests pass

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) for the amazing frontend framework
- [Express.js](https://expressjs.com/) for the robust backend framework
- [MongoDB](https://www.mongodb.com/) for the flexible database solution
- [PayPal](https://developer.paypal.com/) for payment processing
- [Cloudinary](https://cloudinary.com/) for image management

## 📞 Contact & Support

<p align="center">
  <strong>👨‍💻 Developed by Ayush Kumar</strong>
</p>

<p align="center">
  <a href="https://github.com/ayushkumar1991">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:ayushkumr1991@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://www.linkedin.com/in/ayush-kumar-607444242/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

<p align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</p>

<p align="center">
  Made with ❤️ and ☕ by <a href="https://github.com/ayushkumar1991">Ayush Kumar</a>
</p>


