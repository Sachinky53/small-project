let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button")

let string="";
let arr=Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click',(e) =>{

        if(e.target.innerHTML == '='){
            string =eval(string);
            input.value=string;

        
        }
else if(e.target.innerHTML == 'DEL'){
    string =""
    input.value=input.value.slice(0,-1);


}

    else if(e.target.innerHTML == 'AC'){
        string =''
        input.value=string;

    }

        else{
string +=e.target.innerHTML;
input.value=string;
        }
    })
})