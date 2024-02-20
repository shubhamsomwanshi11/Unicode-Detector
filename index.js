function detectUnicode() {
    var input = document.getElementById("inputText").value;
    var outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "";

    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i);
        var codePoint = input.codePointAt(i);

        if (i > 0) {
            outputDiv.innerHTML += "&nbsp;"; // Add a space between characters
        }

        if (codePoint <= 127) {
            outputDiv.innerHTML += '<span style="background-color: black; color: white;">' + char + '</span>';
        } else if (codePoint >= 128 && codePoint <= 255) {
            outputDiv.innerHTML += '<span style="background-color: yellow;">' + char + '</span>';
        } else {
            outputDiv.innerHTML += '<span style="background-color: brown;">' + char + '</span>';
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    var inputTextarea = document.getElementById("inputText");
    inputTextarea.addEventListener("input", detectUnicode);
})