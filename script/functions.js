	var operation = "A"; //"A"=Adding; "E"=Editing
	var selected_index = -1; //Index of the selected list item
	var tbBooks = localStorage.getItem("tbBooks");//Retrieve the stored data
	tbBooks = JSON.parse(tbBooks); //Converts string to object
	if(tbBooks == null) //If there is no data, initialize an empty array
		tbBooks = [];

function Add() {
        var client = JSON.stringify({
        ISBN    : $("#bookISBN").val(),
		Title  : $("#bookTitle").val(),
		Author : $("#bookAuthor").val(),
		Description : $("#bookDescription").val(),
        Price : $("bookPrice").val()
    });
    tbBooks.push(client);
    localStorage.setItem("tbBooks", JSON.stringify(tbBooks));
    alert("The book was sucessfully saved");
    return true;
}

function Edit() {
    tbBooks[selected_index] = JSON.stringify({
        ISBN   : $("#bookISBN").val(),
		Title  : $("#bookTitle").val(),
		Author : $("#bookAuthor").val(),
		Description : $("#bookDescription").val(),
        Price : $("bookPrice").val()
    }); //alter the selected item in the table
    localStorage.setItem("tbBooks", JSON.stringify(tbBooks));
    alert("The book was edited")
    operation = "A"; //Returns the default value
    return true;
}

function Delete() {
    tbBooks.splice(selected_index, 1);
    localStorage.setItem("tbBooks", JSON.stringify(tbBooks));
    alert("Book has been deleted");
}

function List(){		
	for(var book in tbBooks){
		var tableBook = JSON.parse(tbBooks[book]);
	  	$("#tableList tbody").append("<tr>"+
								 	 "	<td><img src='buttons/edit.png' alt='Edit"+tableBook+"' class='buttonEdit'/><img src='buttons/delete.png' alt='Delete"+tableBook+"' class='buttonDelete'/></td>" + 
									 "	<td>"+tableBook.ISBN+"</td>" +
                                     "	<td>"+tableBook.Title+"</td>" +  
									 "	<td>"+tableBook.Author+"</td>" + 
									 "	<td>"+tableBook.Description+"</td>" + 
                                     "	<td>"+tableBook.Price+"</td>" + 
	  								 "</tr>");
	}
} 

$("#bookCRUDForm").bind("submit",function(){
	if(operation == "A")
		return Add();
        //sucessful operation causes an ADD.
	else
		return Edit();		
        //Returns an edit for the book
}); 

$(".buttonEdit").bind("click", function(){ //onClick function
	operation = "E"; //operatoion for editing
	selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
	var tableBook = JSON.parse(tbBooks[selected_index]); // get local book.
	$("#txtISBN").val(tableBook.ISBN);
    $("#txtTitle").val(tableBook.Title);
	$("#txtAuthor").val(tableBook.Author);
	$("#txtDescription").val(tableBook.Description);
	$("#txtPrice").val(tableBook.Price);
	$("#txtID").attr("readonly","readonly"); //So the use can onlt read and not edit ID
	$("#txtName").focus();
});

$(".buttonDelete").bind("click", function(){
	selected_index = parseInt($(this).attr("alt").replace("Delete", "")); //select attribute
	Delete();
	List(); //delete an return the list. Is you don't call function the list doesn't get reloaded.
});  

