const template = require('./template.js')
const fs = require('fs')


const initTemplate = (ele,container) => {

    let init  = {
            id: null,
            name: ele.name,
            description: "",
            version: null,
            lastUpdatedBy: null,
            lastUpdatedByFullName: null,
            lastUpdated: null,
            stencilSetId: 0,
            referenceId: null,
            formDefinition: {
                tabs: [],
                fields: [
                    ...container
                ]
                ,
                outcomes: [],
                javascriptEvents: [],
                className: "",
                style: "",
                customFieldTemplates: {},
                metadata: {},
                variables: [],
                customFieldsValueInfo: {},
                gridsterForm: false
            }
        
}

    return init

}
 
let test = initTemplate(
{ name: "test123" },[
template.container(
    [ 
        [ template.textFieldCustom({id:"test",name:"test",required:true}),template.textFieldCustom({id:"test",name:"test"}) ],
       
    ]) ,
    template.container(
        [ 
            [ template.tableTwo({id:"test2",name:"test2"})],
           
        ]) 

])
const jsonString = JSON.stringify(test)
fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})


