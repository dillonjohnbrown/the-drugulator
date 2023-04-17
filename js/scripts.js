var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');

var displayResult = document.getElementById('displayResult');
var displayNote   = document.getElementById('displayNote');

var allExplanations               = document.getElementsByClassName('displayExplanations');
var explanation__lowRiskSynergy   = document.getElementById('displayExplanation__lowRiskSynergy');
var explanation__lowRiskNoSynergy = document.getElementById('displayExplanation__lowRiskNoSynergy');
var explanation__lowRiskDecrease  = document.getElementById('displayExplanation__lowRiskDecrease');
var explanation__caution          = document.getElementById('displayExplanation__caution');
var explanation__unsafe           = document.getElementById('displayExplanation__unsafe');
var explanation__dangerous        = document.getElementById('displayExplanation__dangerous');
var explanation__unknown          = document.getElementById('displayExplanation__unknown');

/*
	Get TripSit's big JSON file
*/
function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}
readTextFile("js/combo_beta.json", function(text) {
	// Make sense of the JSON file
	data = JSON.parse(text);
	
	// Alphabetize drugs
	dataOrdered = Object.keys(data).sort().reduce(
		(obj, key) => {
			obj[key] = data[key];
			return obj;
		}, 
	  {}
	);
	
	// Deal with select dropdowns
	for (const key in dataOrdered) {
		if (Object.hasOwnProperty.call(dataOrdered, key)) {
			const opt1 = document.createElement('option');
			      opt1.value = key;
			      opt1.innerHTML = key;
	  
			const opt2 = document.createElement('option');
			      opt2.value = key;
			      opt2.innerHTML = key;
	  
			select1.appendChild(opt1);
			select2.appendChild(opt2);
		}
		
		// Reset the dropdowns to their placeholder options
		select1.value = "";
		select2.value = "";
	}
});

/*
	Get the selected drug from dropdowns
*/
function getSelectValues() {
	const { value: select1_value } = select1.options[select1.selectedIndex];
	const { value: select2_value } = select2.options[select2.selectedIndex];
	
	// Show result
	compareDrugs(select1_value, select2_value);
}

/*
	Compare drug choices and print result
*/
function compareDrugs(drug1, drug2) {
	// console.log({drug1});
	// console.log({drug2});
	
	// Hide any and all explanations
	[].forEach.call(allExplanations, function(el) {
	    el.classList.remove("show");
	});
	
	if (drug2 === '' || drug1 === '') {
		// One select element does not have a value
		console.log("One of the dropdowns hasn't been clicked");
	} else if (drug1 == drug2) {
		// Drugs are the same and not in JSON file
		displayResult.textContent = "Good on you, champion!";
		displayNote.innerHTML = "If you take <span class='drugChoice drugChoice_1'>" + drug1 + "</span> and more <span class='drugChoice drugChoice_2'>" + drug2 + "</span>, well you're just taking one drug now aren't you?";
	} else {
		// Drugs are different
		var drugCombinationResult = data[drug1][drug2];
		
		// Change the big h2 text
		displayResult.textContent = drugCombinationResult.status;
		
		// If specific combination has a note, print it, otherwise clear it
		if (typeof drugCombinationResult.note != "undefined") {
			displayNote.innerHTML = drugCombinationResult.note;
		} else {
			displayNote.textContent = "";
		}

		// Show and hide generic explanations
		switch (drugCombinationResult.status) {
			case 'Low Risk & Synergy':
				explanation__lowRiskSynergy.classList.add('show');
				break;
		
			case 'Low Risk & No Synergy':
				explanation__lowRiskNoSynergy.classList.add('show');
				break;
		
			case 'Low Risk & Decrease':
				explanation__lowRiskDecrease.classList.add('show');
				break;
		
			case 'Caution':
				explanation__caution.classList.add('show');
				break;
		
			case 'Unsafe':
				explanation__unsafe.classList.add('show');
				break;
		
			case 'Dangerous':
				explanation__dangerous.classList.add('show');
				break;
		
			default:
				explanation__unknown.classList.add('show');
		}
	}
}