/*
    Assignment 5
    {Akhtar Saeed}
*/

$(document).ready(function(){
			
	//Create class called ContentCard and constructor method that accepts 4 properties
	// specific to content card.
	
	class ContentCard {
		constructor(id, title, description, category){
			this.id = id;
			this.title = title;
			this.description = description;
			this.category = category;
		}
		
	//Create updateContent method that accepts 3 properties of a content card, and if any
	//of them are not null, it updates the classes version of that property with the one
	//provided to the method.
		
		updateContent(id, title, description, category){
			if (!this.title || !this.description || !this.category){
				throw new Error ('Cannot update, missing required card info');
			}
			else{
				this.id = id;
				this.title = title;
				this.description = description;
				this.category = category;
			}
		}

		toString(){
			const txt = "content-";
			const ext = this.id;
			const newId = txt+ext;
			const newDiv = $("<div></div>").attr("id", newId);

			const outPut = $("div#content-list").append(newDiv);
			const outPut1 = $(newDiv).css({	"borderWidth":"1px",
				"borderStyle":"solid",
				"padding": "10px"});
			const outPut2 = $(newDiv).append("<h4> Title: " + this.title +"</h4>",
				"<p><strong>Description:</strong>  " + this.description +"</p>",
				"<div><strong>Category:</strong> " + this.category + "</div>");

			return "outPut" + "outPut1" + "outPut2";

		}
	}

	const cards =[new ContentCard(1, "Avengers",
			                     "The heroes of the marvel universe must protect...", "Fantasy"),
			      new ContentCard(2, "Marvel: The ultimate alliance",
					             "The heroes of the marvel universe must protect...","Drama"),
		          new ContentCard(3,  "Power Rangers: Battle for the Grid",
			                     "The heroes of the marvel universe must protect...", "Horror"),
		          new ContentCard(4, "Spider man",
					             "The heroes of the marvel universe must protect...", "Action"),
		          new ContentCard(5, "Wolverine",
								 "The heroes of the marvel universe must protect...", "Fantasy")
	              ]

	cards.forEach(function(element){
			element.toString();
	});
});
