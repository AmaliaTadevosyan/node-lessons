//1
// let randomNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber);

// let promise = new Promise((resolve, reject) => {
//   if (randomNumber > 5) {
//     resolve("Resolved");
//   } else {
//     reject("Rejected");
//   }
// });

// console.log(promise);

//2

const http = require("http");
const config = require("./config.json");

const request = (req, res) => {
  res.writeHead(200);
  res.end("Server Created");
};

const server = http.createServer(request);
server.listen(config.port);

//3
