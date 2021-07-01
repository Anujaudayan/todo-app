var Uname = "admin";
var password = 12345;
let uname = document.getElementById("exampleInputUname1");
let pwd = document.getElementById("exampleInputPassword1");

function validate(uname,pwd,callback){
    if(uname.value == Uname && password==pwd.value){
        
        callback();
    }
    else{
        alert("Incorrect user name or password")
        return false;
    }
}
function nextPage(){
    alert("Login Success");
    // location.replace('/todo.html');
    window.location.href = "todo.html";
    return true;
}


function fetchData(){
    fetch('.//https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
       return response.json();
    })
    .then(data => {
        console.log(data);
        const html = data
        .map(todo =>{
            return `
            <p class="" type="checkbox"> ${todo.title}</p>
            `;
        })
        .join("");
        document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
}).catch(error => {
    console.log(error);
})



}
var list = document.querySelector('#app');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'P') {
    ev.target.classList.toggle('checked');
    
  }
}, false);

function printChecked(){
    var items=document.querySelector('#app');

    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'P' && ev.target.classList==="checked") {
    var selectedItems="";
    var p=0;
    for(var i=0; i<items.length; i++){
        if(items[i].class==='checked'){
            selectedItems=items[i].value;
            
             
     }
      }
     }
     // selectedItems=selectedItems+1;
    // console.log(selectedItems);
    // alert("hi");
       
    })
       
    

    
}

printChecked();

// var inputs = document.getElementsByTagName('#app');
// var checked = 0;   
// for (var i = 0; i < inputs.length; i++) {   
//     var input = inputs[i];
//     if( inputs[i].className==="checked")
//         checked++;
// }

// if(checked > 5) { 
//     alert("hii");
//  }
fetchData();