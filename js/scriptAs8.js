
$(document).ready(function() {

	$.getJSON("./data/characters.json", function (data) {
			$.each(data.characters, function (key, value) {
			let name = value.name;
			let year = value.year;
			let creator = value.created_by;
			let movie = value.movie;
			let $row = "<tr><td>" + name + "</td><td>" + year + "</td><td>" + creator + "</td><td>"
				+ movie + "</td></tr>";
			$("tbody").append($row);
			});
	});

	$("#myInput").on('keyup', function () {

		let input = $("#myInput").val();

		let filter = input.toUpperCase();
		console.log('1:'+filter);

		$('tbody tr td:first-child').each(function () {
			let td = $(this);
			let tdVal = $(this).text();
			if (tdVal.toUpperCase().indexOf(filter) > -1) {
				td.parent('tr').css('backgroundColor', 'yellow');
			} else {
				td.parent('tr').css('backgroundColor', '');
			}
/*
				let charVal = tdVal.toUpperCase().charCodeAt(0);

			if (charVal>=65 && charVal<= 77) { //between a-m
				let am = 0;
				am++;
				console.log("A-M: "+am);
			} else { //between n-z
				let nz = 0;
				nz++;
				console.log("N-Z: "+nz);
			}
			//let markup1 = "<button>A-M (+am.length+)</button>";
			//let markup2 = "<button>N-Z (+nz.length+)</button>";
*/

		});
		/*
 			let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
							'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			let filter1 = 'ABCDEFGHIJKLM';
			let filter2 = 'NOPQRSTUVWXYZ';
			let tdIndex = $(this).text().charAt(0);
		//	let firstChar = $(tdIndex).charAt(0);
		//	console.log("2: "+tdIndex);
		    let	result1 = [];
			let result2 = [];

			if (tdIndex.toUpperCase().indexOf(filter1)>-1){
				result1.push(tdIndex);
				console.log('5:'+result1.length);
			} else if (tdIndex.toUpperCase().indexOf(filter2)>-1){
				result2.push(tdIndex);
				console.log('6: '+result2.length);
			}
				let markup1 = "<button>A-M ("+result1.length+")</button>";
				let markup2 =  "<button>N-Z ("+result2.length+")</button>";
				$("div.buttons").append(markup1, markup2);
		 */
	});
});