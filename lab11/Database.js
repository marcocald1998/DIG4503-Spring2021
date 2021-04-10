import MongoClient from 'mongodb';

const url = "mongodb+srv://MarcoCalderon:IjWGuzuhRzU9nPp5@cluster0.yuzwq.mongodb.net"

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;

    }

    async connect(database, collection){
        this.connection = await MongoClient.connect(url);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

async createOne(ISBN, title, author, description) {

    
    if (this.collection != null) {
         const result = await this.collection.insertOne({

         "ISBN":ISBN,   
         "title":title,
         "author":author,
         "description":description
        
        });

        return {result};
    } else{
        return null;
    }
}   


async readOne(ISBN){
    if (this.collection != null) {
        const result = await this.collection.findOne({
            "ISBN": ISBN });

        return {result};
    }
    else{
        return {book: "not found"};
    }
}

async readMany(){
    if (this.collection != null) await this.collection.readMany({

    })
}

async updateOne(ISBN, title, author, description){
    if (this.collection != null) {
        const result = await this.collection.updateOne({"ISBN": ISBN}, 
        {$set: {"title": title, "author": author, "description": description} });
        
        return{"title": title, "author": author, "description":description};
    }else{
        return null;

    }
}

async deleteOne(ISBN){
    if (this.collection != null) {
        const result = await this.collection.deleteOne({"ISBN": ISBN});
        return{"deleted": result.deletedCount};
    }else {
        return {"deleted": 0};
    }
}
close(){

    }
};

export default Database;