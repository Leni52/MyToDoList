//creating new li item, new checkbox and new button for the new task
function neuesLi(eingabetext){
    let neuLi 	= document.createElement('li');
    let neuText = document.createTextNode(eingabetext);
    if(eingabetext!==''){
        neuLi.appendChild( neuText );
        neuLi.setAttribute('class','border');
    }
    else {
        alert("Add a task!");
       
    }
    document.getElementById('eingabe').value = "";
   //delete the input field afteradding task 
    
    let papa = document.querySelector('.beispiel');
    papa.appendChild( neuLi );

    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("class", "box");
    //x.style.display = 'inline-block';
    
    papa.appendChild(x);

     var btnClose = document.createElement('button');
    btnClose.type='button';
    btnClose.innerHTML='Delete this task';
    btnClose.className="close";
    btnClose.onclick = deleteFunc;

    papa.appendChild(btnClose);
}
//////////////////////
//
var ulList = document.querySelector('ul');
		ulList.addEventListener('click', function(ev){
			if(ev.target.tagName ==='LI'){
				ev.target.classList.toggle('checked');
			}
		},false);
////////////////////
//create delete function to remove all items - li, checkbox, btn

var boxes =  document.getElementsByClassName('box');
var i;
var papa = document.getElementsByTagName('ul');
var textLi = document.getElementsByTagName('li');
var close = document.getElementsByClassName("close");


function deleteFunc(){

    for(var i=0; i<boxes.length; i++){
        
        var kind = boxes[i];
         if(kind.checked==true){               
       
                textLi[i].remove();
                boxes[i].remove();
                close[i].remove();

         }

    }

}


updatecount();			

 
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
//document.getElementById('entfernen').addEventListener('click', loescheLi );
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

fetch("/myData.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
//console.log(data.tasks[1].task);
});




/*
let dataToSend = {
    task: "task3"
};

const jsonString = JSON.stringify(dataToSend);

const data = { task: 'example' };

fetch('/myData.json', {
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
.catch((error) => {
  console.error('Error:', error);
});

*/
 

var addedTask = document.getElementById('eingabe').value;



localStorage.setItem('task', addedTask);
console.log(localStorage.getItem('task'));


