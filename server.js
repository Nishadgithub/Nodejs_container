const express = require ("express");
const app = express();

app.get("/", (req,res) =>{
    res.send({message: "Hellp, World!", timestamp:new
        Date().toISOString()
    })
})

app.listen (3000, () =>
console.log ("Server running on port 3000"))

