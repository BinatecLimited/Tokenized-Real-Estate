const header = document.getElementById("header");
const closeBtn = document.getElementById("closeBtn")
const mobileMenu = document.getElementById("mobileMenu")
const hamburgerMenu = document.getElementById("hamburger")

visualViewport.onscroll = () => {
    header.style.position = "fixed"
    header.style.backgroundColor = "rgba(128, 128, 128, 0.123)"
    header.style.transition = "0.3s ease-in"
    // header.classList.toggle("headerStyle");
    header.style.backdropFilter = "blur(4px)";
    header.style.boxShadow = "0 0 10px 0 rgba(0, 0, 0, 0.295)";
    header.style.borderBottom = "1px solid rgb(187, 187, 187)";
}

    $(document).ready(function () {    $(".accordion-title").click(function (e) {      var accordionitem = $(this).attr("data-tab");      $("#" + accordionitem)        .slideToggle()        .parent()        .siblings()        .find(".accordion-content")        .slideUp();      $(this).toggleClass("active-title");      $("#" + accordionitem)        .parent()        .siblings()        .find(".accordion-title")        .removeClass("active-title");      $("i.fa-chevron-down", this).toggleClass("chevron-top");      $("#" + accordionitem)        .parent()        .siblings()        .find(".accordion-title i.fa-chevron-down")        .removeClass("chevron-top");    });  });

closeBtn.onclick = () => {
    mobileMenu.style.display = "none"
}

hamburgerMenu.onclick = function() {
    mobileMenu.style.display = "block"
}