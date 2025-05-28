// Basic CRUD Operations in MongoDB

// Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// Find books published after a certain year (e.g., after 1950)
db.books.find({ published_year: { $gt: 1950 } });

// Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// Update the price of a specific book (e.g., title: "To Kill a Mockingbird", new price: 19.99)
db.books.updateOne(
  { title: "To Kill a Mockingbird" },
  { $set: { price: 19.99 } }
);

// Delete a book by its title (e.g., "To Kill a Mockingbird")
db.books.deleteOne({ title: "To Kill a Mockingbird" });


                // Advanced Queries

// 1. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
);

// 3. Sorting by price
// Ascending order
db.books.find().sort({ price: 1 });

// Descending order
db.books.find().sort({ price: -1 });

// 4. Pagination: limit and skip (5 books per page)
// Example: Get page 2 (skip first 5, limit next 5)
db.books.find().skip(5).limit(5);


            // Aggregation Pipeline

// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { 
        decade: { $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] } },
          "s"
        ]}
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { "_id.decade": 1 } }
]);


                // Indexing

 // 1. Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 });

// 2. Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use the `explain()` method to demonstrate performance improvement
// Before index (run this before creating the index)
db.books.find({ title: "The Hobbit" }).explain("executionStats");

// After index (run this after creating the index)
db.books.find({ title: "The Hobbit" }).explain("executionStats");                