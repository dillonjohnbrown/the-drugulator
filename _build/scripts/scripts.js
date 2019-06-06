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

$("#drug_1 .drug").click(function() {
	$("#drug_1 .drug").removeClass("drug__selected");
	$(this).addClass("drug__selected");

	choice_1 = $(this).attr('data-value');

	compareDrugs();
});

$("#drug_2 .drug").click(function() {
	$("#drug_2 .drug").removeClass("drug__selected");
	$(this).addClass("drug__selected");

	choice_2 = $(this).attr('data-value');

	compareDrugs();
});

function hide() {
	$("[id^=case__]").hide();
}

function compareDrugs() {
	switch ( drugs[choice_1][choice_2] ) {
		case 0:
			// Same input
			hide();
			$("#case__0").show();
			break;
		case 1:
			// Low risk & synergy
			hide();
			$("#case__1").show();
			break;
		case 2:
			// Low risk & no synergy
			hide();
			$("#case__2").show();
			break;
		case 3:
			// Low risk & decrease
			hide();
			$("#case__3").show();
			break;
		case 4:
			// Caution
			hide();
			$("#case__4").show();
			break;
		case 5:
			// Unsafe
			hide();
			$("#case__5").show();
			break;
		case 6:
			// Dangerous
			hide();
			$("#case__6").show();
			break;
	}
}

// Tabs
$("#tabs_1 .tab").click(function() {
  // Visual changes
	$("#tabs_1 .tab").removeClass("tab__selected");
	$(this).addClass("tab__selected");
});

$("#tabs_2 .tab").click(function() {
	// Visual changes
	$("#tabs_2 .tab").removeClass("tab__selected");
	$(this).addClass("tab__selected");
});

$.fn.isOnScreen = function() {
    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$("#drug_1").scroll(function() {
	var number__popularOnScreen = 0;
	var number__pharmaceuticalOnScreen = 0;
	var number__researchChemicalOnScreen = 0;

	$("#drug_1 .popular").each(function() {
	  if ( $(this).isOnScreen() ) {
	    number__popularOnScreen++;
	  } else {
			number__popularOnScreen--;
		}
	});

	$("#drug_1 .pharmaceutical").each(function() {
		if ( $(this).isOnScreen() ) {
			number__pharmaceuticalOnScreen++;
		} else {
			number__pharmaceuticalOnScreen--;
		}
	});

	$("#drug_1 .research-chemical").each(function() {
	  if ( $(this).isOnScreen() ) {
	    number__researchChemicalOnScreen++;
	  } else {
			number__researchChemicalOnScreen--;
		}
	});

	if (number__pharmaceuticalOnScreen > -3) {
		$("#tabs_1 .tab__pharmaceuticals").addClass("tab__selected");
	} else {
		$("#tabs_1 .tab__pharmaceuticals").removeClass("tab__selected");
	}

	if (number__researchChemicalOnScreen > -6) {
		$("#tabs_1 .tab__research-chemical").addClass("tab__selected");
	} else {
		$("#tabs_1 .tab__research-chemical").removeClass("tab__selected");
	}

	if (number__popularOnScreen > -16) {
		$("#tabs_1 .tab__popular-drug").addClass("tab__selected");
	} else {
		$("#tabs_1 .tab__popular-drug").removeClass("tab__selected");
	}
});

$("#drug_2").scroll(function() {
	var number__popularOnScreen = 0;
	var number__pharmaceuticalOnScreen = 0;
	var number__researchChemicalOnScreen = 0;

	$("#drug_2 .popular").each(function() {
	  if ( $(this).isOnScreen() ) {
	    number__popularOnScreen++;
	  } else {
			number__popularOnScreen--;
		}
	});

	$("#drug_2 .pharmaceutical").each(function() {
		if ( $(this).isOnScreen() ) {
			number__pharmaceuticalOnScreen++;
		} else {
			number__pharmaceuticalOnScreen--;
		}
	});

	$("#drug_2 .research-chemical").each(function() {
	  if ( $(this).isOnScreen() ) {
	    number__researchChemicalOnScreen++;
	  } else {
			number__researchChemicalOnScreen--;
		}
	});

	if (number__pharmaceuticalOnScreen > -3) {
		$("#tabs_2 .tab__pharmaceuticals").addClass("tab__selected");
	} else {
		$("#tabs_2 .tab__pharmaceuticals").removeClass("tab__selected");
	}

	if (number__researchChemicalOnScreen > -6) {
		$("#tabs_2 .tab__research-chemical").addClass("tab__selected");
	} else {
		$("#tabs_2 .tab__research-chemical").removeClass("tab__selected");
	}

	if (number__popularOnScreen > -16) {
		$("#tabs_2 .tab__popular-drug").addClass("tab__selected");
	} else {
		$("#tabs_2 .tab__popular-drug").removeClass("tab__selected");
	}
});
