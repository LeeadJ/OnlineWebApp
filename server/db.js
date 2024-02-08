const {
    MongoClient
} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
let db;

// Database Name
const dbName = 'CodeBlocks';

const initDb = async () => {
    console.log("")
    const client = await MongoClient.connect(url);
    console.log(client)
    db = client.db(dbName)
}

const getCodeBlocks = async () => {
    let codeBlocksCollection = await db.collection("codeblocks");
    return codeBlocksCollection.find({}).toArray();
}

/*Created for testing compass*/ 
// const createCodeBlocks = async ({ title, code }) => {
//     let codeBlocksCollection = await db.collection("codeblocks");
//     await codeBlocksCollection.insertOne({ title: "Printe Hello", code: "console.log('Hello World');" });
// }

const updateCodeBlocks = async (id, updateItem) => {
    let codeBlocksCollection = await db.collection("codeblocks");
    // Create a filter for codeblocks with the id
    const filter = {id};
    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };
    // Specify the update to set a value for id
    const updateDoc = {
      $set: updateItem
    };
}

const deleteCodeBlocks = async (id) => {
    let codeBlocksCollection = await db.collection("codeblocks");
    await codeBlocksCollection.delete(id);
}

module.exports = {
    initDb,
    getCodeBlocks,
    // createCodeBlocks,
    updateCodeBlocks,
    deleteCodeBlocks
};