
const hizmetlerLink = document.getElementById("hizmetler-link");
const hizmetMenu = document.getElementById("hizmetmenu");
const eticaret = document.getElementById("eticaret")
const eticaretMenu = document.getElementById("eticaretMenu");
const projelerLink = document.querySelector("#projelerLink");
const projeMenu = document.getElementById("projemenu");
const arrowIcon = hizmetlerLink.querySelector(".arrow");
const arrowIconProjects = projelerLink.querySelector(".arrow");
const menuBarCheckBox = document.getElementById("menu-bar");
const menuicon = document.getElementById("menuicon");



menuBarCheckBox.addEventListener("change", function () {
    if (menuBarCheckBox.checked) {
        menuicon.textContent="close";
    } else {
        menuicon.textContent="menu";
    }
});


hizmetlerLink.addEventListener("click", function (e) {
    projeMenu.style.display = "none";
    arrowIconProjects.classList.remove("open");

    e.preventDefault();
    hizmetMenu.style.display = hizmetMenu.style.display === "block" ? "none" : "block";
    arrowIcon.classList.toggle("open");
    e.stopPropagation();
});


eticaret.addEventListener("click", (e) => {
    e.preventDefault();
    eticaretMenu.style.display = eticaretMenu.style.display === "block" ? "none" : "block";


})


hizmetMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});

eticaret.addEventListener("click", function (e) {
    e.stopPropagation();
});


projelerLink.addEventListener("click", function (e) {
   
    e.preventDefault();
    projeMenu.style.display = projeMenu.style.display === "block" ? "none" : "block";
    arrowIconProjects.classList.toggle("open");
    e.stopPropagation();
    hizmetMenu.style.display = "none";
    arrowIcon.classList.remove("open");

})


document.addEventListener("click", function () {
    hizmetMenu.style.display = "none";
    eticaretMenu.style.display = "none";
    arrowIcon.classList.remove("open");
    arrowIconProjects.classList.remove("open");
    projeMenu.style.display = "none";
});

















