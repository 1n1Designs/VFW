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
	
	// Form Variables
	var itemsCategory = ["*--Item Category--*", "Clothing", "Electronic", "Transport", "Jewerly", "Other"]
	addCategory();
	
	
	// Form Controls
	var displayData = $("displayData");
	displayData.addEventListener("click", callInfo);
	var clearData = $("clearData");
	clearData.addEventListener("click", clearInfo);
	var saveData = $("saveItem");
	saveData.addEventListener("click", saveItem)
	

})


/**
 * <option value="Clothing">Clothing</option>
	*<option value="Electronics">Electronics</option>
	*<option value="Transport">Transport</option>
	*<option value="Jewerly">Jewerly</option>
	*<option value="Other">Other</option>
 */