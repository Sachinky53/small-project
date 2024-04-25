let form=document.getElementById("form");
let input=document.getElementById("input")
let msg=document.getElementById("msg");
let posts=document.getElementById("posts");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button was clicked");
    formValidation();  //invoke formValidation function 
})

let formValidation=()=>{
if(input.value ===""){
    msg.innerHTML="Post cannot be blank";
console.log("failure!!");

}else{
    msg.innerHTML="";

    console.log("sucess");
acceptData();
}}

let data ={};

let acceptData=()=>{   //data pushed
 data["text"]= input.value;
console.log(data);

createPost();  //invoke create post arrow function
}

let createPost=()=>{
    posts.innerHTML += `
    <div>
    <p>${data.text} </p>
                   <span class="options">
                       <i onClick="editPosts(this)" class="fa-solid fa-pen-to-square" style="color: #74C0FC;"></i>
                       <i onClick="deletePosts(this)"class="fa-solid fa-trash" style="color: #74C0FC;"></i>
                   </span>
      
      </div> `    
      input.value ="";
}

let deletePosts=(e)=>{
e.parentElement.parentElement.remove();
}

let editPosts=(e)=>{
input.value=e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove(); 
}
