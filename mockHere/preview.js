 
 const template = require('../template.js')

 const preview = () => {

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
            template.container(
                        [ 
                            
                            [ template.date({id:"test2",name:"test2"}),template.displayValue({id:"test3",name:"test3"}),template.numberInput({id:"test4",name:"test4"})],
                            
                            
                        ]) 
        
        ])
        

    return test
}

module.exports = {
    preview
}
