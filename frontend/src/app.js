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
    seed: "ewwwwee",
    exoplanetParams: {
      mass: 10,
      temperature: 10,
      star_name: "11 Com",
      star_sp_type: "M9"
    },
    starParams: {
      seed: 12431231,
      temperature: [0.2, 0.3, 0.2],
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
      radius: 10,
    },

  },
  methods: {
    fromSeedPopulate: function(val, oldVal) {
      Math.random = Alea(val);
      console.log("seed setup");
      console.log(structs)
      result = doGen("planet");
      console.log(result)
      this.planetParams.vWaterLevel = eval(doExpand(result.struct.vals["watL"], result));
      this.planetParams.vTemperature = eval(doExpand(result.struct.vals["temp"], result));
      this.planetParams.vRivers = eval(doExpand(result.struct.vals["rive"], result));
      this.planetParams.vCold = eval(doExpand(result.struct.vals["coldC"], result));
      this.planetParams.vOcean = eval(doExpand(result.struct.vals["oceanC"], result)) || [0.05, 0.22, 0.38];
      this.planetParams.vTemperate = eval(doExpand(result.struct.vals["temperateC"], result));
      this.planetParams.vWarm = eval(doExpand(result.struct.vals["warmC"], result));
      this.planetParams.vHot = eval(doExpand(result.struct.vals["hotC"], result));
      this.planetParams.vSpeckle = eval(doExpand(result.struct.vals["speckleC"], result));
      this.planetParams.vLightColor = eval(doExpand(result.struct.vals["lightC"], result));
      this.planetParams.vHaze = eval(doExpand(result.struct.vals["hazeC"], result)) || [0.15, 0.15, 0.2];

      this.planetParams.vCloudiness = Math.min(1.5, Math.max(0, eval(doExpand(result.struct.vals["clouds"], result))));
      this.planetParams.vClouds = eval(doExpand(result.struct.vals["cloudC"], result)) || [0.9, 0.9, 0.9];
      this.planetParams.vAngle = 0.6 * Math.random();
      this.planetParams.vRotspeed = (0.005 + Math.random() * 0.01) * (Math.random() < 0.3 ? -1 : 1) * eval(doExpand(result.struct.vals["rotspeedMult"], result));;
      this.planetParams.vLight = 4 * Math.random();
      this.planetParams.vZLight = 0.2 + Math.random();
      this.planetParams.vModValue = 17 + Math.ceil(Math.random() * 20);
      this.planetParams.vNoiseOffset = [Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)];
      this.planetParams.vNoiseScale = [7 + Math.ceil(Math.random() * 10), 5 + Math.ceil(Math.random() * 7)];
      var sc = 80 + Math.ceil(Math.random() * 220);
      this.planetParams.vNoiseScale2 = [sc, sc];
      sc = 20 + Math.ceil(Math.random() * 80);
      this.planetParams.vNoiseScale3 = [sc, sc];
      this.planetParams.vCloudNoise = [4 + Math.ceil(Math.random() * 9), 20 + Math.ceil(Math.random() * 20)];
    }
  },
  watch: {
    exoplanetParams: {
      handler: function (val, oldVal) {
        let starTemp = kelvinToRGB(spectralTypeToTemp(val.star_sp_type));
        console.log("hey")
        this.starParams.temperature = starTemp

1
        this.planetParams.vCloudiness = val.mass / 100;
        this.planetParams.vLightColor = starTemp;
        this.planetParams.radius = val.radius;
      },
      deep: true
    },
    seed: this.fromSeedPopulate
  },
  mounted: function () {
    console.log("generating initial params")
    this.fromSeedPopulate(this.seed, null);
  },

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