/**
 * This script adds functionality to the left-hand navigation that exists across the site.
 * More specifically:
 * --Hides sub-menus that are not within the current page's scope
 * --Adds chevrons to menu items with sub-menus
 * --When chevrons are clicked, collapses/expands the sub-menu
 */

 function setupMenu(query) {
    $(query + ' [class^="currentbranch"]').last().addClass("currentsection");
    var items = $(query).find("ul");
    for (var i = 0; i < items.length; i++) {
      // This is a unicorn for generating UIDs
      var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
      $(items[i]).attr('id', uid);
      var classname = $(items[i]).prev().attr("class");
      if (classname && classname.indexOf("currentbranch") > -1) {
        $(items[i]).addClass("collapse in");
      }
      else {
        $(items[i]).addClass("collapse");
      }
      $(items[i]).before('<em class="glyphicon glyphicon-chevron-right" data-target="#' + uid + '" data-toggle="collapse"></em>');
    }
  }
  
  
  
  
  