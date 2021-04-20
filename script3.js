var addedTask = document.getElementById('eingabe').value;
var num = Math.floor((Math.random()*100)+1);


document.getElementById('auswahl').addEventListener('click', function(){
var data = JSON.stringify({
    "id": num,
    "task": addedTask.innerHTML
});


localStorage.setItem('Key', num);
console.log(localStorage.getItem('Key'));


let xhr = new XMLHttpRequest();
let url = "myData.json";

xhr.open('POST', url, true);

xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.send(JSON.stringify({
    "id": num,
    "task": addedTask
}))


})

