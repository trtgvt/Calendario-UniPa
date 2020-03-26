var search = document.getElementById("frc:search");
var print = "<span id=\"printBtn__\" style=\"margin-left:30px;\" class=\"btn btn-primary btn-sm\">Stampa</span>";

search.insertAdjacentHTML('afterEnd',print);

document.getElementById("printBtn__").addEventListener("click", () => {
  var printStyle = document.createElement("style");
  printStyle.type="text/css";
  printStyle.id="printStyle";
  printStyle.href = "style.css";
  removePrintStyles();
  document.head.appendChild(printStyle);

  var printScript = document.createElement("script");
  printScript.type = "text/javascript";
  printScript.id = "printScript";
  printScript.innerHTML = "window.print()";
  document.head.appendChild(printScript);
  document.head.removeChild(document.getElementById("printScript"));
  document.head.removeChild(document.getElementById("printStyle"));
});

function removePrintStyles(){
  var links = document.getElementsByTagName("link");
  for(link of links){
    if(link.media == "print"){
      link.parentNode.removeChild(link);
    }
  }
}

/*function renameDays(){
  var daysIT = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];
  var days = document.getElementsByClassName("fc-day-header").innerHTML;
  if(daysIT.length == days.length){
    for(var i = 0; i < days.length; i++){
      days[i].innerHTML = daysIT[i];
    }
  }
}*/
