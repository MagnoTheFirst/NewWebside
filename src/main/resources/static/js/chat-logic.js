function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").style.background = "transparent";
    document.getElementsByClassName("chat-container").style.display = "block";
    hideChatBtn();

}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementsByClassName("chat-container").style.display = "none";

}


function hideChatBtn() {
    var btn = document.getElementById("open-button");
    btn.style.display = "none";
}

function showBtn() {
    var btn = document.getElementById("open-button");
    btn.style.display = "block";
}