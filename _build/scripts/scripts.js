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

// Drug names
var textDrug1;
var textDrug2;

$("input").click(function() {
	if ( $(this).is(':first-of-type') ) {
		// Enable all column 1 checkboxes
		// Uncheck other checkboxes in first column
		$("input:first-of-type")
			.prop('disabled', false)
			.not(this).prop('checked', false);

		// Get the number of the drug
		choice_1 = $(this).parent().attr('data-value');

		// Get drug name
		textDrug1 = $(this).siblings(".drug__name").text();
	} else {
		// Enable all column 2 checkboxes
		// Uncheck other checkboxes in first column
		$("input:last-of-type")
			.prop('disabled', false)
			.not(this).prop('checked', false);

		// Get the number of the drug
		choice_2 = $(this).parent().attr('data-value');

		// Get drug name
		textDrug2 = $(this).siblings(".drug__name").text();

		$("#formula").show();
	}

	// Compare
	compareDrugs();

	// Show drug names
	displayDrugNames();

	// Disable this checkbox so it can't be deselected
	$(this).prop('disabled', true);
});

function displayDrugNames() {
	if (textDrug1 == textDrug2) {
		$("#displayDrug1").text(textDrug1);
		$("#displayDrug2").text("MORE " + textDrug2);
	} else {
		$("#displayDrug1").text(textDrug1);
		$("#displayDrug2").text(textDrug2);
	}
}

function compareDrugs() {
	switch ( drugs[choice_1][choice_2] ) {
		// Same input
		case 0:
			$("#emoji").text("😸");
			$("#resultTitle").text("Have fun");
			$("#resultParagraph").text("Gooooood loooookin' son!");
			break;

		// Low risk & synergy
		case 1:
			$("#emoji").text("😎");
			$("#resultTitle").text("Low Risk & Synergy");
			$("#resultParagraph").text("These drugs work together to cause an effect greater than the sum of its parts, and they aren't likely to cause an adverse or undesirable reaction when used carefully. Additional research should always be done before combining drugs.");
			break;

		// Low risk & no synergy
		case 2:
			$("#emoji").text("😃");
			$("#resultTitle").text("Low Risk & No Synergy");
			$("#resultParagraph").text("Effects are just additive. The combination is unlikely to cause any adverse or undesirable reaction beyond those that might ordinarily be expected from these drugs.");
			break;

		// Low risk & decrease
		case 3:
			$("#emoji").text("😐");
			$("#resultTitle").text("Low Risk & Decrease");
			$("#resultParagraph").text(" ");
			break;

		// Caution
		case 4:
			$("#emoji").text("😥");
			$("#resultTitle").text("Caution");
			$("#resultParagraph").text("These combinations are not usually physically harmful, but may produce undesirable effects, such as physical discomfort or overstimulation. Extreme use may cause physical health issues. Synergistic effects may be unpredictable. Care should be taken when choosing to use this combination.");
			break;

		// Unsafe
		case 5:
			$("#emoji").text("😨");
			$("#resultTitle").text("Unsafe");
			$("#resultParagraph").text("There is considerable risk of physical harm when taking these combinations, they should be avoided where possible.");
			break;

		// Dangerous
		case 6:
			$("#emoji").text("💀");
			$("#resultTitle").text("Dangerous");
			$("#resultParagraph").text("These combinations are considered extremely harmful and should always be avoided. Reactions to these drugs taken in combination are highly unpredictable and have a potential to cause death.");
			break;
	}
}

// Uncheck all inputs on page load
$( document ).ready(function() {
	$("input").prop('checked', false);
});
