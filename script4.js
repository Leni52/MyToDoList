var url = "myJson.json";
var num = Math.floor((Math.random()*100)+1);
var data = {};
data.id = num;
var addedTask = document.getElementById('eingabe').value;
data.task  = addedTask;

console.log(data.id)
console.log(data.task)
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var tasks = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "201") {

		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);