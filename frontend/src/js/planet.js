const vertexShaderSource = document.getElementById("2d-vertex-shader").text;
const fragmentShaderSource = document.getElementById("planet-shader").text;

var canvas = document.getElementById("planet-view");
var structs = {};
var slots = {};

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function resize(canvas) {
  // Lookup the size the browser is displaying the canvas.
  var displayWidth = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;

  // Check if the canvas is not the same size.
  if (canvas.width != displayWidth ||
    canvas.height != displayHeight) {

    // Make the canvas the same size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
}

var gl = canvas.getContext("webgl");
// var vertexShaderSource = document.getElementById("2d-vertex-shader").text;
// var fragmentShaderSource = document.getElementById("planet-shader").text;
var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
var program = createProgram(gl, vertexShader, fragmentShader);
var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

// Uniform variables, locations to vars in shader program
// so we can change them

var uCities = gl.getUniformLocation(program, "cities");
var uTime = gl.getUniformLocation(program, "time");
var uLeft = gl.getUniformLocation(program, "left");
var uTop = gl.getUniformLocation(program, "top");
var uResolution = gl.getUniformLocation(program, "resolution");
var uAngle = gl.getUniformLocation(program, "angle");
var uRotspeed = gl.getUniformLocation(program, "rotspeed");
var uLight = gl.getUniformLocation(program, "light");
var uZLight = gl.getUniformLocation(program, "zLight");
var uLightColor = gl.getUniformLocation(program, "lightColor");
var uModValue = gl.getUniformLocation(program, "modValue");
var uNoiseOffset = gl.getUniformLocation(program, "noiseOffset");
var uNoiseScale = gl.getUniformLocation(program, "noiseScale");
var uNoiseScale2 = gl.getUniformLocation(program, "noiseScale2");
var uNoiseScale3 = gl.getUniformLocation(program, "noiseScale3");
var uCloudNoise = gl.getUniformLocation(program, "cloudNoise");
var uCloudiness = gl.getUniformLocation(program, "cloudiness");
var uOcean = gl.getUniformLocation(program, "ocean");
var uIce = gl.getUniformLocation(program, "ice");
var uCold = gl.getUniformLocation(program, "cold");
var uTemperate = gl.getUniformLocation(program, "temperate");
var uWarm = gl.getUniformLocation(program, "warm");
var uHot = gl.getUniformLocation(program, "hot");
var uSpeckle = gl.getUniformLocation(program, "speckle");
var uClouds = gl.getUniformLocation(program, "clouds");
var uWaterLevel = gl.getUniformLocation(program, "waterLevel");
var uRivers = gl.getUniformLocation(program, "rivers");
var uTemperature = gl.getUniformLocation(program, "temperature");
var uHaze = gl.getUniformLocation(program, "haze");

var positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
// three 2d points
var positions = [
  -1, -1,
  -1, 1,
  1, 1,
  -1, -1,
  1, 1,
  1, -1
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// wtf are you, default values???
// prob global vars used in animation loop

var data = {
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
  vLightColor: [1.0, 1.0, 1.0],
  vHaze: [0.15, 0.15, 0.2],

  vAngle: 0.3,
  vRotspeed: 0.01,
  vLight: 1.9,
  vZLight: 0.5,
  vModValue: 29,
  vNoiseOffset: [0, 0],
  vNoiseScale: [11, 8],
  vNoiseScale2: [200, 200],
  vNoiseScale3: [50, 50],
  vCloudNoise: [6, 30],
}

function renderPlanet() {
  resize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);
  gl.enableVertexAttribArray(positionAttributeLocation);
  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    positionAttributeLocation, size, type, normalize, stride, offset)

  gl.uniform1i(uCities, 0);
  gl.uniform1f(uTime, t * 0.001); // qqDPS
  gl.uniform1f(uLeft, -10);
  gl.uniform1f(uTop, -10);
  gl.uniform2f(uResolution, 380, 380);
  gl.uniform1f(uAngle, data.vAngle);
  gl.uniform1f(uRotspeed, data.vRotspeed);
  gl.uniform1f(uLight, data.vLight);
  gl.uniform1f(uZLight, data.vZLight);
  gl.uniform3fv(uLightColor, data.vLightColor);
  gl.uniform1f(uModValue, data.vModValue);
  gl.uniform2fv(uNoiseOffset, data.vNoiseOffset);
  gl.uniform2fv(uNoiseScale, data.vNoiseScale);
  gl.uniform2fv(uNoiseScale2, data.vNoiseScale2);
  gl.uniform2fv(uNoiseScale3, data.vNoiseScale3);
  gl.uniform2fv(uCloudNoise, data.vCloudNoise);
  gl.uniform1f(uCloudiness, data.vCloudiness);
  gl.uniform3fv(uOcean, data.vOcean);
  gl.uniform3f(uIce, 250 / 255.0, 250 / 255.0, 250 / 255.0);
  gl.uniform3fv(uCold, data.vCold); //53/255.0, 102/255.0, 100/255.0);
  gl.uniform3fv(uTemperate, data.vTemperate); //79/255.0, 109/255.0, 68/255.0);
  gl.uniform3fv(uWarm, data.vWarm); //119/255.0, 141/255.0, 82/255.0);
  gl.uniform3fv(uHot, data.vHot); //223/255.0, 193/255.0, 148/255.0);
  gl.uniform3fv(uSpeckle, data.vSpeckle);
  gl.uniform3fv(uClouds, data.vClouds);
  gl.uniform3fv(uHaze, data.vHaze);
  gl.uniform1f(uWaterLevel, data.vWaterLevel);
  gl.uniform1f(uRivers, data.vRivers);
  gl.uniform1f(uTemperature, data.vTemperature);

  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 6;
  gl.drawArrays(primitiveType, offset, count);
}

