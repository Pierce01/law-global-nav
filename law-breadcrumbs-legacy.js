try{
    var channel = publishCache.getChannel(); //Channel information
    var sectionNames=[]; // array of names of parent sections
    var sectionIDs=[]; // array of IDs of parent sections
    var sectionLinks=[]; // array of paths (links) of parent sections
    var sectionDepth = section.getLevel(channel); // level of the current section
    
    var mySection;
    var myLinkObject;
    var mySectionPath;
    
    if (sectionDepth > 2){ //do not output breadcrumbs on top-level Law pages
   
        //write the surrounding HTML for the breadcrumbs
        document.write('<div class="imageBannerBreadcrumbs">');
    
        //loop though section parents and append section names seperated by slashes
      for (i = 0; i < sectionDepth; i++) { //loop through parent sections until rwaches current section level
           sectionNames[i] = (section.getName('en')); //name of the section in English ('en')
           sectionIDs[i] = section.getID(); //id of the section (integer)
  
        section = section.getParent(); //make the section the parent section. this makes T4 ascend the site structure every loop
      
        currentLoopSection  = com.terminalfour.publish.utils.TreeTraversalUtils.findSection(channel, section, sectionIDs[i], language);
        currentLoopLinkObject = com.terminalfour.publish.PathBuilder.getLink(dbStatement, section, currentLoopSection, publishCache,language,true);
        currentLoopSectionPath = currentLoopLinkObject.getLink();
        sectionLinks[i] = currentLoopSectionPath; //link of the section
      } //end the array builiding loop
    
      //reverse the names and links arrays to make the breadcrumbs start with ancestors first, then descend
      sectionNames.reverse();
      sectionLinks.reverse();
      sectionNames[0] = 'Home'; //override name of the homepage section with Home
      for (j = 0; j < sectionNames.length-1; j++) { // omit the current name and link section with -1
        document.write('<a href="' + sectionLinks[j] + '">' + sectionNames[j] + '</a>'); 
        if (j < sectionNames.length-2){ //omit the last slash in the output
            document.write(' / ');
        }
      } //end the output loop
      document.write("</div>"); //close the .imageBannerBreadcrumbs div
    } // end if statement 
  } //try ends
  
  catch (err) {
    document.write(err.message);
  }
  