// get param "name"
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("name");

function on404(result){
    // pronouns
    $("h3.memberprons").text("404 user not found");
}

function onGet(memberslist, textStatus, errorThrown){
    if (errorThrown) {
        $("h1").text(`There was an error! ${errorThrown}`);
    }

    const { officers, members } = memberslist;
    const result = officers.concat(members).find((m) => m.id === id);

    // name
    $("h1.membername").text(result["name"]);

    // pronouns
    $("h3.memberprons").text(result["pronouns"]);

    // fill in as many social media accounts
    // as the member specified
    if (result["socials"]) {
        for (var i = 0; i < result["socials"].length; i++){
            var s = result["socials"][i];

            var l = $("<a>");
            l.attr("href", s);
            l.text(s);
            l.insertBefore("p.memberbio");
            $("<br>").insertBefore("p.memberbio");
        }
    }

    // bio
    $("p.memberbio").text(result["bio"]);

    // list projects
    if (result["projects"]) {
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
}

$.ajax({
    type: "GET",
    url: "/memberslist.json",
    statusCode: {
        200: onGet,
        404: on404
    },
    dataType:"json"
});

