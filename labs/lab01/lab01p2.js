import http from "http";
import fs from "fs"; //this file system
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //do something

    return res.end("Hello world");
  } else if (req.url === "/contact") {
    //do something
    fs.readFileSync("./html/contact.html");
    return res.end(data);
  } else if (req.url === "/methods") {
    if (req.method === "GET") {
      //read information
      return res.end("Hello to get method");
    }
    if (req.method === "POST") {
      //create information
      return res.end("Hello to post method");
    }
    if (req.method === "PUT") {
      //update information
      return res.end("Hello to put method");
    }
  } else {
    return res.end("404 page not found");
  }
});
server.listen(3000, () => {
  console.log("http://localhost:3000");
});
