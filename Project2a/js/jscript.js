/**
 * VisualFrameWork Course
 * Term 1302
 * Developer Wiltre Santiago 
 * Project 2 
 */

// Watif for the DOM to load
window.addEventListener("DOMContentLoaded", function(){
	
	//DOM Elements functions
	function $(a){
		var domElement = document.getElementById(a);
		return domElement;
	}
	
	function addCategory(){
		var itemCat = document.getElementsByTagName("form"),
			selectLi = $("itemCategory"),
			makeItem = document.createElement("select");
			makeItem.setAttribute("id","itemsCategory");
		for(var i=0, c=itemsCategory.length; i<c; i++){
			var createOption = document.createElement("option");
			var text = itemsCategory[i];
			createOption.setAttribute("value", text);
			createOption.innerHTML = text;
			makeItem.appendChild(createOption);
		};
		selectLi.appendChild(makeItem);	
	};
	
	//Find the value of the radio Button 
	function findRadioValue(){
		var selection = $("itemForm").sLocation;
		for (var i=0; i<selection.length; i++){
			if(selection[i].checked){
				selectionValue = selection[i].value;
			};
		};
		return selection
	};
	
	// Checkbox Function 
	function nPurchase(){
		if($("nearPurchase").checked){
			nearPurchase = $("NearPurchase").value;
		} else {
			nearPurchase = "No"
		}
		return nPurchase	
	};
	//Store Data Function 
	function saveItem(){
		var id			=Math.floor(Math.random()*10000001);
		findRadioValue();
		nPurchase();
		//Gather Data
		var line			= {};
			line.items		= ["Category", $("itemsCategory").value];
			line.sName		= ["Store Name", $("storeName").value];
			line.website	= ["Web Site", $("webSite").value];
			line.location	= ["Location", findRadioValue()];
			line.near		= ["Purchase Eta", nPurchase()];
			line.priority	= ["Priority", $("priority").value];
			line.date		= ["Date for purchase", $("date").value];
			line.notes		= ["Notes", $("itemNotes").value];
		
		//Local Store string data
		localStorage.setItem(id, JSON.stringify(line));
		alert("Contact is submited");
		
	};
	
	//Display Data from the storage. 
	
	// Form Variables
	var itemsCategory = ["*--Item Category--*", "Clothing", "Electronic", "Transport", "Jewerly", "Other"]
	addCategory();
	
	
	// Form Controls
	var displayData = $("displayData");
	//displayData.addEventListener("click", callInfo);
	var clearData = $("clearData");
	//clearData.addEventListener("click", clearInfo);
	var saveData = $("send");
	saveData.addEventListener("click", saveItem);
	
	
})


