$(document).ready(function() {
    let compare = {
        name: function (a, b) {
            a = a.replace(/^the /i, '');
            b = b.replace(/^the /i, '');

            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        date: function(a, b){
            a = new Date(a);
            b = new Date(b);
            return a - b;
        }
    };

    //Get data from JSON file and append to the table body.
    $.getJSON("data/characters.json", function (data) {
        let numberOfAtoM = 0;
        let numberOfNtoZ = 0;
        $.each(data.characters, function (key, value) {
            let name = value.name;
            let year = value.year;
            let creator = value.created_by;
            let movie = value.movie;
            let row = $("<tr><td>" + name + "</td><td>" + year + "</td><td>" + creator + "</td><td>"
                + movie + "</td></tr>");
            let rows = $(row).toArray();
        });

        $('.sortable').each(function() {
            let counter = 0;
            let $table = $(this);
            let $tbody = $table.find('tbody');

            let $controls = $table.find('th');
            let rows = $tbody.find('tr').toArray();
            let originalRows = rows.map((x) => x);

            $controls.on('click', function () {
                let $header = $(this);
                let order = $header.data('sort');
                let column;

                if(counter <= 2) {
                    if ($header.is('.ascending') || $header.is('.descending')) {
                        $header.toggleClass('ascending descending');
                        $('tbody').append(rows.reverse());
                    } else {
                        $header.addClass('ascending');
                        $header.siblings().removeClass('ascending descending');
                        if (compare.hasOwnProperty(order)) {
                            column = $controls.index(this);
                            rows.sort(function (a, b) {
                                a = $(a).find('td').eq(column).text();
                                b = $(b).find('td').eq(column).text();
                                return compare[order](a, b);
                            });
                        }
                    }
                    console.log("Click " + counter);
                    counter += 1;
                }
                else{
                    let headerRow = $('tr.header');
                    $('thead').append(headerRow);
                    $('tbody').append(originalRows);
                    console.log("Click " + 3);
                    counter = -1;
                }
            });
        });
    });
});

