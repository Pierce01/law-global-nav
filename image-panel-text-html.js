/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file image-panel-text-html.js
 *      @see Seattle University School of Law Image Panel Content Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 1.0
 */




try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var itemName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var itemTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Title' output='normal' display_field='value' />");
    var backgroundImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
    var imageHeight = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Height of image' output='normal' modifiers='striptags,htmlentities' />");
    var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Description' output='normal' display_field='value' />");
    var borderColor= com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Border Color' output='normal' display_field='value' />");
    var btnOneText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 1 text' output='normal' modifiers='striptags,htmlentities' />");
    var btnOneStdLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 1 link' output='normal' modifiers='nav_sections' />");
    var btnTwoText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 2 text' output='normal' modifiers='striptags,htmlentities' />");
    var btnTwoStdLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 2 link' output='normal' modifiers='nav_sections' />");


    // var frontPageImageCredit = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Main Image Credit' output='normal' modifiers='striptags,htmlentities' />");
    // var articleSubtitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Subtitle' output='normal' display_field='value' />");
    // var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
    // var author = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' display_field='value' />");
    // var publishedDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' date_format='MMMM d, yyyy' />");
    // var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Name' modifiers='striptags,htmlentities' />");
    var pinned = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Pinned' output='normal' display_field='value' />");
    var catPin = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Category Pin' output='normal' display_field='value' />");
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var cardText = "<span class='newsroomArticleLead card-text subtitle'><p>" + articleSubtitle + "</p></span>";
    var titleLink = "";
    var listItems = "";
    var listOfTags = "";
    var thumbNailString = "";
    var beginningHTML = '<div class="gridFeedItem card shadow col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4" title="' + articleTitle + '" id="id<t4 type=\'meta\' meta=\'content_id\' data-position-default="ZoneA" data-position-selected="ZoneA" />">';
    var endingHTML = '</div>';




    /***
     *  parse the list of tags, add <li> tags
     * 
     * */
    if (fieldTags != "") {
        var arrayOfTags = fieldTags.split(',');
        for (let i = 0; i < arrayOfTags.length; i++) {
            listItems += '<li class="tag">' + arrayOfTags[i] + '</li>';
        }
        listOfTags = '<div class="newsroomArticle tags hidden"><ul class="categories">' + listItems + '</ul></div>';
    }




    /***
     *  determine if the article contains full text content
     * 
     * */
    if (articleFullBody == "") {
        titleLink = '<h3 class="newsroomArticleTitle card-title">' + headline + '</h3>';
    } else {
        titleLink = '<h3 class="newsroomArticleTitle card-title"><a href="' + fullTextLink + '">' + headline + '</a></h3>';
    }




    /***
     *  verify Main image and photo credits
     * 
     * */
    if (frontPageImage == "") {
        thumbNailString = '<span class="newsroomImageWrapper hidden">No Image Provided</span>';

    } else {
        thumbNailString = '<span class="newsroomImageWrapper"><img src="' + frontPageImage + '" class="articleImage card-img-top" alt="' + frontPageImageCaption + '" /></span>';
    }




    /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, thumbNailString));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, photoCredit));
    document.write('<div class="newsroomArticleBlurb card-body">');
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleLink));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardText));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, authorByLine));
    document.write('</div>'); // close newsroomArticleBlurb
    document.write('<div class="card-footer"><medium class="newsroomArticlePublishedDate">' + publishedDate + '</medium></div>');
    document.write(listOfTags);
    document.write('<div class="hidden"><span class="articlePinned">' + pinned + '</span><span class="catPinned">' + catPin + '</span></div>');
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}