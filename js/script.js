window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "#111";
        document.getElementById("navbar").style.padding = "1.2rem 0";
    } 
    else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "1.5rem 0";
    }
    if (document.body.scrollTop > 100) {
        $('.scroll-up-btn').addClass('show');
    }
    else {
        $('.scroll-up-btn').removeClass('show');
    }
}

//toggle Navibar minisize
$('.menu-btn').click(() => {
    $('.menu').toggleClass("active");
});

//slide up script
$('.scroll-up-btn').click(() => {
    $('html').animate({scrollTop:0});
});

//typing animation scripts
var typed = new Typed(".typing-1", {
    strings: ["Developer", "Designer", "Automation Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    smartBackspace: false
})
var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Automation Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    smartBackspace: false
})