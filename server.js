//Gary Jenks
//

//global const
const express = require('express');
const app = express();
const port = 3000;

//===================For loop worked but not what the clients wanted ===============
// //current for loop allows all /# inputs as long as below 98
// for (let i = 98; i >= 0; i--) {
//     if (i === 0) {
//         app.get('/' + i, (req, res) => {
//             res.send(`
//             <html>
//                  <body>
//                      <p>${i} Bottles of beer on the wall</   p>
//                  </body>
//             </html>
//                      `)
//         });
//     }else{
//     app.get('/' + i, (req, res) => {
//         res.send(`
//         <html>
//             <body>
//                 <p>${i} Bottles of beer on the wall</p>
//                 <p><a href="http://localhost:3000/${i = (i - 1)}"> take one down, pass it around</a></p>
//              </body>
//         </html>
//     `)
//     });
// }
// }
//============= for loop worked but not what the client wanted =================

//much cleaner than the foor loop
app.get('/:number_of_bottles', (req,res)=>{

    let currentBottle = parseInt(req.params.number_of_bottles)
    //console.log(currentBottle);
    let nextBottle = currentBottle - 1
    //console.log(nextBottle)
    res.send(`
    <html>
        <body>
            <p>${currentBottle} Bottles of beer on the wall</p>
            <p><a href="http://localhost:3000/${nextBottle}"> take one down, pass it around</a></p>
         </body>
    </html>
`)
});

//default 
app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <p>99 Bottles of beer on the wall</p>
            <p><a href="http://localhost:3000/98"> take one down, pass it around</a></p>
         </body>
    </html>
`)

});


app.listen(port, () => {
    console.log('Express is listening on port: ', port);
});