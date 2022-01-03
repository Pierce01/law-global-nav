try {

    var channel = publishCache.getChannel(); //Channel information
    var sectionNames=[]; // array of names of parent sections
    // var sectionIDs=[]; // array of IDs of parent sections
    var sectionLinks=[]; // array of paths (links) of parent sections
    var sectionDepth = section.getLevel(channel); // level of the current section
    
    var mySection;
    var myLinkObject;
    var mySectionPath;


    //do not output breadcrumbs on top-level Law pages
    if (sectionDepth > 2) {
        
        //write the surrounding HTML for the breadcrumbs
        document.write('<div class="imageBannerBreadcrumbs">');
    
        //loop though section parents and append section names seperated by slashes
        for (let i = 0; i < sectionDepth; i++) {

            sectionNames[i] = (section.getName('en')); //name of the section in English ('en')
            let sectionID = section.getID(); //id of the section (integer)
            section = section.getParent(); //make the section the parent section. this makes T4 ascend the site structure every loop

            let currentLoopSection  = com.terminalfour.publish.utils.TreeTraversalUtils.findSection(channel, section, sectionID, language);
            let currentLoopLinkObject = com.terminalfour.publish.PathBuilder.getLink(dbStatement, section, currentLoopSection, publishCache, language, true);
            let currentLoopSectionPath = currentLoopLinkObject.getLink();
            
            //link of the section
            sectionLinks[i] = currentLoopSectionPath;

        }
    
        //reverse the names and links arrays to make the breadcrumbs start with ancestors first, then descend
        sectionNames.reverse();
        sectionLinks.reverse();

        //override name of the homepage section with Home
        sectionNames[0] = 'Home';



        // omit the current name and link section with -1
        for (let j = 0; j < sectionNames.length-1 && j < sectionLinks.length-1; j++) {

            document.write('<a href="' + sectionLinks[j] + '">' + sectionNames[j] + '</a>');

            //omit the last slash in the output
            if (j < sectionNames.length-2){
                document.write(' / ');
            }
        }

      document.write("</div>");




    }
  } catch (err) {
    document.write(err.message);
  }
  