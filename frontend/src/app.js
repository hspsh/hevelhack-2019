let starTemp = kelvinToRGB(Math.random() * 4000);

var vm = new Vue({
    el: '#app',
    data: {
        debug: true,
        exoplanetParams: {
            star_name: "11 Com",
            star_sp_type: "M9"
        },
        starParams: {
            seed: 5349408744368,
            temperature: starTemp,
            size: Math.random()
        },
        planetParams: {
            vWaterLevel: 0,
            vRivers: 0,
            vTemperature: 0,
            vCold: [0.5, 0.5, 0.5],
            vOcean: [0.5, 0.5, 0.5],
            vTemperate: [0.5, 0.5, 0.5],
            vWarm: [0.5, 0.5, 0.5],
            vHot: [0.5, 0.5, 0.5],
            vSpeckle: [0.5, 0.5, 0.5],
            vClouds: [0.9, 0.9, 0.9],
            vCloudiness: 0.35,
            vLightColor: starTemp,
            vHaze: [0.15, 0.15, 0.2],

            vAngle: 0.3,
            vRotspeed: 0.01,
            vLight: 60, // shouldn't change
            vZLight: -0.7,
            vModValue: 29,
            vNoiseOffset: [0, 0],
            vNoiseScale: [11, 8],
            vNoiseScale2: [200, 200],
            vNoiseScale3: [50, 50],
            vCloudNoise: [6, 30],
        },

    },
    watch: {
        exoplanetParams: function () {
            return this.firstName + ' ' + this.lastName
        }
    }

})


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
    return [clamp(red, 0, 255)/255, clamp(green, 0, 255)/255, clamp(blue, 0, 255)/255]
    
}



function clamp(x, min, max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}