const inputBox= document.getElementById("input-box");
const airdropItems =  document.getElementById("airdrop-items");
 function addAirdrop(){
    if(inputBox.value === '')
{
    alert("You must write something");
    return;
}
else{
    const li = document.createElement("li");
        li.innerHTML=inputBox.value;
        airdropItems.appendChild(li);
const span = document.createElement("span") 
     span.innerHTML="\u00d7";
     li.appendChild(span)
    
}
inputBox.value="";
saveData();
}

airdropItems.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
saveData();
    }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
    }
}, false);
 function saveData(){
    localStorage.setItem("data", airdropItems.innerHTML)
 }

 function showAirdrop(){
    airdropItems.innerHTML= localStorage.getItem("data")
 }
 showAirdrop();

    