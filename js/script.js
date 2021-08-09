window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "#111";
        document.getElementById("navbar").style.padding = "10px 15px";
    } 
    else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "15px";
    }
    if (document.documentElement.scrollTop > 100) {
        $('.scroll-up-btn').addClass('show');
    }
    else {
        $('.scroll-up-btn').removeClass('show');
    }
}

//toggle Navibar minisize
$('.menu-btn, .backdrop').click(() => {
    $('.menu').toggleClass("active");
    $('.backdrop').toggleClass('active');
});


//slide up script
$('.scroll-up-btn').click(() => {
    $('html').scrollTop(0);
});

//typing animation scripts
var typed = new Typed(".typing-1", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    smartBackspace: false
})
var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    smartBackspace: false
})