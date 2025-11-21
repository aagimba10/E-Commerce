🛒 E-Commerce Frontend (React + Vite)

A clean and simple e-commerce frontend built using React + Vite, featuring product listing, cart management, order handling, and API integration using Axios + JSON Server.

🚀 Features
✔️ Product Listing

Displays all products fetched from an API.

✔️ Add to Cart

Users can add any product to the cart with one click.

✔️ Orders Page

After buying, products automatically move from Cart → Orders.

✔️ Axios API Integration

Handles GET, POST, DELETE requests.

✔️ JSON Server Backend

Simulated backend with endpoints:

/products
/cart
/orders
/buy

🛠️ Tech Stack

React

Vite

Axios

React Router DOM

Bootstrap 5

JSON Server

📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/NanmaranS/E-Commerce.git

2️⃣ Install Dependencies
npm install

3️⃣ Start the Frontend
npm run dev

🖥️ 4️⃣ Start Backend (JSON Servers)

Your project uses three separate JSON Server files:

✅ Port 3000 → profile.json
npx json-server --watch Db/profile.json --port 3000

✅ Port 4000 → cart.json
npx json-server --watch Db/cart.json --port 4000

✅ Port 5000 → buy.json
npx json-server --watch Db/buy.json --port 5000

📌 (Optional) Run All Servers Together

Run each command in separate terminals:

Terminal 1
npx json-server --watch Db/profile.json --port 3000

Terminal 2
npx json-server --watch Db/cart.json --port 4000

Terminal 3
npx json-server --watch Db/buy.json --port 5000

📁 Folder Structure
src/
 ├── Pages/
 ├── Header/
 ├── useFetch/
 ├── App.jsx
 ├── main.jsx
 └── index.css

🤝 Contributing

Pull requests are welcome!

🧑‍💻 Author

Nanmaran S
React Frontend Developer
