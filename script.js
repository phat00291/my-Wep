
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function opject() {
  document.getElementById("myopject").classList.toggle("opjectshow");
}

window.onclick = function(event) {
  if (!event.target.matches('.opjectbtn')) {
    let dropdowns = document.getElementsByClassName("opject-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('opjectshow')) {
        openDropdown.classList.remove('opjectshow');
      }
    }
  }
}
function patition() {
  document.getElementById("mypatition").classList.toggle("patitionshow");
}

window.onclick = function(event) {
  if (!event.target.matches('.patitionbtn')) {
    let dropdowns = document.getElementsByClassName("patition-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('patitionshow')) {
        openDropdown.classList.remove('patitionshow');
      }
    }
  }
}