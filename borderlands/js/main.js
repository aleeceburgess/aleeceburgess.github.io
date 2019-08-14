const radioInputs = document.querySelectorAll('input[type="radio"]'),
	  textAndNumberInputs = document.querySelectorAll('input[type="text"], input[type="number"]'),
	  manufactureDiv = document.getElementById('manufacturers'),
	  gunDiv = document.getElementById('gunTypes'),
	  elementDesc = document.getElementById('element-desc'),
	  elementLogo = document.getElementById('elements'),
	  elementBullet = document.getElementById('extra-info').lastElementChild,
	  redBullet = document.getElementById('extra-info').firstElementChild,
	  redTextCheckbox = document.getElementById('red-bullet-input');

let radioButtonsListener = function(){

	// change the manufacturer logo
	if(this.name === 'manufacture'){
		manufactureDiv.className = this.id;
	}

	// changes gun type image
	if(this.name === 'gunType'){
		gunDiv.className = this.id;
	}

	// changes the elemental logo and the corrisponding text/colours
	if(this.name === 'element'){
		elementLogo.className = this.id;
	}

	// Makes sure the elemental bulletpoint shows
	if (this.id !== 'none' && this.name === 'element'){
		elementBullet.style.display = "list-item";
	}

	switch (this.id) {
		case 'incendiary':
			elementDesc.className = "incendiary";
			elementDesc.innerHTML = "Highly effective vs Flesh";
			break;
		case 'corrosive':
			elementDesc.className = "corrosive";
			elementDesc.innerHTML = "Highly effective vs Armor";
			break;
		case 'explosive':
			elementDesc.className = "explosive";
			elementDesc.innerHTML = "Deals bonus explosive damage";
			break;
		case 'shock':
			elementDesc.className = "shock";
			elementDesc.innerHTML = "Highly effective vs Sheilds";
			break;
		case 'slag':
			elementDesc.className = "slag";
			elementDesc.innerHTML = "Slagged Enemies take more damage";
			break;
		case 'none':
			elementBullet.style.display = "none";
			break;
	}
}


let textAndNumberListener = function() {
	let temp = this.id.replace('-input','');
	let statToChange = document.getElementById(temp);
	let inputValue = this.value;
	
	// assign up or down arrows
	if(this.type === 'number'){
		let currentValue = statToChange.innerHTML;

		if(inputValue === '') inputValue = 0;

		if(currentValue > inputValue){
			statToChange.className = "down"
		} else {
			statToChange.className = "up"
		}


	}

	// Changes the text/numbers when something is inputted in the inputs..
	statToChange.innerHTML = inputValue;
	
}

// Changes the first bulletpoint to be red
let redTextCheckboxListener = function() {
	if (this.checked) {
		redBullet.className = "red-text";
	} else {
		redBullet.className = "";
	}
}

// event listener party
 for (let i = 0; i < radioInputs.length; i++){
	radioInputs[i].addEventListener('click', radioButtonsListener);
 }

 for (let i = 0; i < textAndNumberInputs.length; i++){
 	textAndNumberInputs[i].onkeyup = textAndNumberListener;
 }

 redTextCheckbox.onclick = redTextCheckboxListener;
