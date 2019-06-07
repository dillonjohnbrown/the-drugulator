// @codekit-prepend quiet "vendor/jquery-3.4.1.js";

var drugs = [
	// LSD	Mushrooms	DMT 	Mescaline	DOx		NBOMes	2C-x	2C-T-x	5-MeO-xxT	Cannabis	Ketamine	MXE		DXM		Nitrous Amphetamines	MDMA	Cocaine		Caffeine	Alcohol	GHB/GBL	Opioids Tramadol	Benzodiazepines		MAOIs	SSRIs
	[0,		1,			1,		1,			1,		1,		1,		1,		1,			4,			1,			1,		1,		1,		4,				1,		4,			2,			3,		3,		2,		5,			3,					3,		3],// LSD
	[1,		0,			1,		1,			1,		1,		1,		1,		1,			4,			1,			1,		1,		1,		4,				1,		4,			2,			3,		3,		2,		5,			3,					1,		3],// Mushrooms
	[1,		1,			0,		1,			1,		1,		1,		1,		1,			4,			1,			1,		1,		1,		4,				1,		4,			2,			3,		3,		2,		5,			3,					1,		3],// DMT
	[1,		1,			1,		0,			4,		4,		4,		4,		4,			4,			1,			1,		1,		1,		4,				1,		4,			2,			3,		3,		2,		5,			3,					4,		3],// Mescaline
	[1,		1,			1,		4,			0,		4,		4,		4,		4,			4,			1,			4,		5,		1,		5,				4,		5,			4,			3,		3,		2,		5,			3,					4,		3],// DOx
	[1,		1,			1,		4,			4,		0,		4,		4,		4,			4,			1,			4,		5,		1,		5,				4,		5,			4,			3,		3,		2,		5,			3,					4,		3],// NBOMes
	[1,		1,			1,		4,			4,		4,		0,		4,		4,			4,			1,			1,		1,		1,		4,				1,		4,			2,			3,		3,		2,		5,			3,					4,		3],// 2C-x
	[1,		1,			1,		4,			4,		4,		4,		0,		4,			4,			1,			4,		5,		1,		5,				4,		5,			2,			3,		3,		2,		5,			3,					4,		3],// 2C-T-x
	[1,		1,			1,		4,			4,		4,		4,		4,		0,			4,			1,			1,		5,		1,		5,				4,		5,			2,			3,		3,		2,		5,			3,					6,		3],// 5-MeO-xxT
	[4,		4,			4,		4,			4,		4,		4,		4,		4,			0, 			1, 			1,		1,		1,		4,				1,		4,			2,			1,		1,		1,		1,			3,					1,		2],// Cannabis
	[1,		1,			1,		1,			1,		1,		1,		1,		1,			1,			0, 			1,		2,		1,		4,				1,		4,			2,			6,		6,		6,		6,			4,					4,		2],// Ketamine
	[1,		1,			1,		1,			4,		4,		1,		4,		1,			1,			1, 			0, 		2,		1,		4,				4,		4,			2,			6,		6,		6,		6,			4,					5,		4],// MXE
	[1,		1,			1,		1,			5,		5,		1,		5,		5,			1,			2,			2, 		0,		1,		5,				6,		5,			2,			6,		6,		6,		6,			4,					6,		6],// DXM
	[1,		1,			1,		1,			1,		1,		1,		1,		1,			1,			1,			1,		1,		0,		1,				1,		1,			2,			4,		4,		4,		4,			3,					2,		2],// Nitrous
	[4,		4,			4,		4,			5,		5,		4,		5,		5,			4,			4,			4,		5,		1,		0,				1,		4,			4,			4,		4,		4,		6,			3,					6,		2],// Amphetamines
	[1,		1,			1,		1,			4,		4,		1,		4,		4,			1,			1,			4,		6,		1,		1,				0,		4,			4,			4,		4,		2,		6,			3,					6,		3],// MDMA
	[4,		4,			4,		4,			5,		5,		4,		5,		5,			4,			4,			4,		5,		1,		4,				4,		0,			4,			5,		4,		6,		6,			3,					6,		2],// Cocaine
	[2,		2,			2,		2,			4,		4,		2,		2,		2,			2,			2,			2,		2,		2,		4,				4,		4,			0,			2,		2,		2,		2,			3,					2,		2],// Caffeine
	[3,		3,			3,		3,			3,		3,		3,		3,		3,			1,			6,			6,		6,		4,		4,				4,		5,			2,			0,		6,		6,		6,			6,					5,		4],// Alcohol
	[3,		3,			3,		3,			3,		3,		3,		3,		3,			1,			6,			6,		6,		4,		4,				4,		4,			2,			6,		0,		6,		6,			6,					1,		2],// GHB/GBL
	[2,		2,			2,		2,			2,		2,		2,		2,		2,			1,			6,			6,		6,		4,		4,				2,		6,			2,			6,		6,		0,		6,			6,					4,		2],// Opioids
	[5,		5,			5,		5,			5,		5,		5,		5,		5,			1,			6,			6,		6,		4,		6,				6,		6,			2,			6,		6,		6,		0,			6,					6,		6],// Tramadol
	[3,		3,			3,		3,			3,		3,		3,		3,		3,			3,			4,			4,		4,		3,		3,				3,		3,			3,			6,		6,		6,		6,			0,					1,		2],// Benzodiazepines
	[3,		1,			1,		4,			4,		4,		4,		4,		5,			1,			4,			5,		6,		2,		6,				6,		6,			2,			5,		1,		4,		6,			1,					0,		6],// MAOIs
	[3,		3,			3,		3,			3,		3,		3,		3,		3,			2,			2,			4,		5,		2,		2,				3,		2,			2,			4,		2,		2,		6,			2,					6,		0] // SSRIs
	// LSD	Mushrooms	DMT 	Mescaline	DOx		NBOMes	2C-x	2C-T-x	5-MeO-xxT	Cannabis	Ketamine	MXE		DXM		Nitrous Amphetamines	MDMA	Cocaine		Caffeine	Alcohol	GHB/GBL	Opioids Tramadol	Benzodiazepines		MAOIs	SSRIs
];

