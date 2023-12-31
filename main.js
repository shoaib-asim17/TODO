const inputfield=document.getElementById("inputtext");
const addBtn=document.getElementById("add-btn");
const  newlist=document.getElementById("text")

addBtn.addEventListener("click",() =>{
    if(inputfield.value==='')
    {
        alert("blank data is not acceptable")
    }
    else
    {
        const task_text= inputfield.value;
        const listitems=document.createElement("li");
        listitems.innerHTML=`${task_text}
                                    <button class="delete-btn">delete</button>`;
                  
              
        newlist.appendChild(listitems);
        
             
        inputfield.value="";
    }
})
newlist.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete-btn")){
        const listitems = event.target.parentElement;
        newlist.removeChild(listitems);
    }
})
