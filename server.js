//Gary Jenks
//

//global const
const express = require('express');
const app = express();
const port = 3000;




//============below code under construction======================================
//tried to pass the user input from the url to the num1 variable and use the parseInt() to pass it as an int for the for loops i to start with but did not work out

/*
app.get('/:num1',(req,res)=>{

    for (let i = parseInt(req.params.num1); i >= 0; i--) {
        if (i === 0) {
            app.get('/' + i, (req, res) => {
                res.send(`
                <html>
                     <body>
                         <p>${i} Bottles of beer on the wall</   p>
                     </body>
                </html>
                         `)
            });
        }else{
        app.get('/' + i, (req, res) => {
            res.send(`
            <html>
                <body>
                    <p>${i} Bottles of beer on the wall</p>
                    <p><a href="http://localhost:3000/${i = (i - 1)}"> take one down, pass it around</a></p>
                 </body>
            </html>
        `)
        });
    }
    }

});
*/
//================above code under construction========================


//current for loop allows all /# inputs as long as below 98
for (let i = 98; i >= 0; i--) {
    if (i === 0) {
        app.get('/' + i, (req, res) => {
            res.send(`
            <html>
                 <body>
                     <p>${i} Bottles of beer on the wall</   p>
                 </body>
            </html>
                     `)
        });
    }else{
    app.get('/' + i, (req, res) => {
        res.send(`
        <html>
            <body>
                <p>${i} Bottles of beer on the wall</p>
                <p><a href="http://localhost:3000/${i = (i - 1)}"> take one down, pass it around</a></p>
             </body>
        </html>
    `)
    });
}
}

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