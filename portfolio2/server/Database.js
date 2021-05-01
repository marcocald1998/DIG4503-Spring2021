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

async createOne(rank, flavor, brand, rating) {

    
    if (this.collection != null) {
         const result = await this.collection.insertOne({

         "rank":rank,   
         "flavor":flavor,
         "brand":brand,
         "rating":rating
        
        });

        return {result};
    } else{
        return null;
    }
}   


async readOne(rank){
    if (this.collection != null) {
        const result = await this.collection.findOne({
            "rank": rank });

        return {result};
    }
    else {
        return {result: "not found"};
    }
}

async readMany(){
    if (this.collection != null) await this.collection.readMany({

    })
}

async updateOne(rank, flavor, brand, rating){
    if (this.collection != null) {
        const result = await this.collection.updateOne({"rank": rank}, 
        {$set: {"flavor": flavor, "brand": brand, "rating": rating} });
        
        return{"flavor": flavor, "brand": brand, "rating":rating};
    }else{
        return null;

    }
}

async deleteOne(rank){
    if (this.collection != null) {
        const result = await this.collection.deleteOne({"rank": rank});
        return{"Icecream Flavors": result.deletedCount};
    }else {
        return {"Icecream flavors deleted": 0};
    }
}
close(){

    }
};

export default Database;