$(document).ready(function(){
	var table = "<table>";
	for (i = 0; i < 16; i++) {
		table += "<tr>";
		for (j = 0; j < 16; j++){
			table += "<td class='gridsquare'></td>";
		};
	table += "</tr>";
	};
	table += "</table>";


	var floatclear = "";
	for (i = 0; i < 16; i++){
		for (j = 0; j < 16; j++) {
			floatclear += "<div class='fc gridsquare'></div>";
		}
	};

	var inline = "";
	for (i = 0; i < 16; i++){
		for (j = 0; j < 16; j++) {
			inline += "<div class='ib gridsquare'></div>";
		}
	};



	//$("#container").append(table);
	$("#container").append(floatclear);
	//$("#container").append(inline);
});

$(function(){
	$(".gridsquare").on({
		mouseenter: function(){
			$(this).addClass('painted');
			console.log("enter");
		}
	});
});

/*$(document).on("mouseenter", ".gridsquare", function(){
	$(this).find(".gridsquare").addClass("painted");
	console.log("mouseenter");
});*/