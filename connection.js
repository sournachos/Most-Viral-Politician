const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://webuser:mongomongomongo123123123@cluster0.gg0wl.mongodb.net/Cluster0?retryWrites=true&w=majority";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
     const client =  new MongoClient(uri, {useUnifiedTopology: true});

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        async function findPols(client) {
            const result = await client.db("Cluster0").collection("texas_congress").find({})
            console.log(result)
        }

        findPols();

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here