import {landing} from './partials/landing'
import {details} from './partials/details'
import {remix} from './partials/remix'
import {list} from './partials/list'

window.addEventListener("hashchange", route);
route();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () {
                console.log('rocket.watch serviceworker install successful');
            })

            .catch(function (err) {
                console.log('rocket.watch serviceworker install failed: ', err);
            });
    });
}

function route() {
    document.getElementsByTagName("main")[0].innerHTML = "";
    let path = QueryString();
    if (path.landing) {
        landing()
    }
    if (path.details) {
        details()
    }
    if (path.remix) {
        remix()
    }
    if (path.list) {
        list()
    }
}

function QueryString(url) {
    let g = {};
    let l = (url && url.split("?")[1]) || (window.location.search || location.hash).substring(1);
    let k = l.split("&");
    for (let m = 0; m < k.length; m++) {
        let j = k[m].split("=");
        if (typeof g[j[0]] === "undefined") {
            g[j[0]] = decodeURIComponent(j[1])
        } else {
            if (typeof g[j[0]] === "string") {
                let h = [g[j[0]], decodeURIComponent(j[1])];
                g[j[0]] = h
            } else {
                g[j[0]].push(decodeURIComponent(j[1]))
            }
        }
    }
    return g
}