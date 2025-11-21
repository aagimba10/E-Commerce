🛒 E-Commerce Frontend (React + Vite)

A simple e-commerce frontend built using React.js and Vite, featuring product listing, cart management, order handling, and API integration using Axios + JSON Server.
This project demonstrates full CRUD functionality and a responsive UI.

Project Overview

View Products (Read): Fetch and display products from the API.

Add to Cart (Create): Users can add products to the cart with one click.

Place Orders (Create/Update): Move products from Cart → Orders after purchase.

Cancel Orders (Delete): Users can cancel any order from the orders page.

Search & Filter: Search products dynamically.

Full CRUD Implementation: Handles GET, POST, DELETE requests with Axios.

Responsive UI: Designed with React and Bootstrap 5.

Technologies Used

React.js – Component-based frontend

Vite – Fast build & hot module replacement

Axios – API requests (GET, POST, DELETE)

React Router DOM – Navigation between pages

Bootstrap 5 – Responsive styling

JSON Server – Mock backend

Installation & Setup

Open your terminal and run the following commands step by step:

# Clone the repository
git clone https://github.com/NanmaranS/E-Commerce.git

# Navigate to project folder
cd E-Commerce

# Install dependencies
npm install

# Start the frontend
npm run dev

# Start backend (JSON Servers)
# 3000 → profile.json
npx json-server --watch Db/profile.json --port 3000

# 4000 → cart.json
npx json-server --watch Db/cart.json --port 4000

# 5000 → buy.json
npx json-server --watch Db/buy.json --port 5000


Optional: Run all three JSON Servers in separate terminals simultaneously.

Folder Structure
src/
 ├── Pages/       # Cart, Orders, Profile pages
 ├── Header/      # Navbar & Header component
 ├── useFetch/    # Custom fetch hooks
 ├── App.jsx
 ├── main.jsx
 └── index.css
Db/
 ├── profile.json
 ├── cart.json
 └── buy.json

Contributing

Pull requests are welcome! Feel free to contribute improvements, bug fixes, or additional features.

Author

Nanmaran S – React Frontend Developer
