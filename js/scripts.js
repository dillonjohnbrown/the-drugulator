var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');

var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');

var select1_value, select2_value;

var displayResult = document.getElementById('displayResult');
var displayNote   = document.getElementById('displayNote');

// // Make sense of TripSit's big JSON file
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
	data = JSON.parse(text);
	
	// Alphabetize drugs
	dataOrdered = Object.keys(data).sort().reduce(
		(obj, key) => {
			obj[key] = data[key];
			return obj;
		}, 
	  {}
	);

	var x;
	
	for (x in dataOrdered) {
		// console.log(data[x]);

		// Create option elements for each drug
      	var opt1 = document.createElement('option');
       	    opt1.value = x;
       	    opt1.innerHTML = x;

       	select1.appendChild(opt1);
		select1.value="";
		
		// Create option elements for each drug
      	var opt2 = document.createElement('option');
       	    opt2.value = x;
       	    opt2.innerHTML = x;

       	select2.appendChild(opt2);
		select2.value="";
	}
});

// Get the selected drug from dropdown #1
function getSelect1_Value() {
	select1_value = select1.options[select1.selectedIndex].value;
	
	// Show result
	compareDrugs();
}

// Get the selected drug from dropdown #2
function getSelect2_Value() {
	select2_value = select2.options[select2.selectedIndex].value;
	
	// Show result
	compareDrugs();
}

function compareDrugs() {
	// console.log({select1_value});
	// console.log({select2_value});
	
	if (select1_value == select2_value) {
		// Drugs are the same and not in JSON file
		displayResult.textContent = "Goooood lookin' child!";
		displayNote.textContent = "If you take " + select1_value + " and more " + select2_value + ", well you're just taking one drug now aren't you?";
	} else if (typeof select2_value == 'undefined' || typeof select1_value == 'undefined') {
		// One select element does not have a value
		// console.log("One of the dropdowns hasn't been clicked");
	} else {
		// Drugs are different
		var drugCombinationResult = data[select1_value][select2_value];
		
		displayResult.textContent = drugCombinationResult.status;
		
		// If specific combination has a note, print it, otherwise clear it
		if (typeof drugCombinationResult.note != "undefined") {
			displayNote.innerText = drugCombinationResult.note;
		} else {
			displayNote.textContent = "";
		}
	}
}