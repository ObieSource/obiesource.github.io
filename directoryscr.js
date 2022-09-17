function populateOfficersOrMembers(membs, target) {
  var ul = $(target);

  for (var j = 0; j < membs.length; j++) {
    var mem = membs[j];
    var cell = $("<a>");
    cell.attr("href", mem["href"]);
    cell.text(mem["name"]);
    ul.append(cell);
    cell.wrap("<li></li>");
  }
}

function onGet(result) {
  var officers = result["officers"];
  var members = result["members"];
  populateOfficersOrMembers(officers, "ul.diroff");
  populateOfficersOrMembers(members, "ul.dirmem");
}

$.get((URL = "/memberslist.json"), onGet, (dataType = "json"));
