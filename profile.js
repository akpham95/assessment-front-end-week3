
let colorB = document.querySelector('#color')
colorB.addEventListener('click', buttonAlertFavoriteColor)

function buttonAlertFavoriteColor(evt){
	evt.preventDefault();

	alert("Your favorite color is green!")
}

let placeB = document.querySelector('#place')
placeB.addEventListener('click', buttonAlertFavoritePlace)

function buttonAlertFavoritePlace(evt){
	evt.preventDefault();

	alert("Your favorite place is the gym!")
}


let ritualB = document.querySelector('#ritual')
ritualB.addEventListener('click', buttonAlertFavoriteRitual)

function buttonAlertFavoriteRitual(evt){
	evt.preventDefault();

	alert("Your favorite ritual is basketball!")
}