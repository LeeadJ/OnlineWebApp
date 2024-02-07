const express = require('express');
const { init, getCodeBlocks, createCodeBlocks} = require("./db");

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
        init()
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

app.get('/codeblocks/:id', (req, res) => {
    res.status(200);
    res.send(`Here is my ID ${req.params.id}`);
});

app.put('/codeblocks/:id', (req, res) => {
    res.status(200);
    res.send(`Here is my ID ${req.params.id}`);
});