const express = require('express');
const cors = require('cors')
const { initDb, getCodeBlocks, createCodeBlocks, getCodeBlockByID, updateCodeBlocks} = require("./db");

const app = express();
const PORT = 3002;
app.use(express.json());


app.use(cors())

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
        initDb()
            .catch(console.error)
            // .finally(() => client.close());
    } else
        console.log("Error occurred, server can't start", error);
});



app.get('/codeblocks', async (req, res) => {
    let findResult = await getCodeBlocks();
    console.log('Found documents =>', findResult);
    res.status(200);
    res.send(findResult);
});

app.get('/codeblocks/:id', async (req, res) => {
    let findResult = await getCodeBlockByID(req.params.id);
    res.status(200);
    res.send(findResult);
});

app.put('/codeblocks/:id', async (req, res) => {
    console.log("Here: ", req.body)
    await updateCodeBlocks(req.params.id, req.body)
    res.status(200);
    res.send(`Success`);
});