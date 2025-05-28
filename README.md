[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19657015&assignment_repo_type=AssignmentRepo)

# MongoDB Fundamentals Assignment

This repository contains my solutions for the MongoDB Fundamentals assignment. I worked through MongoDB setup, CRUD operations, advanced queries, aggregation pipelines, and indexing to build a solid foundation in using MongoDB for data storage and analysis.

## What I Did

- Set up a MongoDB database (`plp_bookstore`) and created a `books` collection.
- Populated the collection with sample data using the `insert_books.js` script.
- Performed basic CRUD operations: finding, updating, and deleting books.
- Wrote advanced queries for filtering, projection, sorting, and pagination.
- Built aggregation pipelines to analyze data (average price by genre, most books by author, books by decade).
- Created indexes and used the `explain()` method to demonstrate performance improvements.

## Getting Started

To set up and run this project on your machine:

1. **Accept the GitHub Classroom assignment invitation.**
2. **Clone your personal repository** created by GitHub Classroom.
3. **Install MongoDB** locally or set up a free MongoDB Atlas account.
4. **Install Node.js** (version 18 or higher).
5. **Install dependencies** in your project folder:  npm install mongodb
6. **Run the provided script** to populate your database: node insert_books.js
7. **Run queries** using `mongosh`, MongoDB Compass, or by copying from `queries.js`.

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate my MongoDB database with sample book data
- `queries.js`: All MongoDB queries and aggregation pipelines I used

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (`mongosh`) or MongoDB Compass

## Screenshots

Below are screenshots from MongoDB Compass showing my collections and sample data:

- ![Screenshot 1](![alt text](<MongoDB compass GUI.PNG>))
- ![Screenshot 2](![alt text](<Sample data.PNG>))

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)