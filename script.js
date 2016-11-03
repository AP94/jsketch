$(document).ready(function(){
	var table = "<table>";
	for (i = 0; i < 16; i++) {
		table += "<tr>";
		for (j = 0; j < 16; j++){
			table += "<td></td>";
		};
	table += "</tr>";
	};
	table += "</table>";


	var floatclear = "";
	for (i = 0; i < 16; i++){
		for (j = 0; j < 16; j++) {
			floatclear += "<div class='fc'></div>";
		}
	};

	var inline = "";
	for (i = 0; i < 16; i++){
		for (j = 0; j < 16; j++) {
			inline += "<div class='floating'></div>";
		}
	};



	$("#container").append(table);
	//$("#container").append(floatclear);
	//$("#container").append(inline);
});