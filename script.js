var apiUrl = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";

function generateQR() {
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;
    var myimg = document.getElementById("img");

    if (mytext !== "" && mysize == "100") {
        myimg.src = apiUrl + "100x100" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "150") {
        myimg.src = apiUrl + "150x150" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "200") {
        myimg.src = apiUrl + "200x200" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "250") {
        myimg.src = apiUrl + "250x250" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "300") {
        myimg.src = apiUrl + "300x300" + "&chl=" + mytext;
    } else {
        alert("Please Enter Text");
    }
}
