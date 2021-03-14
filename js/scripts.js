var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');

var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');

var displayResult = document.getElementById('displayResult');
var displayNote   = document.getElementById('displayNote');
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

	var x;
	
	for (x in dataOrdered) {
		// Create option elements for each drug
      	var opt1 = document.createElement('option');
       	    opt1.value = x;
       	    opt1.innerHTML = x;

      	var opt2 = document.createElement('option');
       	    opt2.value = x;
       	    opt2.innerHTML = x;
		
		// Put those options inside the select dropdowns
		select1.appendChild(opt1);
       	select2.appendChild(opt2);
		
		// Reset the dropdowns to their placeholder options
		select1.value="";
		select2.value="";
		
		// console.log(x);
	}
});

/*
	Get the selected drug from dropdowns
*/
function getSelectValues() {
	select1_value = select1.options[select1.selectedIndex].value;
	select2_value = select2.options[select2.selectedIndex].value;
	
	// Show result
	compareDrugs(select1_value, select2_value);
}

/*
	Compare drug choices and print result
*/
function compareDrugs(drug1, drug2) {
	// console.log({drug1});
	// console.log({drug2});
	
	if (drug1 == drug2) {
		// Drugs are the same and not in JSON file
		displayResult.textContent = "Good on you, champion!";
		displayNote.innerHTML = "If you take <span class='drugChoice drugChoice_1'>" + drug1 + "</span> and more <span class='drugChoice drugChoice_2'>" + drug2 + "</span>, well you're just taking one drug now aren't you?";
	} else if (drug2 === '' || drug1 === '') {
		// One select element does not have a value
		console.log("One of the dropdowns hasn't been clicked");
	} else {
		// Drugs are different
		var drugCombinationResult = data[drug1][drug2];
		
		displayResult.textContent = drugCombinationResult.status;
		
		// If specific combination has a note, print it, otherwise clear it
		if (typeof drugCombinationResult.note != "undefined") {
			displayNote.innerHTML = drugCombinationResult.note;
		} else {
			displayNote.textContent = "";
		}
	}
}