// @codekit-prepend quiet "vendor/jquery-3.4.1.js";

var data, drugValue1, drugValue2;

$.getJSON( "js/combo_beta.json", function( data ) {
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
	$('#drugSelect1').prepend(`<option value="" selected disabled hidden">first, select a drug</option>`);
	$('#drugSelect2').prepend(`<option value="" selected disabled hidden">then select another drug</option>`); 
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