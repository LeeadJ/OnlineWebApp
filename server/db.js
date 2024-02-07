const {
    MongoClient
} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
let db;
let codeBlocksCollection;


// Database Name
const dbName = 'CodeBlocks';

//
const init = async () => {
    const client = await MongoClient.connect(url);
    db = client.db(dbName); //init client once connection established
    initCodeBlock();
}

 const initCodeBlock = async () => {
    codeBlocksCollection = await db.collection("codeblocks");
}
const getCodeBlocks = async () => {
    if (!codeBlocksCollection) await initCodeBlock();
    return codeBlocksCollection.find({}).toArray();
}

/* Created for testing MongoDB compass */
// const createCodeBlocks = async ({ title, code }) => {
//     let codeBlocksCollection = await db.collection("codeblocks");
//     await codeBlocksCollection.insertOne({ title, code });
// }

/* Update for the student use. */
const updateCodeBlocks = async (id, updateItem) => {
    if (!codeBlocksCollection) await initCodeBlock();
    // create a filter using 'id' to filter the students code
    const filter = {
        id
    };

    /* Set the upsert option to insert a document if no documents matchs the filter */
    const options = {
        upsert: true
    };
    // Update the entry with the updateItem' value
    const updateDoc = {
        $set: updateItem
    };
}

const deleteCodeBlocks = async (id) => {
    if (!codeBlocksCollection) await initCodeBlock();
    await codeBlocksCollection.delete(id);
}

module.exports = {
    init,
    getCodeBlocks,
    // createCodeBlocks,
    updateCodeBlocks,
    deleteCodeBlocks
};