const {MongoClient} = require('mongodb');
require('dotenv').config()

async function main(uri){

    var uri = `mongodb+srv://webuser:${process.env.DB_PASSWORD}@cluster0.gg0wl.mongodb.net/Cluster0?retryWrites=true&w=majority`

    const client = new MongoClient(uri)
    await client.connect()


    congress_collection = client.db('Cluster0').collection('texas_congress').find({});
    congress_collection.forEach(congressman => console.log(congressman))

    client.close()
}

main().catch(console.error);