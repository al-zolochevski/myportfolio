document.querySelectorAll('.js-typing').forEach(function (element) {

    var text = element.innerText;
    var typewriter = new Typewriter(element, {
        loop: true
    });

    typewriter.typeString(text).pauseFor(3000).start();
});


$.fn.isOnScreen = function () {
    var rect = this[0].getBoundingClientRect();
    return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
};

$(window).on("scroll", function () {
    var elem = $("#test-circle");
    var circleWasNotDrawn = !elem.hasClass("svg-container");

    if (elem.isOnScreen() && circleWasNotDrawn) {
        elem.circliful({
            animationStep: 7,
            fontColor: "#efefef",
            percentageY: 110,
            percentageX: 101,
            foregroundBorderWidth: 6,
            backgroundBorderWidth: 0,
            percent: 95,
            foregroundColor: "#2e6fd1"
        });
    }

    var elem = $("#test-circle2");
    var circleWasNotDrawn = !elem.hasClass("svg-container");

    if (elem.isOnScreen() && circleWasNotDrawn) {
        elem.circliful({
            animationStep: 6,
            fontColor: "#efefef",
            percentageY: 110,
            percentageX: 101,
            foregroundBorderWidth: 6,
            backgroundBorderWidth: 0,
            percent: 85,
            foregroundColor: "#2e6fd1"
        });
    }

    var elem = $("#test-circle3");
    var circleWasNotDrawn = !elem.hasClass("svg-container");

    if (elem.isOnScreen() && circleWasNotDrawn) {
        elem.circliful({
            animationStep: 5,
            fontColor: "#efefef",
            percentageY: 110,
            percentageX: 101,
            foregroundBorderWidth: 6,
            backgroundBorderWidth: 0,
            percent: 85,
            foregroundColor: "#2e6fd1"
        });
    }

    var elem = $("#test-circle4");
    var circleWasNotDrawn = !elem.hasClass("svg-container");

    if (elem.isOnScreen() && circleWasNotDrawn) {
        elem.circliful({
            animationStep: 4,
            fontColor: "#efefef",
            percentageY: 110,
            percentageX: 101,
            foregroundBorderWidth: 6,
            backgroundBorderWidth: 0,
            percent: 85,
            foregroundColor: "#2e6fd1"
        });
    }

});
