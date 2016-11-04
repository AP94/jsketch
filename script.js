var randHex = function(){
	var hex = "#"
	var n = 0;
	for (i = 0; i < 6; i++){
		n = Math.floor(Math.random() * 16);
		if (n>=10) {
			n = String.fromCharCode(65+(n-10));
		}
		hex += n;
	}
	return hex;
}

var prepTable = function(size) {
	var table = "<table>";
	for (i = 0; i < size; i++) {
		table += "<tr>";
		for (j = 0; j < size; j++){
			table += "<td class='gridsquare'></td>";
		};
	table += "</tr>";
	};
	table += "</table>";
	return table;
};

var prepFC = function(size) {
	var floatclear = "";
	for (i = 0; i < size; i++){
		for (j = 0; j < size; j++) {
			floatclear += "<div class='fc gridsquare'></div>";
		}
	};
	return floatclear;
};

var prepIB = function(size) {
	var inline = "";
	for (i = 0; i < size; i++){
		for (j = 0; j < size; j++) {
			inline += "<div class='ib gridsquare'></div>";
		}
	};
	return inline;
};

var prepare = function(size, type, color, random) {
	var width = Math.floor(640/size);
	switch(type) {
		case "table":
			$("#container").html(prepTable(size));
			break;
		case "FC":
			$("#container").html(prepFC(size));
			$(".fc").css({"width": width, "height": width});
			break;
		case "IB":
			$("#container").html(prepIB(size));
			$(".ib").css({"width": width, "height": width});
			break;
		default:
			alert("Preparation Failed");
	};

	$(".gridsquare").on({
		mouseenter: function(){		
			if (random) {
				$(this).css("background-color", randHex());
			} else {
				$(this).css("background-color", color);
			}
		}
	});
};


$(document).ready(function(){
	var color = "#0c3c89"

	// var type = "table";
	// var type = "FC";
	var type = "IB";

	prepare(16, type, color, false);

	$("#reset").click(function(){
		var size = prompt("Enter size of new grid", "16");
		if (size != NaN && size != null) {
			prepare(size, type, color, false);
		}
	});

	$("#setcolor").click(function(){
		var colormode = prompt("Enter Hex color (with #), or type randomize for completely random colors", "#0c3c89");
		colormode.toLowerCase();
		if (colormode != null) {
			if (colormode == "randomize") {
				prepare(16, type, color, true);
			} else {
				prepare(16, type, colormode, false);
			}
		}
	});

});