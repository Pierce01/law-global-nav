// @see Section Meta Description id: 61
// @file law/sitenavigation-sidebar
// aao vc


try {
    importClass(com.terminalfour.publish.utils.BrokerUtils); // Needed for certain versions of SM to enable BrokerUtils
    importClass(com.terminalfour.publish.PathBuilder); // For building link to navigation root section
    importClass(com.terminalfour.sitemanager.cache.CachedContent); //jb
    importClass(com.terminalfour.spring.ApplicationContextProvider); //jb
    importClass(com.terminalfour.content.IContentManager); //jb
    importClass(com.terminalfour.template.TemplateManager); //jb


    var CID = 5222; // 786 is edu siteconfig and 5222 is law
    var whatsthemenuloc = "menuleft"; //default case
    var channel = publishCache.getChannel();
    var found = false;
    var theSection = section; //for loop to find siteconfig

    var navRootFound = false;
    var currentSection = section; //for loop to find navroot level 
    var navLevel = parseInt(section.getLevel(publishCache.getChannel()));

    while (theSection && !found) {
        var sectionChildren = theSection.getChildren();
        var foundSection = null;
        // loop through section for child named Section customizations
        for (var i = 0; i < sectionChildren.length && !foundSection; i++) {
            if (sectionChildren[i].getName(language) == "Section Customizations") foundSection = sectionChildren[i];
        }
        // if Section Customizations is found, look for SiteConfig content type (#id 786)
        if (foundSection) {
            var contentList = foundSection.getContent(language, CachedContent.APPROVED); // CachedContent[] of content in the section
            var oCM = ApplicationContextProvider.getBean(IContentManager);
            // For each content item in the section
            for (var i = 0; i < contentList.length && !found; i++) {
                content = oCM.get(contentList[i].ID, language); // "content" variable is given by default
                // If content is of type "SiteConfig", set found to true
                if (content.getContentTypeID() == CID) found = true;
            }
        }

        // Recurse up the hierarchy in case Section Customizations is not found
        theSection = theSection.getParent();
    }


    while (navRootFound == false && navLevel > 0) {

        for (var i = 0; i < currentSection.getContent().length; i++) {
            if (currentSection.getContent()[i].toString().indexOf("NavRoot") > -1) {
                navRootFound = true;
            }
        }
        if (navRootFound == false) {
            currentSection = currentSection.getParent();
            navLevel--;
        } else {}
    }

    var navRootLink = PathBuilder.getLink(dbStatement, currentSection, publishCache, language, isPreview);

    if (whatsthemenuloc == 'menuleft') { //jb
        document.write('<nav id="siteNavigationWrapper" aria-labelledby="siteNavigationLabel"><div id="siteNavigation" class="sidebarNav">');
        // Name of section is the title of navigation menu
        document.write('<div id="siteNavigationTitleWrapper"><div id="siteNavigationTitle"><span><a href="' + navRootLink.getLink() + '" id="siteNavigationLabel" class="navbar-brand">' + navRootLink.getText() + '</a></span> \
                    <button type="button" class="navbar-toggle collapsed border-0" data-bs-toggle="collapse" data-bs-target="#menu" aria-expanded="false" aria-controls="menu" aria-label="Toggle site navigation menu"> \
                    <span class="navbar-toggler-icon"></span></button><div style="clear:both"></div></div></div>');

        switch (navLevel) {
            case 1:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="849"/>', ''));
                break;

            case 2:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="856"/>', ''));
                break;

            case 3:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="857"/>', ''));
                break;

            case 4:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="858"/>', ''));
                break;

            case 5:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="859"/>', ''));
                break;

            case 6:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="860"/>', ''));
                break;

            case 7:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="861"/>', ''));
                break;

            case 8:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="862"/>', ''));
                break;

            default:
                document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="navigation" id="849"/>', ''));
                break;
        }

        document.write(BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="media" formatter="text/javascript" id="2448340" />', ''));
        document.write('<script>setupMenu("#menu");</script>');
        document.write('</div></nav>');
    } else {}

} catch (err) {
    document.write(err.message);
}