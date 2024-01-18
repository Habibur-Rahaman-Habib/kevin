(function ($) {

    /*
    1. Scroll top button
    2. Preloader
    3. page slider
    4. Fancybox
    5. wow js
    6. filter
    7. Header Sticky
    8. Button Hover js
    9. Service Hover Function
    10. counter UP
    11. type js
    12. portfolio vertical slider with timer
    */


    //1. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });

    //2. Preloader
    setTimeout(() => {
        $('.preloader').fadeOut()
    }, 1800);

    // 3. page  slider

    /********* Testimonial  slider **************/
    $(".testi_wrap").slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]

    });

    /********* brand slider **************/
    $(".brand_slider").slick({
        slidesToShow: 5,
        autoplay: true,
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });

    /********* blog slider **************/
    $(".blog_slider").slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    /********* Get in slider **************/
    $(".get_slider").slick({
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    /********* records slider **************/
    $(".record_slider").slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    //4. Fancybox
    Fancybox.bind("[data-fancybox]", {});

    //5. wow js
    new WOW().init();

    // 6. filter
    /******* home page filter ******/
    var $grid = $('.portfolio_item_active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });

    $('.portfolio_button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $(".portfolio_button button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".portfolio_button").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });


    /******* blog page filter ******/
    $('.blog_button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $(".blog_button button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".blog_button").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });

    //7. Header Sticky
    $(window).scroll(function () {

        if ($(window).scrollTop() > 200) {
            $('.header_bottom').addClass('fixed_menu');
        } else {
            $('.header_bottom').removeClass('fixed_menu');
        }
    });


    //8. Button Hover JS
    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });

    //9. service hover function
    $(".service_item").each(function () {

        $(this).hover(function () {
            $(this).parents(".service_item_box").find(".service_item.active").removeClass("active");
            $(this).addClass("active");
            var case_active = $(this).data("case");

            $(".service_item_box img.active").removeClass("active");
            $(".service_item_box ." + case_active + "").addClass("active");
        });

    });

    // 10. counterUP
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 1500
        });
    });

    // 11. typed js
    $(function () {
        $(".typed").typed({
            strings: ["UX/UI Designer.", "Web Developer.", "Graphics Desiger.", "Digital Marketer."],
            stringsElement: null,
            typeSpeed: 30,
            startDelay: 1200,
            backSpeed: 20,
            backDelay: 500,
            loop: true,
            loopCount: 5,
            showCursor: false,
            cursorChar: "|",
            attr: null,
            contentType: 'html',
            callback: function () { },
            preStringTyped: function () { },
            onStringTyped: function () { },
            resetCallback: function () { }
        });
    });

    // 12. protfolio verticle slider
    $(document).ready(function () {
        let slideIndex = 0;
        let timerSeconds = 0;
        let timerMilliseconds = 0;

        function updateTimerDisplay() {
            $('#timer').text(`${timerSeconds} . ${timerMilliseconds}`);
        }

        function startSlideInterval() {
            return setInterval(() => {
                // Update the timer
                timerMilliseconds += 100;
                if (timerMilliseconds >= 1000) {
                    timerSeconds++;
                    timerMilliseconds = 0;
                }

                updateTimerDisplay();

                // Restart the timer after 10 seconds and slide to the next one
                if (timerSeconds >= 5) {
                    timerSeconds = 0;
                    timerMilliseconds = 0;
                    $('.slides').slick('slickNext');
                }
            }, 100);
        }

        $('.slides').slick({
            slidesToShow: 4,
            vertical: true,
            dots: true,
            arrows: false,
            dotsClass: 'dots-container',
            customPaging: function (slider, i) {
                return '<div class="dot"></div>';
            },
            speed: 500, // transition speed in milliseconds (10 seconds)
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 1,
                        vertical: false,
                    }
                },
            ],
        });

        let slideInterval = startSlideInterval();

        $('.dots-container .dot').on('click', function () {
            clearInterval(slideInterval);
            slideIndex = $(this).index();
            timerSeconds = 0;
            timerMilliseconds = 0;
            updateTimerDisplay();
            slideInterval = startSlideInterval();
        });

        $('.slider-container').hover(
            function () {
                clearInterval(slideInterval);
            },
            function () {
                slideInterval = startSlideInterval();
            }
        );
    });


})(jQuery)

