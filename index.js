const template = require('./template.js')
const fs = require('fs')
const express = require("express");
const path = require('path') // เรียกใช้งาน path module

var app = express ( );
app.set('views', path.join(__dirname, 'views'));
app.set ( "view engine", "ejs" );


let test = template.initTemplate(
{ 
    
    name: "test123",
    tabs: [
        template.tabs({id:"test",title:"test"}),
        template.tabs({id:"test2",title:"test2"})

    ]


},[
template.container(
    [ 
        [ template.textFieldCustom({id:"test",name:"test",required:true}),template.textFieldCustom({id:"test",name:"test"}) ],
       
    ],"test") ,
    template.container(
        [ 
            [ template.tableTwo({id:"test2",name:"test2"})],
           
        ],"test") ,
        template.container(
            [ 
                [ template.tableTwo({id:"test2",name:"test2"})],
               
            ],"test2") 

])




app.get ( "/", function ( req, res ) 
	{
		res.render ( "preview.ejs" , { template : test});		
        console.log(test)

	}
)

// let test = template.initTemplate(
// { name: "test123" },[
// template.container(
//     [ 
//         [ template.textFieldCustom({id:"test",name:"test",required:true}),template.textFieldCustom({id:"test",name:"test"}) ],
       
//     ]) ,
//     template.container(
//         [ 
//             [ template.tableTwo({id:"test2",name:"test2"})],
           
//         ]) 

// ])


// const jsonString = JSON.stringify(test)
// fs.writeFile('./newCustomer.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// })


app.listen (3000, '0.0.0.0');
