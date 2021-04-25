window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.background = "black";
    document.getElementById("navbar").style.padding = "10px 0";

    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "30px 0";

    }
}

$('.menu-btn').click(() => {
    $('.menu').toggleClass("active");
});
