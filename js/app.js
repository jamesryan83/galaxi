"use strict";

$(document).ready(function () {


    // ------------------------------ SVG Animations ------------------------------


    // initial positioning
    $("#some-content-container").css({ top: window.innerHeight, height: window.innerHeight });
    $("#main-container").css({ height: parseInt($("#trigger7").css("top")) + (window.innerHeight * 2) });


    // setup tweens
    var controller = new ScrollMagic.Controller({ addIndicators: false });

    var tweenBGColor = new TweenMax.to("#main-container", 1, { backgroundColor: "#062262" });
    var tweenStars1 = new TweenMax.to("#stars1", 1, { top: -(window.innerHeight * 1.3) });
    var tweenStars2 = new TweenMax.to("#stars2", 1, { top: -300 });
    var tweenMountain = new TweenMax.to("#mountain", 1, { bottom: -3 });
    var tweenMoon = new TweenMax.to("#moon", 1, { left: 100, top: 100 });
    var tweenCity1 = new TweenMax.to("#city1", 1, { bottom: -3 });
    var tweenCity2 = new TweenMax.to("#city2", 1, { bottom: -3 });
    var tweenPlane = new TweenMax.to("#plane", 1, { bottom: window.innerHeight - 210 });

    var tweenCity1Last = new TweenMax.to("#city1", 1, { bottom: window.innerHeight });
    var tweenCity2Last = new TweenMax.to("#city2", 1, { bottom: window.innerHeight });
    var tweenSomeContent = new TweenMax.to("#some-content-container", 1, { top: 0 });



    // setup scenes

    // stars1
    new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 2000
    })
    .triggerHook(0)
    .setTween(tweenStars1)
    .addTo(controller);

    // stars2
    new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 3000
    })
    .triggerHook(0)
    .setTween(tweenStars2)
    .addTo(controller);

    // background
    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 2000
    })
    .triggerHook(0)
    .setTween(tweenBGColor)
    .addTo(controller);

    // moon
    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 1000
    })
    .triggerHook(0)
    .setTween(tweenMoon)
    .addTo(controller);

    // mountain
    new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 600
    })
    .triggerHook(0)
    .setTween(tweenMountain)
    .addTo(controller);

    // city1
    new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        duration: 600
    })
    .triggerHook(0)
    .setTween(tweenCity1)
    .addTo(controller);

    // city2
    new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: 600
    })
    .triggerHook(0)
    .setTween(tweenCity2)
    .addTo(controller);

    // plane
    new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 600
    })
    .triggerHook(0)
    .setTween(tweenPlane)
    .addTo(controller);



    // tweenCity1Last
    new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        duration: window.innerHeight
    })
    .triggerHook(0)
    .setTween(tweenCity1Last)
    .addTo(controller);

    // tweenCity2Last
    new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        duration: window.innerHeight
    })
    .triggerHook(0)
    .setTween(tweenCity2Last)
    .addTo(controller);

    // tweenSomeContent
    new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        duration: window.innerHeight
    })
    .triggerHook(0)
    .setTween(tweenSomeContent)
    .addTo(controller);






    // plane movement
    function planeMovement () {
        new TweenMax.fromTo("#plane", 7,
                            { left: -100 },
                            { left: window.innerWidth + 20, ease:Linear.easeNone });
    }

    setInterval(function () {
        planeMovement();
    }, 20000);
    planeMovement();





    // Shooting stars
    function shootingStar () {
        var startLeft = Math.random() > 0.5 ? window.innerWidth + 100 : -100;
        var endLeft = startLeft === -100 ? window.innerWidth + 100 : -100;

        var startTop = Math.floor((Math.random() * (window.innerHeight / 4)) + 50);
        var endTop = Math.floor((Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 2));

        var angle = Math.atan((startTop - endTop) / (startLeft - endLeft)) * (180 / Math.PI);
        if (startLeft === -100) {
            angle += 180;
        }

        new TweenMax.fromTo("#shooting-star", 2, {
            left: startLeft,
            top: startTop,
            scale: 1,
            opacity: 1,
            rotation: angle
        }, {
            left: endLeft,
            top: endTop,
            scale: 0.3,
            opacity: 0
        });
    }

    setInterval(function () {
        shootingStar();
    }, 8000);
    shootingStar();






    // ------------------------------ Text Animations ------------------------------

    var tweenTitle = new TweenMax.to("#text-title", 1, { opacity: 0, top: 160, left: 100 });
    var tweenLinks = new TweenMax.to("#main-links", 1, { right: (window.innerWidth / 2) - 120 });
    var tweenFloatingText1 = new TweenMax.to("#text-floating-1", 1, { opacity: 1, top: "20%" });
    var tweenFloatingText1_2 = new TweenMax.to("#text-floating-1", 1, { opacity: 0, top: "10%" });


    // title
    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 2000
    })
    .triggerHook(0)
    .setTween(tweenTitle)
    .addTo(controller);

    // main links
    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 2000
    })
    .triggerHook(0)
    .setTween(tweenLinks)
    .addTo(controller);

    // floating text 1 in
    new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 1000
    })
    .triggerHook(0)
    .setTween(tweenFloatingText1)
    .addTo(controller);

    // floating text 1 out
    new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        duration: 200
    })
    .triggerHook(0)
    .setTween(tweenFloatingText1_2)
    .addTo(controller);




    // ------------------------------ some-content-container  ------------------------------

    // resize event
    function resizeSomeContent() {
        // get height of skew difference
        var w1 = $("#content-item-1").width();
        var y1 = Math.sin(3 * (Math.PI / 180)) * w1;

        $("#some-content-container").css({ "padding-top": (y1 * 3) });
        $("#some-content").css({ height: window.innerHeight - (y1 * 6) });

        // move elements down a bit so they line up when skewed
        $("#content-item-2").css({ top: y1 });
        $("#content-item-3").css({ top: (y1 * 2) });
        $("#content-item-5").css({ top: parseInt($("#content-item-4").css("top")) + y1 });
        $("#content-item-6").css({ top: parseInt($("#content-item-4").css("top")) + (y1 * 2) });
    }

    $(window).resize(function () {
        // fix for maximize - http://stackoverflow.com/a/29809396 - doesn't seem to always work
        setTimeout(function () {
            resizeSomeContent();
        }, 100);
    });
    resizeSomeContent();



    // Animations on content item images on hover
    $(".content-item").on("mouseenter", function () {

        var el = $(this).find(".content-img");

        switch($(this).attr("id")) {
            case "content-item-1" :
                new TimelineMax()
                    .to(el, 0.1, { x: -10, rotation: -15 })
                    .to(el, 2, { x: 0, rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });
                break;

            case "content-item-2" :
                new TimelineMax()
                    .to(el, 0.1, { scale: 1.2 })
                    .to(el, 2, { scale: 1, ease: Elastic.easeOut.config(0.9, 0.1) });
                break;

            case "content-item-3" :
                new TimelineMax()
                    .to(el, 0.1, { skewX: 15 })
                    .to(el, 2, { skewX: 0, ease: Elastic.easeOut.config(0.9, 0.1) });
                break;

            case "content-item-4" :
                new TimelineMax()
                    .to(el, 0.1, { rotation: 20 })
                    .to(el, 2, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });
                break;

            case "content-item-5" :
                new TimelineMax()
                    .to(el, 0.1, { scale: 1.1, y: -10 })
                    .to(el, 2, { scale: 1, y: 0, ease: Elastic.easeOut.config(0.9, 0.1) });
                break;

            case "content-item-6" :
                new TimelineMax()
                    .to(el, 0.1, { x: 10, y: -10 })
                    .to(el, 2, { x: 0, y: 0, ease: Elastic.easeOut.config(0.9, 0.1) });
                break;
        }
    });

    $(".content-item").on("mouseleave", function () {

        var el = $(this).find(".content-img");

        switch($(this).attr("id")) {
            case "content-item-1" :
                new TweenMax.to(el, 0.5, { x: 0, rotation: 0 });
                break;

            case "content-item-2" :
                new TweenMax.to(el, 0.5, { scale: 1 });
                break;

            case "content-item-3" :
                new TweenMax.to(el, 0.5, { skew: 0 });
                break;

            case "content-item-4" :
                new TweenMax.to(el, 0.5, { rotation: 0 });
                break;

            case "content-item-5" :
                new TweenMax.to(el, 0.5, { scale: 1, y: 0 });
                break;

            case "content-item-6" :
                new TweenMax.to(el, 0.5, { x: 0, y: 0 });
                break;
        }

    });




    // ------------------------------ Scroll Arrow ------------------------------

    $("#scroll-down").css({ top: window.innerHeight - 100 });

    new TweenMax.to("#scroll-arrow", 1, { top: -20, repeat: -1, yoyo: true });

    // show/hide scroll-down
    $(window).scroll(function (e) {
        if ($(window).scrollTop() == 0) {
            $("#scroll-down").show();
        } else {
            $("#scroll-down").hide();
        }
    });


});

