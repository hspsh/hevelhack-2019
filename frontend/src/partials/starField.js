document.addEventListener('DOMContentLoaded', () => {
    
    init();
    update();
});

function getSeed() {
    return btoa(Math.floor(Math.random() * 9999999999999)).replace("=", "").replace("=", "")
}

function init() {
    container = document.createElement("div");
    container.id = "starField";
    document.getElementsByTagName("main")[0].appendChild(container);
    vista = new SpaceVista(getSeed(), window.innerWidth / 1.5, window.innerHeight / 1.5, true, true, false, true);
    container.appendChild(vista.canvas);
}

function update() {
    var result = vista.update();
    if (result.op != "done") {
        requestAnimationFrame(update);
    }
}