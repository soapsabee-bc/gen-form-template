

let test = initTemplate(
{ name: "test123" },
[
template.container(
    [ 
        [ template.textFieldCustom({id:"test",name:"test"}),template.textFieldCustom({id:"test",name:"test"}) ],
    
    ]) 

])


initTemplate( 
                { name : ชื่อฟอร์ม },
                [ template.container( [ [template....] ] ) ]
                
            )


initTemplate // ฟังก์ชั่นที่จะเรียกเปิดใช้ก่อนเสมอ 
V
template.container // แต่ละฟิลด์ จะต้องอยู่ใน container เสมอ
V
...template other // ในแต่ละ container จะสามารถใส่ฟิลด์ได้