const starTypes = {
  "O": 30000,
  "B": 15000,
  "A": 8500,
  "F": 6500,
  "G": 5500,
  "K": 4000,
  "M": 3000,
}

function spectralTypeToTemp(name) {
  return starTypes[name[0]]
}

var vm = new Vue({
  el: '#app',
  data: {
    debug: true,
    exoplanetParams: {
      mass: 10,
      temperature: 10,
      star_name: "11 Com",
      star_sp_type: "M9"
    },
    starParams: {
      seed: Math.random() * 9999999999999,
      temperature: kelvinToRGB(Math.random() * 4000),
      size: Math.random()
    },
    planetParams: {
      vWaterLevel: 0,
      vRivers: 0,
      vTemperature: 0,
      // regions from poles to mid
      vCold: [0.5, 0.5, 0.5],
      vOcean: [0.5, 0.5, 0.5],
      vTemperate: [0.5, 0.5, 0.5],
      vWarm: [0.5, 0.5, 0.5],
      vHot: [0.5, 0.5, 0.5],

      vSpeckle: [0.5, 0.5, 0.5],
      vClouds: [0.9, 0.9, 0.9],
      vCloudiness: 0.35,
      vLightColor: kelvinToRGB(Math.random() * 4000),
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
      radius: 10,
    },

  },
  watch: {
    exoplanetParams: {
      handler: function (val, oldVal) {
        let starTemp = kelvinToRGB(spectralTypeToTemp(val.star_sp_type));
        console.log("hey")
        this.starParams.temperature = starTemp


        this.planetParams.vCloudiness = val.mass / 100;
        this.planetParams.vLightColor = starTemp;
        this.planetParams.radius = val.radius;
      },
      deep: true
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
  return [clamp(red, 0, 255) / 255, clamp(green, 0, 255) / 255, clamp(blue, 0, 255) / 255]

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