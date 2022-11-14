function postContactEntry(obj) {
    var url = 'http://alejandro-laneri.internet-box.ch:8085/api/v1/contact/entry';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(obj);

}

function getFieldContent() {
    var contactEntry = {};
    contactEntry.name = document.getElementById('name').value;
    contactEntry.email = document.getElementById('email').value;
    contactEntry.comment = document.getElementById('comments').value;
    if (checkIfValueEmpty()) {
        checkIfAutorIsKeve();
        const obj = JSON.stringify(contactEntry);
        console.log(obj);
        postContactEntry(obj);
        alert("Your Message was successfully sended");
    } else {
        alert("You have to fill out the form");
    }



}


function checkIfValueEmpty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('comments').value == "") {
        alert("Hey no fill out ")
        return false;
    } else {
        return true;
    }
}

function checkIfAutorIsKeve() {
    var name = document.getElementById('name').value;
    name = name.toLowerCase();
    if (name == "keve" || name == "kevin" || name == "kevusch" || "kev") {
        alert("keve du gaylord");
        return true;
    }

}


function checkIfInsults() {
    const insults = ["bitch", "nutte", "hure", "schwuchtel", "schwul###", "pisser", "spasst", "spacko", "miss###"]
    var comment = document.getElementById('comments').value;
    comment = comment.toLowerCase();
}