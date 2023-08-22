//Header
var headerFixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 100) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };

// progress
var gotop = function() {
    if ($('div').hasClass('progress-wrap')) {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateprogress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateprogress();
    $(window).scroll(updateprogress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
}}

// Cursor
const cursor = function () {
    var myCursor = jQuery(".awz-mouse");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".awz-mouse-inner"),
          t = document.querySelector(".awz-mouse-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on(
            "mouseenter",
            "a, .link-text, .progress-wrap, .btn, .accordion-button, .nav-link",
            function () {
              e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
            }
          ),
          $("body").on(
            "mouseleave",
            "a, .link-text, .progress-wrap, .btn, .accordion-button, .nav-link",
            function () {
              ($(this).is("a") && $(this).closest(".canvas").length) ||
                (e.classList.remove("mouse-hover"),
                t.classList.remove("mouse-hover"));
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
};

///////////////////////////////////
$(function() {

    //Ukiyo
    new Ukiyo(".ukiyo");

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

        headerFixed();
    })

    // Work Together CTA
    const wtCtaUrl = "work-together.html";
    $("#workTogether").load(wtCtaUrl, function() {
        
    });

    // Footer
    const footerUrl = "footer.html";
    
    $("#footer").load(footerUrl, function() {
        cursor();
        gotop();
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
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                }}
            ]
        });
    }

})