document.oncontextmenu = document.body.oncontextmenu = function() {return false;}



function openCity01(evt, cityName01) {
  var i, tabcontent01, tablinks01;
  tabcontent01 = document.getElementsByClassName("tabcontent01");
  for (i = 0; i < tabcontent01.length; i++) {
    tabcontent01[i].style.display = "none";
  }
  tablinks01 = document.getElementsByClassName("tablinks01");
  for (i = 0; i < tablinks01.length; i++) {
    tablinks01[i].className = tablinks01[i].className.replace(" active", "");
  }
  document.getElementById(cityName01).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen01").click();






function openCity(evt, cityName) {
  var i, tabcontent, btnmenu;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  btnmenu = document.getElementsByClassName("btnmenu");
  for (i = 0; i < btnmenu.length; i++) {
    btnmenu[i].className = btnmenu[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();