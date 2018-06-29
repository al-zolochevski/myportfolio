document.querySelectorAll('.js-typing').forEach(function (element) {

    var text = element.innerText;
    var typewriter = new Typewriter(element, {
        loop: true
    });

    typewriter.typeString(text).pauseFor(3000).start();
});
