document.addEventListener('DOMContentLoaded', () => {
    init();
    update();
});

document.addEventListener('hashchange', () => {
    init();
    update();
});

function init() {
    let settings = JSON.parse(atob(location.hash.substr(1)));
    container = document.createElement("div");
    container.id = "starField";
    document.getElementsByTagName("main")[0].appendChild(container);
    vista = new SpaceVista(settings.seed, window.innerWidth / 2, window.innerHeight / 2, {
        color: kelvinToRGB(settings.parameters.temperature),
        size: settings.parameters.size
    });
    container.appendChild(vista.canvas);
}

function update() {
    var result = vista.update();
    if (result.op != "done") {
        requestAnimationFrame(update);
    }
}

function kelvinToRGB(kelvin) {
    var temp = kelvin / 100;
    var red, green, blue;
    if (temp <= 66) {
        red = 255;
        green = temp;
        green = 99.4708025861 * Math.log(green) - 161.1195681661;
        if (temp <= 19) {
            blue = 0;
        } else {
            blue = temp - 10;
            blue = 138.5177312231 * Math.log(blue) - 305.0447927307;
        }
    } else {
        red = temp - 60;
        red = 329.698727446 * Math.pow(red, -0.1332047592);
        green = temp - 60;
        green = 288.1221695283 * Math.pow(green, -0.0755148492);
        blue = 255;
    }
    return {
        r: clamp(red, 0, 255),
        g: clamp(green, 0, 255),
        b: clamp(blue, 0, 255)
    }
}



function clamp( x, min, max ) {
    if(x<min){ return min; }
    if(x>max){ return max; }
    return x;
}