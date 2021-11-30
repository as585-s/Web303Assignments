
$(document).ready(function(){

    let cache1 = [];
    let cache2 = [];
    //Get data from JSON file and append to the table body.
    $.getJSON("data/characters.json", function (data) {
        let numberOfAtoM = 0;
        let numberOfNtoZ = 0;
        $.each(data.characters, function (key, value) {
            let name = value.name;
            let year = value.year;
            let creator = value.created_by;
            let movie = value.movie;
            let $row = $("<tr><td>" + name + "</td><td>" + year + "</td><td>" + creator + "</td><td>"
                + movie + "</td></tr>");
            $("tbody").append($row);
            let firstLetter = name.charAt(0).toLowerCase();
            if (firstLetter <= "m") {
                cache1.push(firstLetter);
            } else {
                cache2.push(firstLetter);
            }
        });

        //Show the number of first letter of a name in the name column falling between
        //A-M and N-Z. Show number of letters in brackets next to the text in a tab at
        //the bottom of the table.

        let lettersAM = cache1.length;
        $("#button1").append("A-M (" + lettersAM + ")");

        let lettersNZ = cache2.length;
        $("#button2").append("N-Z (" + lettersNZ + ")");

    // Filter rows with a letter in the name column and highlight with yellow color.
        $("#myInput").on('keyup', function () {

            let input = $("#myInput").val();

            let filter = input.toUpperCase();
            console.log('1:' + filter);

            $('tbody tr td:first-child').each(function () {
                let td = $(this);
                let tdVal = $(this).text();
                if (tdVal.toUpperCase().indexOf(filter) > -1) {
                    td.parent('tr').css('backgroundColor', 'yellow');
                } else {
                    td.parent('tr').css('backgroundColor', '');
                }

            })
        })
    });
});

