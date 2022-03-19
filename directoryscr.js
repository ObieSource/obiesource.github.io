console.log("yo");

function dostuff(membs, target){
    for (var j = 0; j < membs.length; j++){
        var mem = membs[j];
        var cell = $("<a>")
        cell.attr("href", mem["href"]);
        cell.text(mem["name"]);
        cell.insertBefore(target);
        cell.wrap("<li></li>");

    }
}

function onGet(result){
    var officers = result["officers"];
    var members = result["members"];
    dostuff(officers, "h3.dirmem");
    dostuff(members, "div.dirend");
    console.log(officers, members);

}

$.get(
    URL="/memberslist.json",
    onGet,
    dataType="json"
);

