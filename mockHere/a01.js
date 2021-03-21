 
 const template = require('../template.js')

 const a = () => {
 
     let test = template.initTemplate(
         { 
             
             name: "test123"
         
         
         },[
         template.container(
             [ 
                 [ template.textFieldCustom({id:"test",name:"test",required:true}),template.textFieldCustom({id:"test",name:"test"}) ],
                
             ]) ,
             template.container(
                 [ 
                     [ template.tableTwo({id:"test2",name:"test2"})],
                    
                 ]) ,
             template.container(
                     [ 
                         [ template.tableTwo({id:"test2",name:"test2"})],
                         
                         // [ template.dropdown({id:"test2",name:"test2",options:[
                         //     {}
                         // ]})]
                     ]) 
                     ,
          
         ])
         
 
     return test
 }
 
 module.exports = {
 
     a
 } 