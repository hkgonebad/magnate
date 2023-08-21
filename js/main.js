///////////////////////////////////
$(function() {

    // Header
    const headerUrl = "header.html";
    $("#header").load(headerUrl, function() {

        // Active
        const currentUrl = window.location.href;
        $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
            if (this.href === currentUrl) {
                $(this).addClass("active");
            }
        });
    })

    // Work Together CTA
    const wtCtaUrl = "work-together.html";
    $("#workTogether").load(wtCtaUrl, function() {
        
    });

    // Footer
    const footerUrl = "footer.html";
    $("#footer").load(footerUrl, function() {

    });

    // Main Slider
    if ($('.mainSlider').length > 0) {

        $('.mainSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplayDuration: 3000,
            arrows: true,
            prevArrow: $('.prevMs'),
            nextArrow: $('.nextMs'),
        });
    }


    // Industry Slider
    if ($('.industrySlider').length > 0) {

        $('.industrySlider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            dots: false,
            speed: 300,
            centerPadding: '20px',
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true
        });
    }

})