renderPlanet();

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var t = new Date().getTime() % 1000000;

function nextFrame() {
  t = new Date().getTime() % 1000000;
  renderPlanet();
  requestAnimationFrame(nextFrame);
}

// Once everything is set up, start game loop.
requestAnimationFrame(nextFrame);

function doParse(text) {
  var struct = null;
  var value = null;
  console.log("parsing");
  text.split("\n").forEach(function (line) {
    var k = line.split(" ")[0];
    var v = line.substring(k.length + 1);
    if (k.length == 0 || v.length == 0) {
      return;
    }
    if (k == "struct") {
      value = null;
      struct = {
        slots: [],
        vals: {}
      };
      structs[v] = struct;
      return;
    }
    if (k == "slot") {
      struct.slots.push(v);
      if (!slots[v]) {
        slots[v] = [];
      }
      return;
    }
    if (k == "blocker") {
      value.blockers.push([v.split(" ")[0], v.split(" ")[1]]);
      return;
    }
    if (slots[k]) {
      struct = null;
      value = {
        "id": v,
        "blockers": []
      };
      slots[k].push(value);
      return;
    }
    if (struct) {
      struct.vals[k] = v;
    } else {
      value[k] = v;
    }
  });
  console.log(structs);
  console.log(slots);
}

function doGen(structID) {
  // we always gen planaet
  console.log(structID);

  var result = {
    "struct": structs[structID]
  };
  // we lay down template for generator
  // for each slot 
  console.log(result);
  structs[structID].slots.forEach(function (slot) {
    var availableSlots = slots[slot].filter(function (value) {
      return !value.blockers.some(function (blocker) {
        var blockerSlot = blocker[0];
        if (blockerSlot.indexOf(":") != -1) {
          var blockerKey = blockerSlot.substring(blockerSlot.indexOf(":") + 1);
          blockerSlot = blockerSlot.split(":")[0];
          var blockerValue = blocker[1];
          return result[blockerSlot] && result[blockerSlot][blockerKey] == blockerValue;
        } else {
          var blockerID = blocker[1];
          return result[blockerSlot] && result[blockerSlot].id == blockerID;
        }
      });
    });
    if (availableSlots.length == 0) {
      console.log(slot + " fail");
      console.log(result);
      availableSlots = slots[slot]; // qqDPS
    }
    result[slot] = availableSlots[Math.floor(Math.random() * availableSlots.length)];
  });
  console.log(result);
  return result;
}

