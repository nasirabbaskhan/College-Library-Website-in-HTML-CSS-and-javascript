let submit= document.getElementById('addbtn');
submit.addEventListener('click', function(e){
e.preventDefault()
let bookName= document.getElementById('bookName').value
let author= document.getElementById('author').value
let type;

let fiction= document.getElementById('Fiction');
let cooking= document.getElementById('Cooking');
let programming= document.getElementById('programming');
if(fiction.checked){
type = fiction.value;
}



else if(cooking.checked){
type= cooking.value;
}

else if(programming.checked){
type= programming.value;

}

let tbody= document.getElementById('tbody')
tbody.innerHTML+= `<tr>  
          
            <td>${bookName}</td>
            <td>${author}</td>
            <td>${type}</td>
            
         </tr>`

})
