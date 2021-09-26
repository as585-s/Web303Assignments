/*
	WEB 303
	Starting file for Assignment 1 
	{Akhtar Saeed}
*/

$(document).ready(function(){
		
	$("#salary, #percent").change(function(){
		var calc = 0;
		var salary = parseInt($("#salary").val());
		var percent =parseInt($("#percent").val());
		sp = calc + (salary*percent/100);
	$("#spend").text(`$`+ sp);	
	//	$("#spend").html((parseInt($("#salary").val())*parseInt($("#percent").val())/100));
	});
});
