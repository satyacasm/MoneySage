const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const fs = require('fs');
const path=require('path');
require('dotenv').config();

module.exports.updateBalance = async (req, res) => {
    try {
      // Retrieve the JWT token from the request cookies
      const token = req.cookies.jwt;
  
      // Verify and decode the JWT token to get the payload
      const decodedToken = jwt.verify(token, config.get('jwtsecret'));
  
      // Retrieve the userId from the decoded token
      const userId = decodedToken.id;
  
      // Access the user using the userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      // Update the user's balance
      user.balance += req.body.amount;
  
      // Save the updated user
      const updatedUser = await user.save();
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server error' });
    }
  };

  //Update savings goal
  module.exports.updateSavingsGoal = async (req, res) => {
    try {
      // Retrieve the JWT token from the request cookies
      const token = req.cookies.jwt;

      // Verify and decode the JWT token to get the payload
      const decodedToken = jwt.verify(token, config.get('jwtsecret'));

      // Retrieve the userId from the decoded token
      const userId = decodedToken.id;

      // Access the user using the userId
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ msg: 'User not found' });

      }

      // Update the user's savings goal

      user.savingsGoal = req.body.amount;

      // Save the updated user
      const updatedUser = await user.save();

      res.json(updatedUser);

    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server error' });

    }
  }

  //Add transactions
  // Add transactions and update user balance
  module.exports.addTransaction = async (req, res) => {
    try {
      // Retrieve the JWT token from the request cookies
      const token = req.cookies.jwt;
      // Verify and decode the JWT token to get the payload
      const decodedToken = jwt.verify(token, config.get('jwtsecret'));
      // Retrieve the userId from the decoded token
      const userId = decodedToken.id;
      // Access the user using the userId
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      // Determine whether the transaction is an income or expense
      const isExpense = req.body.type === 'expense';
      // Update the user's balance based on the transaction type
      const amount = parseFloat(req.body.amount);
      user.amount += isExpense ? -amount : amount;
      // Add the transaction to the user's list
      // Create a new transaction
      const transaction = new Transaction({
        user: userId,
        category: req.body.categoryID,
        type: req.body.type,
        amount,
        description: req.body.description,
        date: req.body.date
      });

      // Save the transaction
      await transaction.save();

      // Add the transaction to the user's transactions array
      user.transactions.push(transaction);
      
      // Save the updated user
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  //Add a new category

  module.exports.addCategory = async (req, res) => {
    try {
      // Retrieve the JWT token from the request cookies
      const token = req.cookies.jwt;
      // Verify and decode the JWT token to get the payload
      const decodedToken = jwt.verify(token, config.get('jwtsecret'));
      // Retrieve the userId from the decoded token
      const userId = decodedToken.id;
      // Access the user using the userId
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      // Add the category
      const category = new Category({
         user : userId,
        name: categoryName 
      });

      // Save the category
      await category.save();

      // Add the category to the user's categories array
      user.categories.push(category);

      // Save the updated user
      await user.save();

      res.status(201).json({ message: 'Category added successfully', category });

    } catch (error) { 
      console.error(error);
      res.status(500).json({ msg: 'Server error' });
    }
  }

  //Get all categories
  module.exports.getAllCategories = async (req, res) => {
    try {
      // Retrieve the JWT token from the request cookies
      const token = req.cookies.jwt;
      // Verify and decode the JWT token to get the payload
      const decodedToken = jwt.verify(token, config.get('jwtsecret'));
      // Retrieve the userId from the decoded token
      const userId = decodedToken.id;
  
      // Find all categories for the user
      const categories = await Category.find({ user: userId });
  
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  //Get ALl Transactions
  module.exports.getAllTransactions = async (req, res) => {
    try {
      // Retrieve the JWT token from the request cookies
      const token = req.cookies.jwt;
      // Verify and decode the JWT token to get the payload
      const decodedToken = jwt.verify(token, config.get('jwtsecret'));
      // Retrieve the userId from the decoded token
      const userId = decodedToken.id;
  
      // Find all transactions for the user
      const transactions = await Transaction.find({ user: userId });
  
      res.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };