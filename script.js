let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let btn = document.querySelector("#submit");

let tbody = document.querySelector("#book-list");



btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let tr;
	let del = document.createElement("button");
	del.className = "delete"
	del.innerText ="x";
	del.style.backgroundColor = "red";
	if(title.value && author.value && isbn.value){
		tr = tbody.insertRow();
		tr.insertCell().innerText = title.value;
		tr.insertCell().innerText = author.value;
		tr.insertCell().innerText = isbn.value;
		tr.append(del);
		console.log(tr)
	}
	
	del.addEventListener("click", ()=>{
		tr.remove();
		td.remove();
		td.remove();
		td.remove();
	})
	title.value = "";
	author.value = "";
	isbn.value = ""
})