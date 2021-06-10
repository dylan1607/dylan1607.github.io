window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.background = "#111";
    document.getElementById("navbar").style.padding = "0.5rem 0";

    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "1.5rem 0";

    }
}

$('.menu-btn').click(() => {
    $('.menu').toggleClass("active");
});
