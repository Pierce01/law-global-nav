function recurseGlobalMenuTitles(dom, text){
	if(dom.length != 0){
		var upperDom;
		for(var index = 0; index < dom.length; index++){
			if($(dom[index]).prop("tagName") == "DIV" || $(dom[index]).prop("tagName") == "UL"){
				recurseGlobalMenuTitles($(dom[index]).children(), text);
			}else if($(dom[index]).prop("tagName") == "LI"){
				upperDom = $(dom[index]).children();
				if(upperDom.length != 1){
					var ulLocation, aLocation; 
					for(var j = 0; j < upperDom.length; j++){
						if($(upperDom[j]).prop("tagName") == "A"){
							aLocation = $(upperDom[j]);
						}else if($(upperDom[j]).prop("tagName") == "UL" || $(upperDom[j]).prop("tagName") == "DIV"){
							ulLocation = $(upperDom[j]);
						}
					}
					if(aLocation == null){
						recurseGlobalMenuTitles($(ulLocation).children(), text);
					}
					if(text.length == 0){
						recurseGlobalMenuTitles($(ulLocation).children(), " in the " + $(aLocation).text() + " navigation menu");
					}else{
						recurseGlobalMenuTitles($(ulLocation).children(), " in the " + $(aLocation).text() + text);
						$(aLocation).attr("aria-label", ( $(aLocation).text() + text));
					}
				}else{
					upperDom = upperDom[0];
					$(upperDom).attr("aria-label", ($(upperDom).text() + text));
				}
			}
		}
	}
}
function recurseMenuTitles(dom, text){
	if(dom.length != 0){
		var currentText;
		var upperDom;
		for(var index = 0; index < dom.length; index++){
			currentText = text;
			if($(dom[index]).prop("tagName") == "LI"){
				upperDom = $(dom[index]).children();
				if(upperDom.length != 1){
					var ulLocation, aLocation; 
					for(var j = 0; j < upperDom.length; j++){
						if($(upperDom[j]).prop("tagName") == "A"){
							aLocation = $(upperDom[j]);
						}else if($(upperDom[j]).prop("tagName") == "UL"){
							ulLocation = $(upperDom[j]);
						}else if($(upperDom[j]).prop("tagName") == "SPAN" && $(upperDom[j]).children().length == 1){
							aLocation = $(upperDom[j]).children()[0];
						}
					}
					if(ulLocation == null || aLocation == null){
						continue;
					}
					currentText = $(aLocation).text();
					$(aLocation).attr("aria-label", ( currentText + text));
					recurseMenuTitles($(ulLocation).children(), ": " + currentText + text);
				}else{
					upperDom = upperDom[0];
					$(upperDom).attr("aria-label", ($(upperDom).text() + text));
				}
			}
		}
	}
}
$(window).load(function(){
	recurseMenuTitles($("ul#menu").children(), "");
    recurseGlobalMenuTitles($("ul#globalHeaderNavigation").children(), "");
});





