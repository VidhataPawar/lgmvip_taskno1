const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

function add(){

        if(inputbox.value === ''){
            alert("You must write something!!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputbox.value;
            listcontainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

        }
        inputbox.value = "";
       saveData();
}

listcontainer.addEventListener("click",function(s){

    if(s.target.tagName === "LI"){
        s.target.classList.toggle("checked");
        saveData();
    }
    else if(s.target.tagName == "SPAN"){
        s.target.parentElement.remove();
        saveData();

    }
    
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showData();

