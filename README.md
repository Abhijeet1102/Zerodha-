# Zerodha Clone (MERN Stack) 📈

Welcome to the **Zerodha Clone** project! This is a full-stack web application inspired by India's largest stockbroker, Zerodha. It is built using the **MERN (MongoDB, Express, React, Node.js)** stack and demonstrates modern web development practices, including authentication, state management, and API integrations.

---

## 🚀 Features

- **User Authentication**: Secure Signup and Login functionality using Passport.js and `passport-local-mongoose`.
- **Dual React Applications**:
  - **Frontend (Landing Page)**: Beautiful, responsive UI mimicking the official Zerodha website with pages for Pricing, Products, Support, and About.
  - **Dashboard**: A dedicated React application for the trading dashboard that displays Holdings, Positions, Funds, and interactive charts.
- **Backend API**: An Express/Node.js server handling data fetching and user state.
- **Database**: MongoDB Atlas integration for storing user profiles, orders, and portfolio data.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Bootstrap, HTML/CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: Passport.js, Express Session

---

## 📂 Project Structure

This project is a Monorepo containing three main directories:

- `/frontend` - The landing page and authentication UI (runs on port 3000)
- `/dashboard` - The trading portfolio dashboard (runs on port 3001)
- `/backend` - The Node.js Express server and API routes (runs on port 3002)

---

## ⚙️ Installation & Setup

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Abhijeet1102/Zerodha-.git
cd Zerodha
```

### 2. Setup the Backend
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` folder and add your MongoDB Connection String:
  ```env
  MONGO_URL=your_mongodb_connection_string
  PORT=3002
  ```
- Start the backend server:
  ```bash
  npm start
  ```

### 3. Setup the Frontend (Landing Page)
Open a new terminal window:
```bash
cd frontend
npm install
npm start
```

### 4. Setup the Dashboard
Open another terminal window:
```bash
cd dashboard
npm install
npm start
```

---

## 📸 Usage

1. Open your browser and navigate to `http://localhost:3000` to see the Landing Page.
2. Click on **Signup** to create a new account.
3. Once registered, click **Login** to enter the Dashboard.
4. The dashboard runs on `http://localhost:3001` and fetches dummy holdings and positions from your MongoDB database via the backend on `http://localhost:3002`.

---

## 📝 Disclaimer

This is a **clone project** built purely for educational and portfolio purposes. It does not connect to any live stock market feeds (like NSE/BSE) and does not involve real money or trading. All financial data shown is dummy data.
