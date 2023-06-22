# MoneySage

MoneySage is a web-based personal finance tracker application built using Node.js and MongoDB. It allows users to manage their income and expenses, track their account balance, and set savings goals. The application provides an intuitive user interface for adding, editing, and deleting transactions, as well as generating reports and visualizing financial data.

## Features

- User authentication: Users can create accounts, log in, and log out using email and password.
- Income and expense tracking: Users can add, edit, and delete income and expense transactions, specifying the category, amount, and date.
- Account balance: The application calculates and displays the current account balance based on the added transactions.
- Savings goals: Users can set savings goals and track their progress towards achieving them.
- Reporting: MoneySage generates reports summarizing the user's income and expenses, providing insights into their financial situation.
- Visualization: The application visualizes financial data using charts and graphs, allowing users to analyze their spending patterns.

## Technologies Used

- Node.js: Server-side JavaScript runtime environment
- Express: Web application framework for Node.js
- MongoDB: NoSQL database for storing user and transaction data
- Mongoose: MongoDB object modeling for Node.js
- HTML/CSS: Front-end markup and styling
- JavaScript: Client-side scripting language
- Chart.js: JavaScript library for data visualization
- React: Frontend
- JSON Web Tokens (JWT): Authentication mechanism for securing API routes

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/moneysage.git
    ```
2. Install the dependencies:  
  ```bash
  cd moneysage
npm install
```
3. Configure the environment variables:
- Create a .env file in the root directory.
- Set the following environment variables:
```bash
MONGODB_URI=<your-mongodb-uri>
PORT=<Port>
```
4. Start the server:
```bash
npm start
```
5. Open your browser and navigate to `http://localhost:3000` to access the MoneySage application.
