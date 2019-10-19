import {SpaceVista, StarRenderer, SunRenderer, NebulaRenderer} from '../js/spaceVista.js'

export function landing() {
    let container = document.createElement("starField");
    let main = document.getElementsByTagName("main")[0];
    main.appendChild(container);

    let getSeed = function () {
        return btoa(Math.floor(Math.random() * 9999999999999)).replace("=", "").replace("=", "")
    }
    let vista = new SpaceVista(getSeed(), window.innerWidth, window.innerHeight, true, true, true, true);
    container.appendChild(vista.canvas);
}