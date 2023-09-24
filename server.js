// console.log("Hello world")

//student object 

const student = {
    st:1,
    st:2
}

const fun = (a, b) => {
  return <>
    console.log(a+b) 
    {/* a+b  */}
    {/* console.log("Hello inside world") */}
  </>;
};

fun(2, 3);































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
