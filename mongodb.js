// MongoDB:
// 1. Download MongoDB commuinty server for windows.
// 2. Download MongoDB shell.
// 3. If mongod command not recoginzed in the cmd, move to C:/Drive -> create folder data -> db
// Copy the file location open environment variables and paste them.
// 4. Now run mongod in the cmd.
// 5. Open another terminal and run mongosh, which is like client, we input mongodb commands to 
// create database, collections and documents.  
// 6. Running mongod command is like starting server.

// Commands:
// test> show dbs
// To show list of databases present in the system.

// test> use test
// To choose the database to use.

// test> use libraryDB
// To create a brand new database.

// libraryDB> 
db.createCollection("books");
// To create a books collection in the libraryDB db and then it starts showing the collection.

// libraryDB> 
db.books.insertOne({
  title: "Harry potter and the Philosopher's stone",
  author: "J.K.Rowling",
  publishedYear: 1997,
  genre: "Fantasy",
  copiesSold: 1200000
});
// Inserting one document inside the 'books' collection.

// libraryDB> 
db.books.insertMany([{
  title: "Harry potter and the Philosopher's stone",
  author: "J.K.Rowling",
  publishedYear: 1997,
  genre: "Fantasy",
  copiesSold: 1200000
},
{
  title: "Harry potter and the Philosopher's stone",
  author: "J.K.Rowling",
  publishedYear: 1997,
  genre: "Fantasy",
  copiesSold: 1200000
}]);
// Inserting multiple document inside the 'books' collection as an array of objects.

// libraryDB> 
db.books.find();
// To display all documents from the 'books' collection.
// Equivalent mysql command is
// SELECT * FROM books;

// libraryDB> 
db.books.find({ author: "J.K.Rowling" });
// Equivalent mysql command is
// SELECT * FROM WHERE author = "J.K.Rowling";

// libraryDB> 
db.books.find({}, {}); 
// First parameter is the find function is 'WHERE' clause and second one is 'PROJECTION'

// Example: 
db.books.find({ author: 'J.K.Rowling' }, {});
// Using only 'WHERE' clause in the find query without 'PROJECTION'

db.books.find({ author: 'J.K.Rowling' }, { title: 1, publishedYear: 1 });
// Using 'WHERE' and 'PROJECTION' clause in the find query like above to display only those fields.
[
  {
    _id: ObjectId('6995b1f921867371457c2907'),
    title: "Harry potter and the Philosopher's stone",
    publishedYear: 1997
  },
  {
    _id: ObjectId('6995b3b621867371457c2908'),
    title: "Harry potter and the Philosopher's stone",
    publishedYear: 1997
  },
  {
    _id: ObjectId('6995b3b621867371457c2909'),
    title: "Harry potter and the Philosopher's stone",
    publishedYear: 1997
  }
]

db.books.find({ author: 'J.K.Rowling' }, { copiesSold: 0 });
// Using 'WHERE' and 'PROJECTION' clause in the find query like above to exclude the field.