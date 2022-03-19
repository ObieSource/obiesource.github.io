// Code to get params from
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const id = params.name;

function onGet(result){

    // name
    $("h1.membername").text(result["name"]);

    // pronouns
    $("h3.memberprons").text(result["pronouns"]);

    // fill in as many social media accounts
    // as the member specified
    for (var i = 0; i < result["socials"].length; i++){
        var s = result["socials"][i];
        
        var l = $("<a>");
        l.attr("href", s);
        l.text(s);
        l.insertBefore("p.memberbio");
        $("<br>").insertBefore("p.memberbio");
    }

    // bio
    $("p.memberbio").text(result["bio"]);

    // list projects
    for (var j = 0; j < result["projects"].length; j++){
        var curpro = result["projects"][j];
        var cell = $("<a>");
        cell.attr("href",  curpro["website"]);
        cell.text(curpro["name"]);
        cell.insertBefore("div.memberbot");
        var c2 = $("<span>");
        c2.text(" - " + curpro["description"]);
        c2.insertBefore("div.memberbot");
        $("<br>").insertBefore("div.memberbot");
    }
}

$.get(
    URL="/members/" + id + ".json",
    onGet,
    dataType="json"
);

