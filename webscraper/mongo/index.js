const {MongoClient} = require('mongodb');
require('dotenv').config()

async function getDB(client){

    const documents = await client.db('Cluster0').collection('texas_congress').find({})
    
    documents.map(document => console.log(document))
    

    return true
}

async function main(uri){

    var uri = `mongodb+srv://webuser:${process.env.DB_PASSWORD}@cluster0.gg0wl.mongodb.net/Cluster0?retryWrites=true&w=majority`

    const client = new MongoClient(uri)
    await client.connect()
    const congress = await getDB(client)
    client.close()
}

main().catch(console.error);