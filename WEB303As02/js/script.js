// WEB303 Assignment 2
// Name: Akhtar Saeed
// Date: 2021-09-26

const vprospect = document.getElementById('vprospect');
const vconvert = document.getElementById('vconvert');
const vretain = document.getElementById('vretain');

$(document).ready(function(){
	
//vconvert.addEventListener('click', loadPage);

//vprospect.addEventListener('click', loadPage);

function loadPage(){
	//Create xhr Object
	let xhr = new XMLHttpRequest();
	// OPEN - type, url/file, async
	xhr.open('GET', 'prospect.html', true);
	xhr.open('GET', 'convert.html', true);
	xhr.open('GET', 'retain.html', true);

	xhr.onload = function(){
		if(xhr.status == 200){
		//	document.getElementById('content').innerHTML = 
		//	xhr.responseText;
		//	location.href = "prospect.html";
		//$("#vprospect").click(function(){
		//	console.log(xhr.responseText);
			//location.href = "prospect.html";
		};
/*
		$("#vconvert").click(function(){
			location.href = "convert.html";
		});

		$("#vconvert").click(function(){
			location.href = "convert.html";
		});

		}

		}

	}
*/
}
//sends request
	xhr.send();
}});