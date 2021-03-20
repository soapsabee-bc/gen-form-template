const fs = require('fs')
const express = require("express");
const path = require('path')
const glob = require("glob")


var app = express ( );
app.set('views', path.join(__dirname, 'views'));
app.set ( "view engine", "ejs" );

let mods = glob.sync('./mockHere/*.js').map( file => {
   return file
});
let xs = mods.map(require);

 console.log(xs)
  
app.get ( "/a01", function ( req, res ) 
	{
		res.render ( "preview.ejs" , { template : xs[0].preview()});		

	}
)

// const jsonString = JSON.stringify(test)
// fs.writeFile('./newCustomer.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// })


app.listen (3000, '0.0.0.0');
