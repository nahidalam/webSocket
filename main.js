function showHide(){
  //var btn = document.getElementById("btnSubmit");
  var hiddenitems = document.getElementsByClassName("hidden");
  for (var i =0; i!=hiddenitems.length;i++){
    hiddenitems[i].style.display="inline";
  }
}
function showHideLocal(){
  //var btn = document.getElementById("btnSubmit");
  var hiddenitems = document.getElementsByClassName("hiddenLocalButton");
  for (var i =0; i!=hiddenitems.length;i++){
    hiddenitems[i].style.display="inline";
  }
  var text = document.getElementsByClassName("message");
  for (var i =0; i!=text.length;i++){
    text[i].style.display="none";
  }
}

function loadInitial(){
  var hiddenitems = document.getElementsByClassName("hidden");
  for (var i =0; i!=hiddenitems.length;i++){
    hiddenitems[i].style.display="none";
  }
  var hiddentext = document.getElementsByClassName("hiddenLocalMsg");
  for (var i =0; i!=hiddentext.length;i++){
    hiddentext[i].style.display="none";
  }

}

function doLocal(){
  var hiddenitems = document.getElementsByClassName("hidden");
  for (var i =0; i!=hiddenitems.length;i++){
    hiddenitems[i].style.display="none";
  }
  var hiddentext = document.getElementsByClassName("hiddenLocalMsg");
  for (var i =0; i!=hiddentext.length;i++){
    hiddentext[i].style.display="inline";
  }
}
function doDist(){

}
function doGT(){

}
