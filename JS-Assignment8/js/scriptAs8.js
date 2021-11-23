
$(document).ready(function(){
			$.getJSON("data/characters.json", function (data) {
			$.each(data.characters, function (key, value) {
				let name = value.name;
				let year = value.year;
				let creator = value.created_by;
				let movie = value.movie;
				let markup = "<tr><td>"+name+"</td><td>"+year+"</td><td>"+creator+"</td><td>"
					+movie+"</td></tr>";
				$("tbody").append(markup);
			});
		});

	$("#myInput").on('keyup', function () {

		let input = $("#myInput").val();

		let filter = input.toUpperCase();
		console.log('1:' + filter);

		$('tbody tr').each(function () {
			let tr = $(this);
			//	console.log("data contains:", tr);
			let td = $('td:first-child')

			let txtValue = td.text();
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr.css('backgroundColor', 'yellow');
			} else {
				tr.css('backgroundColor', 'yellow');
			}
		});
	});

});


