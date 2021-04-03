import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45035;
const data = new Database();
data.connect();

App.put('/people/create/:firstName/:lastName/:favoritColor', async function(req, res){
    let result = await data.createOne(req.params.firstName, req.params.lastName, req.params.favoriteColor);
    res.json(result);
});

App.get('people/:person', async function(req,res){
    let name = await data.readOne(req.params.person);

    console.log(name);
    res.json(name);
});

App.listen(port, function(){
    console.log("server is running");
});

data.close();