function doDisplay(result) {
  console.log("Displaying");
  jQuery("body").css("background-position", Math.ceil(Math.random() * 2000) + "px " + Math.ceil(Math.random() * 2000) + "px");
  jQuery("#c").
  css("top", (jQuery(window).innerHeight() / 2 - jQuery("#c").height() / 2) + "px").
  css("left", (jQuery(window).innerWidth() / 2 - jQuery("#c").width() / 2) + "px");
  jQuery("#txt").html(doExpand(result.struct.vals["desc"], result));
  jQuery("#stats").html(
    "Habitability: " + (Math.max(1, Math.min(9, eval(doExpand(result.struct.vals["hab"], result)))) * 10) + "%<br>" +
    "Size: " + (Math.max(1, Math.min(9, eval(doExpand(result.struct.vals["sze"], result))))) + "<br>" +
    "Industry: " + (Math.max(1, Math.min(9, eval(doExpand(result.struct.vals["min"], result))))) + "<br>" +
    "Science: " + (Math.max(1, Math.min(9, eval(doExpand(result.struct.vals["sci"], result)))))
  );
  data.vWaterLevel = eval(doExpand(result.struct.vals["watL"], result));
  data.vTemperature = eval(doExpand(result.struct.vals["temp"], result));
  data.vRivers = eval(doExpand(result.struct.vals["rive"], result));
  data.vCold = eval(doExpand(result.struct.vals["coldC"], result));
  data.vOcean = eval(doExpand(result.struct.vals["oceanC"], result)) || [0.05, 0.22, 0.38];
  data.vTemperate = eval(doExpand(result.struct.vals["temperateC"], result));
  data.vWarm = eval(doExpand(result.struct.vals["warmC"], result));
  data.vHot = eval(doExpand(result.struct.vals["hotC"], result));
  data.vSpeckle = eval(doExpand(result.struct.vals["speckleC"], result));
  data.vLightColor = eval(doExpand(result.struct.vals["lightC"], result));
  data.vHaze = eval(doExpand(result.struct.vals["hazeC"], result)) || [0.15, 0.15, 0.2];

  data.vCloudiness = Math.min(1.5, Math.max(0, eval(doExpand(result.struct.vals["clouds"], result))));
  data.vClouds = eval(doExpand(result.struct.vals["cloudC"], result)) || [0.9, 0.9, 0.9];
  data.vAngle = 0.6 * Math.random();
  data.vRotspeed = (0.005 + Math.random() * 0.01) * (Math.random() < 0.3 ? -1 : 1) * eval(doExpand(result.struct.vals["rotspeedMult"], result));;
  data.vLight = 4 * Math.random();
  data.vZLight = 0.2 + Math.random();
  data.vModValue = 17 + Math.ceil(Math.random() * 20);
  data.vNoiseOffset = [Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)];
  data.vNoiseScale = [7 + Math.ceil(Math.random() * 10), 5 + Math.ceil(Math.random() * 7)];
  var sc = 80 + Math.ceil(Math.random() * 220);
  data.vNoiseScale2 = [sc, sc];
  sc = 20 + Math.ceil(Math.random() * 80);
  data.vNoiseScale3 = [sc, sc];
  data.vCloudNoise = [4 + Math.ceil(Math.random() * 9), 20 + Math.ceil(Math.random() * 20)];
}

function doExpand(txt, context) {
  if (!txt) {
    return "";
  }
  if (txt.indexOf("{") == -1) {
    return txt;
  }
  return txt.replace(/[{]([^}]*)[}]/g, function (m, capture) {
    if (capture.indexOf(":") == -1) {
      return context[capture].id;
    } else {
      var slot = capture.split(":")[0];
      var prop = capture.substring(slot.length + 1);
      return doExpand(context[slot][prop], context);
    }
  });
}

fetch('./assets/structs.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    structs = data
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
    console.log(err);
  })

fetch('./assets/slots.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    slots = data
    console.log(data)

    doDisplay(doGen("planet"));
  })
  .catch(err => {
    // Do something for an error here
    console.log(err);
  })

// $('#temp-slider').change(function() {
//   console.log(this.value);
//   vTemperature = this.value;
//   if($(this).closest('form').data('changed')) {
//     console.log(this);
//   }
// });

