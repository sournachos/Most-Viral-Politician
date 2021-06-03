const {MongoClient} = require('mongodb');
require('dotenv').config()

async function main(){

    var uri = `mongodb+srv://webuser:${process.env.DB_PASSWORD}@cluster0.gg0wl.mongodb.net/Cluster0?retryWrites=true&w=majority`

    const client = new MongoClient(uri)
    await client.connect()


     let congress_collection = client.db('Cluster0').collection('texas_congress').find({});

     return main2(congress_collection, client)
} 

async function main2(congress_collection, client){

    let output =[]

   await congress_collection.forEach(congressman => output.push(congressman))

   console.log(output)

    client.close()

    return output;
}

let pyScraper = main().catch(console.error);

export default pyScraper;