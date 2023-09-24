


let saveEl=document.getElementById("save=el")
let countEl=document.getElementById("count-el")
let count=0
function incrementCount(){
   count+=1
   countEl.innerText=count
   console.log(count)
}



function clearAll() {
    count=0
    document.getElementById("count-el").textContent=count;
}


function save() {
    let countStr= count + " -  "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
    
}



