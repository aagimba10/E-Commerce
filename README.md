## 🛒 E-Commerce Frontend (React + Vite)

A simple e-commerce frontend built using React.js and Vite, featuring product listing, cart management, order handling, and API integration using Axios + JSON Server.
This project demonstrates full CRUD functionality and a responsive UI.

---

## Project Overview

### View Products (Read)
Fetch and display products from the API.

### Add to Cart (Create)
Users can add products to the cart with one click.

### Place Orders (Create/Update)
Products can be moved from the Cart to Orders after checkout, or purchased immediately using the Buy Now button, which directly creates an order.

### Cancel Orders (Delete)
Users can cancel any order from the orders page.

### Search & Filter
Search products dynamically.

### Full CRUD Implementation
Handles GET, POST, DELETE requests with Axios.

### Responsive UI
Designed with React and Bootstrap 5.

---

## Technologies Used

- React.js – Component-based frontend  
- Vite – Fast build & hot module replacement  
- Axios – API requests (GET, POST, DELETE)  
- React Router DOM – Navigation between pages  
- Bootstrap 5 – Responsive styling  
- JSON Server – Mock backend  

---

## Screenshots

### Home Page

<img width="1920" height="1020" alt="home" src="https://github.com/user-attachments/assets/791d9816-3945-4183-8cdd-b7845637dde9" />


### Cart Page

<img width="1920" height="1020" alt="cart" src="https://github.com/user-attachments/assets/c2ab01cc-bb8b-457f-84f4-7d6be3718394" />

### Orders Page

<img width="1920" height="1020" alt="order" src="https://github.com/user-attachments/assets/af9a44e1-b2c2-462b-a584-a5f8b6305ac2" />

### Search Products

<img width="1920" height="1020" alt="search" src="https://github.com/user-attachments/assets/eeb123f6-5da6-46cc-bb4a-4d6b37ff8d26" />


---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/NanmaranS/E-Commerce.git
```

### 2. Navigate to project folder
```bash
cd ecom
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the frontend
```bash
npm run dev
```

### 5. Start backend (JSON Servers)
```bash
# 3000 → profile.json
npx json-server --watch Db/profile.json --port 3000

# 4000 → cart.json
npx json-server --watch Db/cart.json --port 4000

# 5000 → buy.json
npx json-server --watch Db/buy.json --port 5000
```

Note: Each of the three JSON servers should be run in a separate terminal simultaneously.
---

## Folder Structure

```
src/
 ├── Pages/       # Cart, Orders, Profile pages
 ├── Header/      # Header component
 ├── useFetch/    # Custom fetch hooks
 ├── App.jsx
 ├── main.jsx
 └── index.css
Db/
 ├── profile.json
 ├── cart.json
 └── buy.json
```

---

## Contributing

Pull requests are welcome! Feel free to contribute improvements, bug fixes, or additional features.

---

## Author

**Nanmaran S** – React Frontend Developer

### License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this project for personal, educational, or commercial purposes.

