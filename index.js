const fs = require('fs')
const express = require("express");
const path = require('path')
const mockHere = require("./mockHere")


var app = express ( );
app.set('views', path.join(__dirname, 'views'));
app.set ( "view engine", "ejs" );



  
app.get ( "/a01", function ( req, res ) 
	{
		res.render ( "preview.ejs" , { template : mockHere.a.a()});		

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
