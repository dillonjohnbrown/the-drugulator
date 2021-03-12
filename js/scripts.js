var data, drugValue1, drugValue2;

var getJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		var status = xhr.status;
		if (status === 200) {
			callback(null, xhr.response);
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
};
getJSON('js/combo_beta.json', function(err, data) {
	if (err !== null) {
		alert('Something went wrong: ' + err);
	} else {
		var items = [];
		$.each( data, function( key ) {
			items.push( "<option value='" + key + "'>"  + key + "</option>" );
		});
	
		// Create select (dropdown #2) element
		$( "<select/>", {
			"id": "drugSelect2",
			"onchange": "getDrugValue2()",
			html: items.join( "" )
		}).insertAfter( "#drugLabel2" );
	
		// Create select (dropdown #1) element
		$( "<select/>", {
			"id": "drugSelect1",
			"onchange": "getDrugValue1()",
			html: items.join( "" )
		}).insertAfter( "#drugLabel1" );
	
		// Add placeholders to select elements
		$('#drugSelect1')
			.prepend('<option value="" selected disabled hidden">first, select a drug</option>')
			.val('');
		$('#drugSelect2')
			.prepend('<option value="" selected disabled hidden">then select another drug</option>')
			.val(''); 
	}
});

// Make sense of TripSit's big JSON file
// I have no clue how this works
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
});

// Get the selected drug from dropdown #1
function getDrugValue1() {
	var x = document.getElementById("drugSelect1");
	drugValue1 = x.options[x.selectedIndex].value;
	
	// Show result
	compareDrugs();
}

// Get the selected drug from dropdown #2
function getDrugValue2() {
	var x = document.getElementById("drugSelect2");
	drugValue2 = x.options[x.selectedIndex].value;
	
	// Show result
	compareDrugs();
}

function compareDrugs() {
	// console.log({drugValue1});
	// console.log({drugValue2});
	
	if (drugValue1 == drugValue2) {
		// Drugs are the same and not in JSON file
		$("#displayResult").text("Good lookin' son!");
		$("#displayNote").text("If you take " + drugValue1 + " and more " + drugValue2 + ", well you're just taking one drug now aren't you?");
	} else if (typeof drugValue2 == 'undefined' || typeof drugValue1 == 'undefined') {
		// One select elements does not have a value
		console.log("One of the dropdowns hasn't been clicked");
	} else {
		// Drugs are different
		var drugCombinationResult = data[drugValue1][drugValue2];
	
		$("#displayResult").text( drugCombinationResult.status );
		
		// If specific combination has a note, print it, otherwise clear it
		if ( typeof drugCombinationResult.note != "undefined" ) {
			$("#displayNote").text( drugCombinationResult.note );
		} else {
			$("#displayNote").text("");
		}
	}
}