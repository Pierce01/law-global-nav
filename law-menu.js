/**
 * This script adds functionality to the left-hand navigation that exists across the site.
 * More specifically:
 * --Hides sub-menus that are not within the current page's scope
 * --Adds chevrons to menu items with sub-menus
 * --When chevrons are clicked, collapses/expands the sub-menu
 * 
 * law-menu.js is specifically for the bootstrap 5
 * 
 *  Media Library item ID: 2448340
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
      $(items[i]).attr('id', 'id' + uid);
      var classname = $(items[i]).prev().attr("class");
      if (classname && classname.indexOf("currentbranch") > -1) {
        $(items[i]).addClass("navbar-collapse collapse in");
      }
      else {
          $(items[i]).addClass("navbar-collapse collapse");
        }
      $(items[i]).before('<i class="fa fa-chevron-right navbar-toggle" data-bs-toggle="collapse" data-bs-target="#id' + uid + '" aria-controls="id' + uid + '" aria-expanded="false"></i>');
    }
  }  
  

  // <i class="fa fa-chevron-right" aria-hidden="true" data-bs-target="#' + uid + '" data-bs-toggle="collapse" aria-expanded="false" aria-controls="' + uid + '"></i>

  // <em class="glyphicon glyphicon-chevron-right" data-bs-target="#' + uid + '" data-bs-toggle="collapse" aria-expanded="false" aria-controls="' + uid + '"></em>