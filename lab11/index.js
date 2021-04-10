import Express from 'express';
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45030;
//Allows us tp use request bosdies and translates it our of JSON
App.use(Express.json());
App.use(CORS());

//Creating new Database object
const db = new Database();
//Database.connect()
db.connect("lab11", "books");

//PUT (App.put)-> Database.createOne() -> collections.insertOne()
App.put("/books/:ISBN", async (req, res) => {
    
    //Request parameter ID
    const ISBN = req.params.ISBN;

    //Request body properties
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;


    const result = await db.createOne(ISBN, title, author, description);
    res.json(result);

   
     
  // res.json({
       // ISBN: ISBN,
       // title: title,
       // author: author,
        //description: description,
   //})
    
});

//GET (App.get)->Database.readOne() -> collections. findOne()
App.get("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.readOne(ISBN);
    res.json(result);
    //const title  = req.body.title;
    //const author = req.body.author;
    //const description = req.body.description;


});

//POST
App.post("books/search", (req, res) => {
    const ISBN = req.query.ISBN;
});

//PATCH (App.patch)-> Database.updateOne() -> collections.updateOne()
App.patch("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

     //Request body properties
     const title = req.body.title;
     const author = req.body.author;
     const description = req.body.description;

    const result = await db.updateOne(ISBN, title, author, description);
     
    res.json(result);
 
});

//DELETE (App.delete)->Database.deleteOne() -> collection.deleteOne()
App.delete("/books/:ISBN", async (req, res) => {
    //Request parameter
    const ISBN = req.params.ISBN;
   
    //Talk to db code
    const result = await db.deleteOne(ISBN);

    res.json(result);
});

App.listen(port);