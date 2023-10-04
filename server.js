console.log("Hello world")


// const http = require("http");

// http.createServer((req, res)=>{
//   res.write("<h1>vicky poonia</h1>")
//   res.end();
// }).listen(4500, "localhost", ()=>{
//   console.log("listening...");
// })

const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/home") {
    res.write("<h1>Welcome home</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>Welcome to About Us page</h1>");
  } else if (req.url === "/node") {
    res.write("<h1>Welcome to my Node Js project</h1>");
  } else {
    res.write("<h1>vicky poonia</h1>");
  }
  res.end();
}).listen(4500, "localhost", () => {
  console.log("listening...");
});







// console.log("Hello world")

//student object

// const student = {
//   st: 1,
//   st: 2,
// };

// const array = ["apple", "oranges", " ", "mango", " ", "lemon"];

// const mapp = (element) => {
//   if (element === " ") {
//     return "empty string";
//   }
//   return element;
// };

// const newArray = array.map(mapp);

// console.log(newArray);

// const obj1 = {'key1': 1 , 'key2' : 2}
// const obj2 = { ...obj1, key1: 1000}

// console.log(obj1)
// console.log(obj2)


// const fun = (a, b) => {
//   return (
//     <>
//       console.log(a+b)
//       {/* a+b  */}
//       {/* console.log("Hello inside world") */}
//     </>
//   );
// };

// fun(2, 3);

// //1. console.log("hi")
// const express = require('express');
// const app = express()

// // using jwtwebtoken
// const jwt = require('jsonwebtoken')
// app.use(express.json())
// require('dotenv').config()

// //1. create static data
// const posts = [
//     {
//         username: 'First User',
//         title: 'Post 1'
//     },
//     {
//         username: 'Second User',
//         title: 'Post 2'
//     }
// ]
// //1. creating a route
// // app.get('/posts', (req, res) => {
// //     res.json(posts)
// app.get('/posts', authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name ))
// })

// // create a token
// app.post('/login',(req, res)=>{
//     //authenticating user
//     const username = req.body.username
//     const user = {name: username}

//    const accesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//    res.json({accesToken: accesToken})
// })

// function authenticateToken(req, res, next){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1 ]
//     if(token == null ) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
//         if(err){
//             return res.sendStatus(403)
//         }
//         req.user = user
//         next( )
//     })
// }

// app.listen(7000);   //1. creating a port for our applicatiom
