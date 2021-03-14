const os = require("os");
const fs = require("fs");

//1

// console.log(os.platform());

// console.log(os.totalmem());

// //2
// console.log(os.networkInterfaces());

//3

//function for generating 8 random letters

// function randomletters() {
//   let text = "";
//   let alphabet =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < 8; i++) {
//     text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//   }

//   return text;
// }

// const fileName = randomletters();
// fs.writeFile(`${fileName}.txt`, "txt", (err) => {
//   if (err) return console.log(err);
//   console.log(os.cpus());
// });

//4

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   let newData = data.replace(" ", "-");

//   fs.writeFile("input.txt", newData, "utf8", (err, data) => {
//     if (err) console.log(err);
//     console.log("Done");
//   });
// });

//5

fs.readFileSync("input.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  let fileName = os.platform() + Date.now();

  console.log(fileName);
  fs.writeFile(`${fileName}.txt`, data, (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
});
