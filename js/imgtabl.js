

function Load_Image() {

    var pics = ["Plaza_de_Espana_Seville_Spain.jpg", "arts-museum-louvre-in-paris-during-the-night-150-minimum.jpg", "Ciutat_De_Les_Arts_I_Les_Ciencies_Valencia__216644145_.jpeg", "Mayon_Volcano_1.jpg"];
    var picsdesc = ["Plaza de Espana-Seville", "The Louvre-Paris", "Ciudad de las Artes y las Ciencias", "Mayon Volcano"];
    var urldesc = ["https://commons.wikimedia.org/wiki/File:Plaza_de_Espana,_Seville,_Spain.jpg",
        "https://fshoq.com/free-photos/p/150/arts-museum-louvre-in-paris-during-the-night",
        "https://commons.wikimedia.org/wiki/File:Ciutat_De_Les_Arts_I_Les_Ci%C3%A8ncies_Valencia_(216644145).jpeg",
        "https://commons.wikimedia.org/wiki/File:Mayon_Volcano_1.jpg"]

    var txtval = "";

    picsdesc.forEach(myFunction);
    document.getElementById("imgtable").innerHTML = txtval;

    function myFunction(value, index, array) {
        txtval = txtval + '<h4 style="margin-top: 50px;">' + value + '</h4><a onclick="OpenWindow(\'' + urldesc[index] + '\')"><img width=30% style="margin-top: 5px;" width="15%" src="images/' + pics[index] + '"></a>';
    }
}

function OpenWindow(url) {
    var x = window.open(url);
    setTimeout(function () { x.close(); }, 10000);
}
