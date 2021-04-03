import MongoClient from 'mongodb';

const url = "mongodb+srv://MarcoCalderon:IjWGuzuhRzU9nPp5@cluster0.yuzwq.mongodb.net";


class Database {
    constructor() {
        // Setup a default value for connection
        this.connection = null;
        // Setup a default value for database
        this.database = null;
        // Setup a default value for collection
        this.collection = null;
    }
    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("lab10");
        // Select a collection.
        this.collection = this.database.collection("people"); 
    }

        async createOne(first, last, color) {
            let object = {
                "firstName": first,
                "lastName": last,
                "favoriteColor": color
            };
            if(this.collection != null) {
                // Wait for the insertOne() method to finish.
                return await this.collection.insertOne(object);
            }
        }
    

    async readOne(query) {
        let results = await this.collection.findOne({firstName: query});
            if (results != null) {
                return results;
            }
            else{
                return{person: "not found"};
            }
    }

  

    close() {
    if(this.collection != null) {
      this.connection.close();
    }
  }
}

export default Database;