// $('#temp-slider').change(function() {
//   console.log(this.value);
//   vTemperature = this.value;
//   if($(this).closest('form').data('changed')) {
//     console.log(this);
//   }
// });


Vue.component("planet-render", {
  data: function () {
    // var canvas = this.$refs.canvas;
    // console.log(this.$refs)
    // var gl = canvas.getContext("webgl");
    // var vertexShaderSource = document.getElementById("2d-vertex-shader").text;
    // var fragmentShaderSource = document.getElementById("planet-shader").text;
    // var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    // var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    // var program = createProgram(gl, vertexShader, fragmentShader);
    // var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

    // Uniform variables, locations to vars in shader program
    // so we can change them

    return {
      
      // locations to vars in shader program


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
      vLightColor: [1.0, 1.0, 1.0],
      vHaze: [0.15, 0.15, 0.2],

      vAngle: 0.3,
      vRotspeed: 0.01,
      vLight: 1.9,
      vZLight: 0.5,
      vModValue: 29,
      vNoiseOffset: [0, 0],
      vNoiseScale: [11, 8],
      vNoiseScale2: [200, 200],
      vNoiseScale3: [50, 50],
      vCloudNoise: [6, 30],
    }
  },
  methods: {
    buildShaders () {
      let _gl = this.$refs.canvas.getContext("webgl");
      this.gl = _gl;
      this.vertexShader = createShader(_gl, _gl.VERTEX_SHADER, vertexShaderSource);
      this.fragmentShader = createShader(_gl, _gl.FRAGMENT_SHADER, fragmentShaderSource);
      this.program = createProgram(_gl, this.vertexShader, this.fragmentShader);
      this.positionAttributeLocation = _gl.getAttribLocation(this.program, "a_position");
    },

    getUniformLocation(v) {
      return this.gl.getUniformLocation(this.program, v);
    },

    getAllUniformLocations () {
      this.uCities = this.getUniformLocation("cities")
      this.uTime = this.getUniformLocation("time")
      this.uLeft = this.getUniformLocation("left")
      this.uTop = this.getUniformLocation("top")
      this.uResolution = this.getUniformLocation("resolution")
      this.uAngle = this.getUniformLocation("angle")
      this.uRotspeed = this.getUniformLocation("rotspeed")
      this.uLight = this.getUniformLocation("light")
      this.uZLight = this.getUniformLocation("zLight")
      this.uLightColor = this.getUniformLocation("lightColor")
      this.uModValue = this.getUniformLocation("modValue")
      this.uNoiseOffset = this.getUniformLocation("noiseOffset")
      this.uNoiseScale = this.getUniformLocation("noiseScale")
      this.uNoiseScale2 = this.getUniformLocation("noiseScale2")
      this.uNoiseScale3 = this.getUniformLocation("noiseScale3")
      this.uCloudNoise = this.getUniformLocation("cloudNoise")
      this.uCloudiness = this.getUniformLocation("cloudiness")
      this.uOcean = this.getUniformLocation("ocean")
      this.uIce = this.getUniformLocation("ice")
      this.uCold = this.getUniformLocation("cold")
      this.uTemperate = this.getUniformLocation("temperate")
      this.uWarm = this.getUniformLocation("warm")
      this.uHot = this.getUniformLocation("hot")
      this.uSpeckle = this.getUniformLocation("speckle")
      this.uClouds = this.getUniformLocation("clouds")
      this.uWaterLevel = this.getUniformLocation("waterLevel")
      this.uRivers = this.getUniformLocation("rivers")
      this.uTemperature = this.getUniformLocation("temperature")
      this.uHaze = this.getUniformLocation("haze")
    }
  },
  mounted: function () {
    // console.log(this.$refs.canvas);
    this.buildShaders();
    this.getAllUniformLocations();
    console.log(this.$data);
  },
  template: '<canvas ref="canvas"></canvas>',
})

var vm = new Vue({
  el: '#app',
  data: data
})

// jQuery.ajax({
//     url: "data.txt?" + (new Date()).getTime(),
//     success: function(txt) { doParse(txt); doDisplay(doGen("planet")); }
// });