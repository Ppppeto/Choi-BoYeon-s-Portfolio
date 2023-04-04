$("document").ready(function(){
    let typed = new Typed("#typed1", {
        stringsElement: "#typed",
        typeSpeed: 100
    })
    $("#wave-1").wavify({
        height: 800,
        bones: 4,
        color: "#1565cd",
        speed: 0.15,
        amplitude: 40
    })
    $("#wave-2").wavify({
        height: 700,
        bones: 4,
        color: "#1a237e",
        speed: 0.25,
        amplitude: 50
    })
})