// Drugs
var choice_1;
var	choice_2;

// Column 1
// left column checkboxes (column 1)
$("input:first-of-type").click(function() {
	// Enable all column 1 checkboxes
	// Uncheck other checkboxes in first column
	$("input:first-of-type")
		.prop('disabled', false)
		.not(this).prop('checked', false);

	// Get the number of the drug
	choice_1 = $(this).parent().attr('data-value');

	// Compare
	compareDrugs();

	// Disable this checkbox so it can't be deselected
	$(this).prop('disabled', true);
});

// Column 2
// right column checkboxes (column 2)
$("input:last-of-type").click(function() {
	// Enable all column 2 checkboxes
	// Uncheck other checkboxes in second column
	$("input:last-of-type")
		.prop('disabled', false)
		.not(this).prop('checked', false);

	// Get the number of the drug
	choice_2 = $(this).parent().attr('data-value');

	// Compare
	compareDrugs();

	// Disable this checkbox so it can't be deselected
	$(this).prop('disabled', true);
});

// Hide all results
function hide() {
	$("[id^=case__]").hide();
}

function compareDrugs() {
	switch ( drugs[choice_1][choice_2] ) {
		// Same input
		case 0:
			hide();
			$("#case__0").show();
			break;

		// Low risk & synergy
		case 1:
			hide();
			$("#case__1").show();
			break;

		// Low risk & no synergy
		case 2:
			hide();
			$("#case__2").show();
			break;

		// Low risk & decrease
		case 3:
			hide();
			$("#case__3").show();
			break;

		// Caution
		case 4:
			hide();
			$("#case__4").show();
			break;

		// Unsafe
		case 5:
			hide();
			$("#case__5").show();
			break;

		// Dangerous
		case 6:
			hide();
			$("#case__6").show();
			break;
	}
}

// Uncheck all inputs on page load
$( document ).ready(function() {
	$("input").prop('checked', false);
});
