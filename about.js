console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form successfully submitted");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let imageCompliment = document.querySelector('#duck')
imageCompliment.addEventListener('mouseover', complimentAlert )

function complimentAlert(evt){
	evt.preventDefault();

	alert("You are awesome!")
}