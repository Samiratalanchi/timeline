function displayTimeLine() {
    document.getElementById("progress").style.animation="timeline 12s forwards linear";

    document.getElementById("year").style.animation="shadow 100ms linear forwards";
    document.getElementById("jan").style.animation="changecolor 100ms linear forwards 1440ms";
    document.getElementById("feb").style.animation="changecolor 100ms linear forwards 2400ms";
    document.getElementById("mar").style.animation="changecolor 100ms linear forwards 3360ms";
    document.getElementById("apr").style.animation="changecolor 100ms linear forwards 4320ms";
    document.getElementById("may").style.animation="changecolor 100ms linear forwards 5280ms";
    document.getElementById("jun").style.animation="changecolor 100ms linear forwards 6240ms";
    document.getElementById("jul").style.animation="changecolor 100ms linear forwards 7200ms";
    document.getElementById("aug").style.animation="changecolor 100ms linear forwards 8160ms";
    document.getElementById("sep").style.animation="changecolor 100ms linear forwards 9120ms";
    document.getElementById("oct").style.animation="changecolor 100ms linear forwards 10080ms";
    document.getElementById("nov").style.animation="changecolor 100ms linear forwards 11040ms";
    document.getElementById("dec").style.animation="changecolor 100ms linear forwards 12000ms";

    document.getElementById("card-jan").style.animation="display 500ms linear forwards 1440ms";
    document.getElementById("card-mar").style.animation="display 500ms linear forwards 3360ms";
    document.getElementById("card-apr").style.animation="display 500ms linear forwards 4320ms";
    document.getElementById("card-jul").style.animation="display 500ms linear forwards 7200ms";
    document.getElementById("card-aug").style.animation="display 500ms linear forwards 8160ms";
    document.getElementById("card-sep").style.animation="display 500ms linear forwards 9120ms";
    document.getElementById("card-oct").style.animation="display 500ms linear forwards 10080ms";
}