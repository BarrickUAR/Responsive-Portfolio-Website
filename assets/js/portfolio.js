
var baslik = document.title;
var yeniBaslik = "Portfolyo Sitesi";

window.onblur = function () {
  document.title = yeniBaslik;
}

window.onfocus = function () {
  document.title = baslik;
}

// Cursor Start

document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
  t.style.left = n.clientX + "px",
    t.style.top = n.clientY + "px",
    e.style.left = n.clientX + "px",
    e.style.top = n.clientY + "px",
    i.style.left = n.clientX + "px",
    i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");
function n(t) {
  e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
}
function s(t) {
  e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
}
s();
for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}

//  Cursor End


// HamburgerMenu Start

function toggleMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const menuLinks = document.getElementById("menu-links");

  menuLinks.classList.toggle("show");

  if (menuLinks.classList.contains("show")) {
    menuIcon.innerHTML = "&#x2715;";
  } else {
    menuIcon.innerHTML = "&#9776;";
  }

}

// HamburgerMenu End


// Skills Shake Start

document.addEventListener('DOMContentLoaded', function () {
  var skills = document.querySelectorAll('.skill');

  skills.forEach(function (skill) {
    skill.addEventListener('mouseover', function () {
      skill.classList.add('animated');
      setTimeout(function () {
        skill.classList.remove('animated');
      }, 1000); // 1000 ms (1 saniye) sonra animasyonu kaldır
    });
  });
});

// Skills Shake End




