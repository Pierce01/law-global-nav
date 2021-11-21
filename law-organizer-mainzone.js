function readMedia(mediaID) {
	var oMM = com.terminalfour.media.MediaManager.getManager();
	var oMedia = oMM.get(dbStatement, mediaID, language);
	var oMediaStream = oMedia.getMedia();
	var oScanner = new java.util.Scanner(oMediaStream).useDelimiter("\\A");
	var sMedia = "";
	while (oScanner.hasNext()) {
	  sMedia += oScanner.next();
	}
	return sMedia; 
}

try {
	// Import Organizer base from media library
	var base = readMedia(3050646);
	eval(String(base));

	var titleField = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="Title" output="selective-output" modifiers="striptags,htmlentities" format="$value" />');

	// Set content wrapper, if any
	var header, midder, footer;
	var choice = String(content.get('Content type and layout').publish());
	switch (choice) {
	default:
		header = '\
			<div class="organizerWrapper contentItem" id="id' + content.getID() + '" data-position-default="Main" data-position-selected="Main">\
				<div class="titleWrapper standardContent col-xs-12"><h2 class="organizerTitle text-center">' + titleField + '</h2></div> \
				<div class="organizer standardContent">\
                  <div class="organizerExtra"></div>\
		';
        midder = '\
                  <span></span>\
 		';
        footer = '\
			</div>\
			<div class="organizerToggleExtra boxlinks" style="display:none">Show More</div>\
		</div>\
 		';
	}
	// Write content
  	// Delegate header/footer writing to main method
  	// (paginator doesn't display them in publish on pages >1, only preview)
	//if (header) document.write(header);
	main(header, midder, footer);
	//if (footer) document.write(footer);
}

catch (err) {
	document.write(err.message);
}