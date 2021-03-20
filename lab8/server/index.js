import Express from "express";
import CORS from "cors";

    const App = Express();
    const port = 45030;

    App.use(CORS());
    const names = [
      'Cortney',
      'Dewayne',
      'Trenton',
      'Pamala',
      'Ettie',
      'Errol',
      'Lorrie',
      'Hang',
      'Lauryn',
      'Caterina',
      'Isa',
      'Marcela'
    
  ];
// PUT = CREATE
  App.put("/people/:person", (req,res) => {
    const name = req.params.person;
    names.push(name);
    res.json({name:name});
  });

// GET = READ
App.get('/people/:person', (req, res) => {
  let person = req.params.person
  let result = {"name" : "Not found!"};

  names.forEach((value) => {
      if(value == person) {
          result = {"name": value};
      }
  })
  res.json(result)
});

//GET = READ
App.get('/search/:name', (req, res) => {
  let result = {search: ["Not found!"]};

  let arrayResult = [];

  names.forEach((value) => {
      if(value.includes(req.params.name)) {
          arrayResult.push(value)
  }
  });

  if(arrayResult.length > 0) {
      result = {search: arrayResult};
  }
  res.json(result)
});

 
// TESTING SERVER CODE
  App.listen(port, () => {
    console.log("Server running!");
  });