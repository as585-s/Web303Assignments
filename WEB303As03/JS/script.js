/*
	WEB303 Assignment 3
	Name: Akhtar Saeed
	Due Date: 2021-10-04
*/
//Part A:
/*
//Load data from team.json file and insert into div#team.			
$.getJSON("team.json"). then (function(data){ 
    data.teammembers.forEach(function(element){
		$("#team").append("<h3>"+element.name+"</h3>"),
		$("#team").append("<h4>"+element.title+"</h4>"),
		$("#team").append("<p>"+element.bio+"</p>")		
	})
});
*/

//Part B:
//Display the text "loading..." before the ajax request is sent.
$(document).ajaxStart(function(){
	const message = "Loading......";
	$("#team").append("<p id=message>"+message+"</p>");
});

$(document).ajaxSend(function(){
		$("#message").fadeOut(1000);
	});

// Add an error call back to display an alert with error message. set 
// timeout of 5 seonds.

$.ajax(
	{
	url: "team.json",
	method: "GET",
	dataType: "JSON",
	}).done(function(data){
		data.teammembers.forEach(function(element){
			$("#team").append("<h3>"+element.name+"</h3>").slideDown(5000).delay(1000),
			$("#team").append("<h4>"+element.title+"</h4>").slideDown(5000).delay(1000),
			$("#team").append("<p>"+element.bio+"</p>").slideDown(5000).delay(1000)	
		});
	});
	
	// display Error message with timeout of 5 seconds.
	$(document).ajaxError(function(){
		const error = "Erro while loading....";
		$('#team').html(`An Error Occurred`).fadeOut(5000);
		});

	
