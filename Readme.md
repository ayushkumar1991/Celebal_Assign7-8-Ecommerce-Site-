🛒 MERN E-Commerce Site:-
An end-to-end e-commerce platform built using the MERN stack. This project supports secure authentication, product management, image uploads via Cloudinary, PayPal integration, and a mobile-friendly React storefront.

✨ Features
Domain	Highlights
User Auth	JWT-based authentication, hashed passwords with bcryptjs, cookies via cookie-parser
Admin Panel	Admin can manage products, users, and orders
Product Catalog	Pagination, category filtering, search, Cloudinary-hosted images
Shopping Cart	Add/remove items, update quantity, persistent in localStorage
Payments	PayPal integration (sandbox/live switch), email confirmation
Responsive UI	Built with React and CSS Modules, mobile-optimized
API	RESTful with Node.js & Express, protected endpoints, validation
Database	MongoDB (Atlas), schema validation, indexing via Mongoose
Developer Tools	nodemon, dotenv, ESLint, Prettier, concurrently

🏗️ Tech Stack
Layer	Tools / Packages	Notes
Frontend	React 18, Context API	Hooks, Stateless components, Client routing
Styling	CSS Modules / SCSS	Clean styling, no runtime cost
Backend	Express 4	RESTful APIs, middleware
Auth	bcryptjs, JWT, cookie-parser, cors	Secure auth flow
Database	MongoDB Atlas, Mongoose 8	ODM, schema enforcement
Media Storage	Cloudinary v2	Secure uploads, optimized images
Payments	PayPal REST SDK	Sandbox & live support
Utilities	nodemon, concurrently, dotenv	Streamlined development

📂 Project Structure
pgsql
Copy
Edit
Celebal_Assign7-8-Ecommerce-Site-
├── client/                # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── utils/
├── server/                # Express backend
│   ├── config/            # DB & PayPal config
│   ├── controllers/
│   ├── helpers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/           # Local uploads (temp before Cloudinary)
│   ├── .env.example
│   └── server.js
└── README.md
🚀 Local Setup
1. Prerequisites
Node.js ≥ 18

MongoDB Atlas or local MongoDB instance

Cloudinary account (free tier is fine)

PayPal developer account

2. Clone & Install
bash
Copy
Edit
git clone https://github.com/ayushkumar1991/Celebal_Assign7-8-Ecommerce-Site-.git
cd Celebal_Assign7-8-Ecommerce-Site-

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
3. Environment Variables
Copy .env.example to .env in both server/ and client/.

server/.env

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/ecom
JWT_SECRET=supersecret
COOKIE_EXPIRE=7
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret
client/.env

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
4. Run the App (Development)
bash
Copy
Edit
# Terminal 1 – Backend
cd server
npm run dev

# Terminal 2 – Frontend
cd client
npm start
Open your browser at: http://localhost:3000

📮 API Overview
Method	Endpoint	Access	Description
GET	/api/products	Public	List products with pagination
POST	/api/users/login	Public	Login user, return JWT cookie
GET	/api/orders/:id	Private	Get order details
POST	/api/paypal/create	Private	Initiate PayPal payment

🧪 Full API documentation is included in /server/docs/ (Postman collection).

🖼️ Screenshots
Home Page	Cart Page	Admin Dashboard
Add screenshots here	Add screenshots here	Add screenshots here

🛠️ Common Commands
Server (inside /server)

bash
Copy
Edit
npm run dev         # Start dev server (nodemon)
npm start           # Start prod server
npm run data:import # Seed sample data
npm run data:destroy# Clear all DB data
Client (inside /client)

bash
Copy
Edit
npm start           # Start React dev server
npm run build       # Build for production
🌍 Deployment Guide
Backend – Render
Set environment variables in Dashboard → Environment

Deploy from /server directory

Frontend – Vercel or Netlify
Run npm run build

Upload build/ folder

Set REACT_APP_API_URL to your backend URL

Custom Domain
Point your domain's A-record or CNAME to Vercel / Netlify / Render as needed.

🤝 Contributing
Fork this repo

Create your feature branch:

bash
Copy
Edit
git checkout -b feature/your-feature
Commit changes:

bash
Copy
Edit
git commit -m "Add your feature"
Push and create a Pull Request

PRs should pass ESLint and unit tests (coming soon).

📜 License
This project is licensed under the MIT License – see the LICENSE file for details.

📫 Contact
Ayush Kumar

GitHub: @ayushkumar1991

Email: ayushkumr1991@gmail.com