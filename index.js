const myModule = require('./myModule.js')
const fs = require('fs')
const http = require('http')
const moment = require('moment')

// console.log("Hello World")

// console.log(myModule.beBasic())

// console.log(myModule.count())

// console.log(myModule.addMath(1, 2))

// fs.readFile("story.txt", 'utf8', (err, data) => {
//     if(err) {
//         console.log("There was a problem reading the file: " + err)
//     } else {
//         console.log(data)
//     }
// })

// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080);

// let i = 1

// const count = () => {
//     console.log(i)
//     i = i * 2
// }

// const myTimer = setInterval(count, 1000)

console.log(moment('01/25/1998').format("dddd [the] Do [of] MMMM [in the year] YYYY"))