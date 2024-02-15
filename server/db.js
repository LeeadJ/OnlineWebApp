const {
    MongoClient, ObjectId
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

const getCodeBlockByID = async (id) => {
    let codeBlocksCollection = await db.collection("codeblocks");
    return codeBlocksCollection.find({ _id: new ObjectId(id) }).toArray();
}

/*Created for testing compass*/ 
// const createCodeBlocks = async ({ title, code }) => {
//     let codeBlocksCollection = await db.collection("codeblocks");
//     await codeBlocksCollection.insertOne({ title: "Printe Hello", code: "console.log('Hello World');" });
// }

const updateCodeBlocks = async (id, updateItem) => {
    let codeBlocksCollection = await db.collection("codeblocks");
    // Create a filter for codeblocks with the id
    const objectId = new ObjectId(id);

    const filter = {_id: objectId };
    // Specify the update to set a value for id
    const updateDoc = {
      $set: {
        title: updateItem.title,
        code: updateItem.code
      }
    };
    const result = await codeBlocksCollection.updateOne(filter, updateDoc);
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
    deleteCodeBlocks,
    getCodeBlockByID
};