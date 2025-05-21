import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
app.get("/", (req, res)=>{
    res.send("Hello from the server");
});
app.post("/", (req, res)=>{
    res.send("Hello from the POST Request");
});
app.put("/", (req, res)=>{
    res.send("Hello from the PUT Request");
});

/*Domain: https://www.youtube.com/watch?v=pAsmrKyMqaA
ENDPOINT: /watch
? - query object
v=pAsmrKyMqaA
req:{
ip,
OS,
url,
method
query (?)- for searching information on DB
params, body
}
*/

//Example of quesry
app.get("/watch", (req, res)=>{
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("You get to the watch endpoint")
    
    });
    app.get("/params/:itemID", (req, res)=>{
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("You get to the params endpoint")
    });
