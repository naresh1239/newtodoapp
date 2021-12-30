// constctor


function Bookdeils(name, author, type){
this.name = name;
this.author = author,
this.type = type;

}


let form = document.getElementById("form");
// ddisplaybook





// clear function
function clerall(){
    form.reset()
}

// add function

 function addfuntion(){

let name = document.getElementById("name").value;
let about = document.getElementById("about").value;
let cooking = document.getElementById("cooking");
let coding = document.getElementById("coding");
let history = document.getElementById("history");
let type

if(cooking.checked){
    type = "cooking"
}else if(coding.checked){
    type = "coding"
}else if(history.checked){
    type = "history"
}



  let book = new Bookdeils(name, about, type)
clerall()
let  bookdata = localStorage.getItem("book")
if(bookdata == null){
    bookobj = []
}
else{
    bookobj = JSON.parse(bookdata);
}

bookobj.push(book)
localStorage.setItem("book", JSON.stringify(bookobj))




 bookobj.map(function(e, index){
    let table = document.getElementById("table")
    let  html = `<tr>
    
       <td>${index}</td>
      <td>${e.name}</td>
      <td>${e.author}</td>
      <td>${e.type}</td>
    </tr>`
    table.innerHTML += html;
  
})}




// locala funtins
 
// clearall function
