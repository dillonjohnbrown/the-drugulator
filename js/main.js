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

var choice_1;
var	choice_2;

$("#drug_1 .drug").click(function() {
	$("#drug_1 .drug").removeClass("selected");
	$(this).addClass("selected");

	choice_1 = $(this).attr('data-value');
	
	compareDrugs();
});

$("#drug_2 .drug").click(function() {
	$("#drug_2 .drug").removeClass("selected");
	$(this).addClass("selected");

	choice_2 = $(this).attr('data-value');

	compareDrugs();
});

function hide() {
	$("[class^=case__]").hide();
}

function compareDrugs() {
	switch ( drugs[choice_1][choice_2] ) {
		case 0:
			// Same input
			hide();
			$(".case__0").show();
			break;
		case 1:
			// Low risk & synergy
			hide();
			$(".case__1").show();
			break;
		case 2:
			// Low risk & no synergy
			hide();
			$(".case__2").show();
			break;
		case 3:
			// Low risk & decrease
			hide();
			$(".case__3").show();
			break;
		case 4:
			// Caution
			hide();
			$(".case__4").show();
			break;
		case 5:
			// Unsafe
			hide();
			$(".case__5").show();
			break;
		case 6:
			// Dangerous
			hide();
			$(".case__6").show();
			break;
	}
}

// Modal
var modal = $("#modal");

$("#modal-close, #modal-open").click(function() {
	modal.toggleClass("hidden");
});

// TODO: Make it usable with just arrow keys
$(document).keydown(function(e) {
	switch(e.which) {
		case 37:
			// left
			console.log("left");
			break;
		case 39:
			// right
			console.log("right");
			break;
		default: return;
	}
	e.preventDefault();
});