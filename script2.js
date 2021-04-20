//creating new li item, new checkbox and new button for the new task
function neuesLi(eingabetext){
    let neuLi 	= document.createElement('li');
    let neuText = document.createTextNode(eingabetext);
    if(eingabetext===''){
        alert("Add a task!");
        
//var num = Math.floor((Math.random()*100)+1);

      //  neuLi.setAttribute('data-key', num);
        //neuLi.dataset.key = num;

    }
    else {
        var lastId = 0;
        neuLi.setAttribute('id', 'item'+lastId);
        

       
   
    document.getElementById('eingabe').value = "";
   //delete the input field afteradding task 
    
    let papa = document.querySelector('.beispiel');
    papa.appendChild( neuLi );
       
    

    var btnClose = document.createElement('button');
    btnClose.type='button';
    btnClose.innerHTML='Delete this task';
    btnClose.className="close";
   
    btnClose.setAttribute('onClick', 'deleteTask("' + 'item'+ lastId+ '")');

   
    lastId=lastId+1;
    neuLi.appendChild( neuText );
    neuLi.setAttribute('class','border');
    papa.appendChild(btnClose);

    
localStorage.setItem('Key', lastId);
console.log(localStorage.getItem('Key'));

}
}
//////////////////////
//
var ulList = document.getElementsByTagName('ul');

for(var k = 0; k<ulList.length; k++){
ulList[k].addEventListener('click', function(ev){
    if(ev.target.tagName ==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);
};

function deleteTask(itemId){
    var item = document.getElementById(itemId);
    let papa = document.querySelector('.beispiel');
    
    papa.removeChild(item);
    papa.removeChild(btnClose);
}



////////////////////
//create delete function to remove all items - li,btn




var close = document.getElementsByClassName('close');
for(i=0; i<close.length; i++){
    
    close[i].onclick = function(){
        
var papa = document.getElementsByTagName('ul');
var textLi = document.getElementsByTagName('li');

textLi[i].style.display="none";
    }
}

 //////////////////////////////////
 //enter new task   
function enterabfrage( event ){
    let x = event.which || event.keycode;	
    if( x == 13 ){							
        let p = eingabe.value;				
        neuesLi(p);							
        eingabe.value = " ";					
    }
}	


function updatecount(){
    let nodelist = document.getElementsByTagName('li').length ;
    let anzeige =  document.getElementsByTagName('h2')[0];
    //anzeige.innerText = ;
     
}	


document.getElementById('eingabe').addEventListener('keypress', enterabfrage );
document.getElementById('auswahl').addEventListener('click',
    function(){
        neuesLi( eingabe.value );
    }
);
///////////////////////////////7


//read from json file
"use strict";

var myInit = {
    method: 'GET',
    header: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

//let myRequest = new Request("/myData.json", myInit);

fetch("http://127.0.0.1:8080/myData.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    var oldTasks = "";

    for(var j=0; j<data.tasks.length; j++){

        let oldLi = document.createElement('li');
    let oldText = document.createTextNode(data.tasks[0].task);
    oldLi.appendChild( oldText );
    oldLi.setAttribute('class','border');

 let parent = document.getElementById('tasks');
 parent.appendChild(oldLi);

 var btnClose = document.createElement('button');
    btnClose.type='button';
    btnClose.innerHTML='Delete this task';
    btnClose.className="close";

parent.appendChild(btnClose);

    }
    

});




/*
let dataToSend = {
    id: "333",
    task: "task3"
};

const jsonString = JSON.stringify(dataToSend);

const data = { task: 'example' };

fetch('http://127.0.0.1:8080/myData.json', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})


*/

 






