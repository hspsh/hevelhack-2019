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
      seed: Math.random() * Math.floor(9999999999999),
      temperature: Math.random() * 4000,
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
      vLightColor: [1.0, 1.0, 1.0],
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
    exoplanetParams: {
      handler: function (val, oldVal) {
        console.log("hey")
        this.starParams.temperature = spectralTypeToTemp(val.star_sp_type)

        
        this.planetParams.vCloudiness = val.mass / 100;
        this.planetParams.
      },
      deep: true
    }
  }

})