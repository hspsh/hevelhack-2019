
"use strict";

var structs = {
  "planet": {
    "slots": [
      "nameStart",
      "nameEnd",
      "nameNumber",
      "prime",
      "sun",
      "soilColor",
      "rockColor",
      "surface",
      "climate",
      "landscape",
      "special",
      "symmetry",
      "animalColor",
      "animalTexture",
      "flora",
      "leafColor",
      "plantTexture",
      "plantDecoColor",
      "plantDeco",
      "fauna",
      "lifeSpecial"
    ],
    "vals": {
      "desc": "<h1>{nameStart}{nameEnd} {nameNumber}</h1>{surface:desc}<br><br>{fauna:desc}<br><br>{special:desc}",
      "hab": "{surface:hab} {climate:hab} {flora:hab} {fauna:hab} {lifeSpecial:hab} {special:hab}",
      "sze": "{surface:sze} {climate:sze} {flora:sze} {fauna:sze} {lifeSpecial:sze} {special:sze}",
      "min": "3 {surface:min} {climate:min} {flora:min} {fauna:min} {lifeSpecial:min} {special:min}",
      "sci": "3 {surface:sci} {climate:sci} {flora:sci} {fauna:sci} {lifeSpecial:sci} {special:sci}",
      "watL": "{surface:watL}",
      "temp": "{climate:temp}",
      "rive": "{surface:rive}",
      "coldC": "{surface:coldC}",
      "temperateC": "{surface:temperateC}",
      "warmC": "{surface:warmC}",
      "hotC": "{surface:hotC}",
      "speckleC": "{surface:speckleC}",
      "clouds": "{surface:clouds} {special:clouds}",
      "cloudC": "{special:cloudC}",
      "rotspeedMult": "1.0 {special:rotspeedMult}",
      "lightC": "{sun:lightC}",
      "hazeC": "{special:hazeC}",
      "oceanC": "{special:oceanC}"
    }
  }
};
var slots = {
  "nameStart": [
    {
      "id": "Bi",
      "blockers": []
    },
    {
      "id": "Tor",
      "blockers": []
    },
    {
      "id": "Teri",
      "blockers": []
    },
    {
      "id": "Alim",
      "blockers": []
    },
    {
      "id": "Cre",
      "blockers": []
    },
    {
      "id": "Dri",
      "blockers": []
    },
    {
      "id": "Epi",
      "blockers": []
    },
    {
      "id": "Fra",
      "blockers": []
    },
    {
      "id": "Gro",
      "blockers": []
    },
    {
      "id": "Hima",
      "blockers": []
    },
    {
      "id": "Jutu",
      "blockers": []
    },
    {
      "id": "Kima",
      "blockers": []
    },
    {
      "id": "Lu",
      "blockers": []
    },
    {
      "id": "Mi",
      "blockers": []
    },
    {
      "id": "No",
      "blockers": []
    },
    {
      "id": "Noto",
      "blockers": []
    },
    {
      "id": "Ori",
      "blockers": []
    },
    {
      "id": "Pru",
      "blockers": []
    },
    {
      "id": "Qu",
      "blockers": []
    },
    {
      "id": "Ria",
      "blockers": []
    },
    {
      "id": "Su",
      "blockers": []
    },
    {
      "id": "Umako",
      "blockers": []
    },
    {
      "id": "Vime",
      "blockers": []
    },
    {
      "id": "Wito",
      "blockers": []
    },
    {
      "id": "Xi",
      "blockers": []
    },
    {
      "id": "Ya",
      "blockers": []
    },
    {
      "id": "Zumo",
      "blockers": []
    },
    {
      "id": "Api",
      "blockers": []
    },
    {
      "id": "Bele",
      "blockers": []
    },
    {
      "id": "Cepi",
      "blockers": []
    },
    {
      "id": "Do",
      "blockers": []
    },
    {
      "id": "Ea",
      "blockers": []
    },
    {
      "id": "Fe",
      "blockers": []
    },
    {
      "id": "Gato",
      "blockers": []
    },
    {
      "id": "Holo",
      "blockers": []
    },
    {
      "id": "Ipe",
      "blockers": []
    },
    {
      "id": "Jo",
      "blockers": []
    },
    {
      "id": "Kala",
      "blockers": []
    },
    {
      "id": "Lara",
      "blockers": []
    },
    {
      "id": "Meta",
      "blockers": []
    },
    {
      "id": "Noxa",
      "blockers": []
    },
    {
      "id": "Orra",
      "blockers": []
    },
    {
      "id": "Pi",
      "blockers": []
    },
    {
      "id": "Quima",
      "blockers": []
    },
    {
      "id": "Ro",
      "blockers": []
    },
    {
      "id": "Sele",
      "blockers": []
    },
    {
      "id": "Ule",
      "blockers": []
    },
    {
      "id": "Vi",
      "blockers": []
    },
    {
      "id": "Waxa",
      "blockers": []
    },
    {
      "id": "Xo",
      "blockers": []
    },
    {
      "id": "Yora",
      "blockers": []
    },
    {
      "id": "Zuli",
      "blockers": []
    }
  ],
  "nameEnd": [
    {
      "id": "von",
      "blockers": []
    },
    {
      "id": "oll",
      "blockers": []
    },
    {
      "id": "tol",
      "blockers": []
    },
    {
      "id": "gon",
      "blockers": []
    },
    {
      "id": "prim",
      "blockers": []
    },
    {
      "id": "tes",
      "blockers": []
    },
    {
      "id": "lup",
      "blockers": []
    },
    {
      "id": "vim",
      "blockers": []
    },
    {
      "id": "qua",
      "blockers": []
    },
    {
      "id": "pip",
      "blockers": []
    },
    {
      "id": "am",
      "blockers": []
    },
    {
      "id": "lm",
      "blockers": []
    },
    {
      "id": "thor",
      "blockers": []
    },
    {
      "id": "gig",
      "blockers": []
    },
    {
      "id": "ve",
      "blockers": []
    },
    {
      "id": "qum",
      "blockers": []
    },
    {
      "id": "la",
      "blockers": []
    },
    {
      "id": "leuth",
      "blockers": []
    },
    {
      "id": "bas",
      "blockers": []
    },
    {
      "id": "ro",
      "blockers": []
    },
    {
      "id": "porr",
      "blockers": []
    },
    {
      "id": "lia",
      "blockers": []
    },
    {
      "id": "w",
      "blockers": []
    },
    {
      "id": "kra",
      "blockers": []
    },
    {
      "id": "cor",
      "blockers": []
    },
    {
      "id": "mmon",
      "blockers": []
    }
  ],
  "nameNumber": [
    {
      "id": "I",
      "blockers": []
    },
    {
      "id": "II",
      "blockers": []
    },
    {
      "id": "III",
      "blockers": []
    },
    {
      "id": "IV",
      "blockers": []
    },
    {
      "id": "V",
      "blockers": []
    },
    {
      "id": "VI",
      "blockers": []
    }
  ],
  "prime": [
    {
      "id": "seven",
      "blockers": []
    },
    {
      "id": "eleven",
      "blockers": []
    },
    {
      "id": "thirteen",
      "blockers": []
    },
    {
      "id": "seventeen",
      "blockers": []
    },
    {
      "id": "nineteen",
      "blockers": []
    }
  ],
  "sun": [
    {
      "id": "brightBlue",
      "blockers": [],
      "brightness": "bright",
      "color": "blue",
      "lightC": "[0.75, 0.75, 1.2]"
    },
    {
      "id": "dullRed",
      "blockers": [],
      "brightness": "dull",
      "color": "red",
      "lightC": "[0.7, 0.35, 0.3]"
    },
    {
      "id": "dimWhite",
      "blockers": [],
      "brightness": "dim",
      "color": "white",
      "lightC": "[0.6, 0.6, 0.6]"
    },
    {
      "id": "blindingWhite",
      "blockers": [],
      "brightness": "blinding",
      "color": "white",
      "lightC": "[1.2, 1.2, 1.2]"
    },
    {
      "id": "gentleYellow",
      "blockers": [],
      "brightness": "gentle",
      "color": "yellow",
      "lightC": "[1.0, 1.0, 0.85]"
    },
    {
      "id": "harshRed",
      "blockers": [],
      "brightness": "harsh",
      "color": "red",
      "lightC": "[1.1, 0.6, 0.6]"
    },
    {
      "id": "wanYellow",
      "blockers": [],
      "brightness": "wan",
      "color": "yellow",
      "lightC": "[0.8, 0.8, 0.65]"
    },
    {
      "id": "dimBlue",
      "blockers": [],
      "brightness": "dim",
      "color": "blue",
      "lightC": "[0.4, 0.4, 0.6]"
    }
  ],
  "soilColor": [
    {
      "id": "red",
      "blockers": [],
      "cap": "Red",
      "c": "[0.56, 0.19, 0.1]"
    },
    {
      "id": "grey",
      "blockers": [],
      "cap": "Grey",
      "c": "[0.46, 0.43, 0.43]"
    },
    {
      "id": "brown",
      "blockers": [],
      "cap": "Brown",
      "c": "[0.52, 0.35, 0.26]"
    },
    {
      "id": "black",
      "blockers": [],
      "cap": "Black",
      "c": "[0.25, 0.25, 0.28]"
    }
  ],
  "rockColor": [
    {
      "id": "red",
      "blockers": [],
      "cap": "Red",
      "c": "[0.53, 0.14, 0.04]"
    },
    {
      "id": "grey",
      "blockers": [],
      "cap": "Grey",
      "c": "[0.39, 0.39, 0.41]"
    },
    {
      "id": "white",
      "blockers": [],
      "cap": "White",
      "c": "[0.77, 0.79, 0.8]"
    },
    {
      "id": "black",
      "blockers": [],
      "cap": "Black",
      "c": "[0.1, 0.1, 0.13]"
    },
    {
      "id": "dark green",
      "blockers": [],
      "cap": "Dark green",
      "c": "[0.2, 0.3, 0.25]"
    },
    {
      "id": "dark blue",
      "blockers": [],
      "cap": "Dark blue",
      "c": "[0.16, 0.23, 0.29]"
    },
    {
      "id": "speckled",
      "blockers": [],
      "cap": "Speckled",
      "c": "[0.49, 0.46, 0.47]"
    }
  ],
  "surface": [
    {
      "id": "deepOcean",
      "blockers": [],
      "desc": "A planet-wide, deep {climate:ocean}. {landscape:desc}",
      "lurk": "in the ocean.",
      "ocean": "yes",
      "land": "no",
      "dry": "no",
      "ground": "ocean",
      "hab": "5",
      "sze": "3",
      "min": "-1",
      "watL": "1.0",
      "rive": "0",
      "coldC": "[0,0,0]",
      "temperateC": "[0,0,0]",
      "warmC": "[0,0,0]",
      "hotC": "[0,0,0]",
      "clouds": "0.3 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "ocean",
      "blockers": [],
      "desc": "A planet-wide {climate:ocean}. {landscape:desc}",
      "lurk": "in the ocean.",
      "ocean": "yes",
      "land": "no",
      "dry": "no",
      "ground": "ocean",
      "hab": "5",
      "sze": "3",
      "min": "-1",
      "watL": "0.8",
      "rive": "0",
      "coldC": "[0,0,0]",
      "temperateC": "[0,0,0]",
      "warmC": "[0,0,0]",
      "hotC": "[0,0,0]",
      "clouds": "0.3 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "islands",
      "blockers": [],
      "desc": "A few islands are dotted around an {climate:ocean}. {landscape:desc} {flora:land}",
      "lurk": "in the shallows.",
      "ocean": "yes",
      "land": "yes",
      "dry": "no",
      "ground": "earth",
      "hab": "7 {landscape:hab}",
      "sze": "5 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "0.4",
      "rive": "0.5",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{flora:warmC}",
      "hotC": "{soilColor:c}",
      "clouds": "0.3 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "continents",
      "blockers": [],
      "desc": "Large continents. {landscape:desc} {flora:land}",
      "lurk": "{flora:lurk}",
      "ocean": "yes",
      "land": "yes",
      "dry": "no",
      "ground": "earth",
      "hab": "8 {landscape:hab}",
      "sze": "7 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "0.0",
      "rive": "1",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{flora:warmC}",
      "hotC": "{flora:hotC}",
      "clouds": "0.28 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "supercontinent",
      "blockers": [],
      "desc": "A supercontinent and some small, shallow {climate:seas}. {landscape:desc} {flora:land}",
      "lurk": "{flora:lurk}",
      "ocean": "yes",
      "land": "yes",
      "dry": "no",
      "ground": "earth",
      "hab": "8 {landscape:hab}",
      "sze": "8 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-0.4",
      "rive": "1",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{flora:warmC}",
      "hotC": "{soilColor:c}",
      "clouds": "0.25 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "swamps",
      "blockers": [],
      "desc": "Shallow {climate:lakes} and swamps. {landscape:desc} {flora:land}",
      "lurk": "in the swamps.",
      "ocean": "no",
      "land": "no",
      "dry": "no",
      "ground": "earth",
      "hab": "6 {landscape:hab}",
      "sze": "6 {landscape:sze}",
      "min": "-1 {landscape:min}",
      "watL": "-0.5",
      "rive": "1",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{flora:warmC}",
      "hotC": "{flora:hotC}",
      "clouds": "0.3 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "jungle",
      "blockers": [],
      "desc": "Dense jungles of {flora:desc} cover {nameStart}{nameEnd} {nameNumber}. {landscape:desc}",
      "lurk": "in the jungles.",
      "ocean": "no",
      "land": "yes",
      "dry": "no",
      "ground": "soil",
      "hab": "7 {landscape:hab}",
      "sze": "7 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-0.5",
      "rive": "0.7",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:warmC}",
      "warmC": "{flora:hotC}",
      "hotC": "{flora:hotC}",
      "clouds": "0.3 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "forests",
      "blockers": [],
      "desc": "Dense forests of {flora:desc} cover {nameStart}{nameEnd} {nameNumber}. {landscape:desc}",
      "lurk": "in the forests.",
      "ocean": "no",
      "land": "yes",
      "dry": "no",
      "ground": "soil",
      "hab": "8 {landscape:hab}",
      "sze": "7 {landscape:sze}",
      "min": "+1 {landscape:min}",
      "watL": "-0.5",
      "rive": "0.7",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{flora:warmC}",
      "hotC": "{flora:hotC}",
      "clouds": "0.25 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "scatteredForests",
      "blockers": [],
      "desc": "There are scattered forests of {flora:desc}. {landscape:desc}",
      "lurk": "in the forests.",
      "ocean": "no",
      "land": "yes",
      "dry": "no",
      "ground": "soil",
      "hab": "7 {landscape:hab}",
      "sze": "7 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-0.5",
      "rive": "0.8",
      "coldC": "{flora:coldC}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{soilColor:c}",
      "hotC": "{flora:hotC}",
      "clouds": "0.2 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "tundra",
      "blockers": [],
      "desc": "Tundra and a few {climate:lakes}. {landscape:desc} {flora:land}",
      "lurk": "{flora:lurk}",
      "ocean": "no",
      "land": "yes",
      "dry": "no",
      "ground": "frozen ground",
      "hab": "6 {landscape:hab}",
      "sze": "6 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-0.8",
      "rive": "0.3",
      "coldC": "{rockColor:c}",
      "temperateC": "{flora:coldC}",
      "warmC": "{flora:coldC}",
      "hotC": "{flora:temperateC}",
      "clouds": "0.15 * {climate:clouds}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "muddy",
      "blockers": [],
      "desc": "{soilColor:cap} mud and small rivulets. {landscape:desc} {flora:land}",
      "lurk": "{flora:lurk}",
      "ocean": "no",
      "land": "yes",
      "dry": "no",
      "ground": "mud",
      "hab": "6 {landscape:hab}",
      "sze": "6 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-0.7",
      "rive": "0.3",
      "coldC": "{soilColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{soilColor:c}",
      "hotC": "{soilColor:c}",
      "clouds": "0.15 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "arid",
      "blockers": [],
      "desc": "Apart from a few {climate:lakes} and rivers, {nameStart}{nameEnd} {nameNumber} is dry. {landscape:desc} {flora:land}",
      "lurk": "{flora:lurk}",
      "ocean": "no",
      "land": "yes",
      "dry": "yes",
      "ground": "soil",
      "hab": "6 {landscape:hab}",
      "sze": "8",
      "min": "{landscape:min}",
      "watL": "-0.9",
      "rive": "0.4",
      "coldC": "{soilColor:c}",
      "temperateC": "{flora:temperateC}",
      "warmC": "{soilColor:c}",
      "hotC": "{rockColor:c}",
      "clouds": "0.08 * {climate:clouds}",
      "speckleC": "{flora:speckleC}"
    },
    {
      "id": "desert",
      "blockers": [],
      "desc": "A sandy desert lit by a {sun:brightness} {sun:color} sun. {landscape:desc} {flora:land}",
      "lurk": "beneath the sand.",
      "ocean": "no",
      "land": "yes",
      "dry": "yes",
      "ground": "sand",
      "hab": "4 {landscape:hab}",
      "sze": "7 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-2",
      "rive": "0",
      "coldC": "{soilColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{soilColor:c}",
      "hotC": "{soilColor:c}",
      "clouds": "0.05 * {climate:clouds}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "icyDesert",
      "blockers": [],
      "desc": "An icy desert. {landscape:desc} {flora:land}",
      "lurk": "in the ice.",
      "ocean": "no",
      "land": "yes",
      "dry": "no",
      "ground": "ice",
      "hab": "4 {landscape:hab}",
      "sze": "7 {landscape:sze}",
      "min": "-1 {landscape:min}",
      "watL": "-2",
      "rive": "0",
      "coldC": "{soilColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{flora:coldC}",
      "hotC": "{soilColor:c}",
      "clouds": "0.1 * {climate:clouds}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "rocks",
      "blockers": [],
      "desc": "A rocky desert lit by a {sun:brightness} {sun:color} sun. {landscape:desc} {flora:land}",
      "lurk": "in nooks and crannies.",
      "ocean": "no",
      "land": "yes",
      "dry": "yes",
      "ground": "stone",
      "hab": "4 {landscape:hab}",
      "sze": "8 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-2",
      "rive": "0",
      "coldC": "{rockColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{rockColor:c}",
      "hotC": "{rockColor:c}",
      "clouds": "0.1 * {climate:clouds}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "jaggedRocks",
      "blockers": [],
      "desc": "A desert of jagged rocks. {landscape:desc} {flora:land}",
      "lurk": "in nooks and crannies.",
      "ocean": "no",
      "land": "yes",
      "dry": "yes",
      "ground": "stone",
      "hab": "4 {landscape:hab}",
      "sze": "8 {landscape:sze}",
      "min": "{landscape:min}",
      "watL": "-2",
      "rive": "0",
      "coldC": "{rockColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{rockColor:c}",
      "hotC": "{rockColor:c}",
      "clouds": "0.1 * {climate:clouds}",
      "speckleC": "{landscape:speckleC}"
    }
  ],
  "climate": [
    {
      "id": "veryCold",
      "blockers": [
        [
          "sun",
          "brightBlue"
        ],
        [
          "sun",
          "gentleYellow"
        ],
        [
          "sun",
          "harshRed"
        ],
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "swamps"
        ],
        [
          "surface",
          "islands"
        ],
        [
          "surface",
          "muddy"
        ],
        [
          "surface",
          "continents"
        ],
        [
          "surface",
          "supercontinent"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredforests"
        ],
        [
          "surface",
          "desert"
        ]
      ],
      "ocean": "ocean covered by a thick ice sheet",
      "seas": "seas covered with thick ice sheets",
      "lakes": "frozen lakes",
      "hab": "-2",
      "temp": "-1.95",
      "clouds": "0.5"
    },
    {
      "id": "cold",
      "blockers": [
        [
          "sun",
          "brightBlue"
        ],
        [
          "sun",
          "gentleYellow"
        ],
        [
          "surface",
          "icyDesert"
        ]
      ],
      "ocean": "ocean covered by ice everywhere except near the equator",
      "seas": "seas mostly covered with ice",
      "lakes": "frozen lakes",
      "temp": "-1.3",
      "clouds": "0.85"
    },
    {
      "id": "temperate",
      "blockers": [
        [
          "sun",
          "dimWhite"
        ],
        [
          "sun",
          "dimBlue"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "tundra"
        ]
      ],
      "ocean": "ocean mostly free of ice, except at the poles",
      "seas": "seas",
      "lakes": "lakes",
      "temp": "0.0",
      "clouds": "1.0"
    },
    {
      "id": "hot",
      "blockers": [
        [
          "sun",
          "dimWhite"
        ],
        [
          "sun",
          "dimBlue"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "tundra"
        ]
      ],
      "ocean": "ocean",
      "seas": "seas",
      "lakes": "warm lakes",
      "temp": "0.7",
      "clouds": "1.3"
    },
    {
      "id": "veryHot",
      "blockers": [
        [
          "sun",
          "dimWhite"
        ],
        [
          "sun",
          "gentleYellow"
        ],
        [
          "sun",
          "wanYellow"
        ],
        [
          "sun",
          "dimBlue"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "tundra"
        ]
      ],
      "ocean": "ocean that is constantly steaming",
      "seas": "seas that are constantly steaming",
      "lakes": "boiling lakes",
      "hab": "-2",
      "temp": "1.8",
      "clouds": "0.8"
    }
  ],
  "landscape": [
    {
      "id": "rocks",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "Huge {rockColor} rocks litter the land.",
      "speckleC": "{rockColor:c}"
    },
    {
      "id": "mountains",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "muddy"
        ]
      ],
      "desc": "Tall mountains rise towards the sky.",
      "speckleC": "{rockColor:c}"
    },
    {
      "id": "sinkholes",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "islands"
        ]
      ],
      "desc": "Sinkholes dot the land.",
      "speckleC": "{soilColor:c}"
    },
    {
      "id": "fissures",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Noxious gases erupt from deep fissures.",
      "hab": "-2",
      "speckleC": "[0.75, 0.69, 0.48]"
    },
    {
      "id": "rockSpires",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Spires of sharp stone interrupt the otherwise flat terrain.",
      "speckleC": "{rockColor:c}"
    },
    {
      "id": "sandBeach",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "There are wide beaches of fine {soilColor} sand.",
      "speckleC": "{flora:temperateC}"
    },
    {
      "id": "rockBeach",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "There are wide, {rockColor}, rocky beaches.",
      "speckleC": "{flora:temperateC}"
    },
    {
      "id": "maze",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "swamps"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ],
        [
          "surface",
          "muddy"
        ]
      ],
      "desc": "The land is a maze of steep valleys.",
      "speckleC": "{flora:coldC}"
    },
    {
      "id": "plateaus",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "islands"
        ],
        [
          "surface",
          "swamps"
        ],
        [
          "surface",
          "muddy"
        ]
      ],
      "desc": "There are large plateaus with steep sides.",
      "speckleC": "{flora:warmC}"
    },
    {
      "id": "plains",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "swamps"
        ],
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ],
        [
          "surface",
          "muddy"
        ]
      ],
      "desc": "Great plains stretch under the {sun:brightness} {sun:color} sun.",
      "speckleC": "{flora:hotC}"
    },
    {
      "id": "hills",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "jaggedRocks"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "swamps"
        ],
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "muddy"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "There are gentle rolling hills.",
      "speckleC": "{flora:temperateC}"
    },
    {
      "id": "canyons",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "islands"
        ]
      ],
      "desc": "Deep canyons cut into the planet's crust.",
      "sze": "-1",
      "min": "+2",
      "speckleC": "{soilColor:c}"
    },
    {
      "id": "tunnels",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "muddy"
        ]
      ],
      "desc": "A network of tunnels extends under much of the surface.",
      "sze": "+3",
      "min": "+1",
      "speckleC": "{soilColor:c}"
    },
    {
      "id": "dustBasins",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "no"
        ]
      ],
      "desc": "Basins of {soilColor} dust.",
      "sze": "-1",
      "speckleC": "{soilColor:c}"
    },
    {
      "id": "hexCols",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Towering columns of hexagonal {rockColor} stone.",
      "min": "+1",
      "speckleC": "{rockColor:c}"
    },
    {
      "id": "fossilizedForests",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "There are extensive fossilized forests.",
      "speckleC": "{rockColor:c}"
    },
    {
      "id": "slime",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "yes"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "desc": "The ground is covered in thick {leafColor} slime.",
      "hab": "-1",
      "speckleC": "{leafColor:temperateC}"
    },
    {
      "id": "tidalPlains",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:ocean",
          "no"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "desc": "There are great tidal plains.",
      "hab": "+1",
      "speckleC": "{flora:temperateC}"
    },
    {
      "id": "cenotes",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "climate",
          "veryCold"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "There are deep water-filled cenotes.",
      "hab": "+1",
      "speckleC": "[0.050980392, 0.215686275, 0.380392157]"
    },
    {
      "id": "bogs",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "climate",
          "veryCold"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "There are sprawling {soilColor} bogs.",
      "sze": "-1",
      "speckleC": "{soilColor:c}"
    },
    {
      "id": "waterCaves",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "climate",
          "veryCold"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "Large water-filled caves are present just beneath the surface.",
      "hab": "+1",
      "speckleC": "{flora:warmC}"
    },
    {
      "id": "nothingSpecial",
      "blockers": [],
      "desc": " ",
      "speckleC": "{flora:temperateC}"
    }
  ],
  "special": [
    {
      "id": "radioactive",
      "blockers": [],
      "desc": "Much of the planet is heavily radioactive.",
      "hab": "-2",
      "min": "+1",
      "cloudC": "[0.8, 0.85, 0.9]",
      "hazeC": "[0.2, 0.24, 0.25]",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "giantMoon",
      "blockers": [],
      "desc": "A giant moon looms in the sky.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "darkness",
      "blockers": [],
      "desc": "Due to a celestial conjunction, the planet is plunged into darkness every {prime} years.",
      "hab": "-1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "manyMoons",
      "blockers": [],
      "desc": "Many moons can be seen in the sky.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "dustBand",
      "blockers": [],
      "desc": "A band of glittering dust can be seen in the sky.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "cloudCover",
      "blockers": [],
      "desc": "The sky is constantly cloudy.",
      "clouds": "+ 2.4",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "constantRain",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "It is always raining.",
      "clouds": "+ 0.3",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "suddenRain",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "There are sudden, violent rains.",
      "clouds": "+ 0.2",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "drizzle",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "There is a constant drizzle.",
      "clouds": "+ 0.2",
      "hazeC": "{lifeSpecial:hazeC}"
    },
    {
      "id": "fog",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "There are frequent fogs.",
      "clouds": "+ 0.7",
      "cloudC": "[0.7, 0.7, 0.7]",
      "hazeC": "[0.4, 0.4, 0.4]",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "impactCrater",
      "blockers": [
        [
          "surface",
          "deepOcean"
        ],
        [
          "surface",
          "ocean"
        ]
      ],
      "desc": "The remains of an ancient, massive impact crater can be seen all the way from orbit.",
      "min": "+1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "dustStorms",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "no"
        ]
      ],
      "desc": "Constant dust storms make it hard to see anything.",
      "hab": "-1",
      "clouds": "+ 0.3",
      "cloudC": "{soilColor:c}",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "snowStorms",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "Constant snowstorms make it hard to see anything.",
      "hab": "-1",
      "clouds": "+ 0.4",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "hailStorms",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "Constant hail storms batter the surface.",
      "hab": "-1",
      "clouds": "+ 0.3",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "hurricanes",
      "blockers": [
        [
          "climate",
          "veryCold"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "Constant hurricanes ravage the surface.",
      "hab": "-1",
      "clouds": "+ 0.7",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "iceSpires",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ]
      ],
      "desc": "Tall ice spires formed by an unknown process cover much of the ground.",
      "sze": "-1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "slowDayCycle",
      "blockers": [],
      "desc": "A single day takes a very long time.",
      "rotspeedMult": "* 0.1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "noStars",
      "blockers": [],
      "desc": "An interstellar dust cloud hides most of the stars in the night sky.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "fastDayCycle",
      "blockers": [],
      "desc": "Day and night rapidly follow on from each other.",
      "rotspeedMult": "* 3",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "heavyGravity",
      "blockers": [],
      "desc": "The gravity is very strong.",
      "hab": "-1",
      "sze": "+2",
      "min": "-1",
      "clouds": "- 0.2",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "lowGravity",
      "blockers": [],
      "desc": "The gravity is quite low.",
      "sze": "-1",
      "clouds": "- 0.2",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "thinAir",
      "blockers": [],
      "desc": "The air is thin.",
      "hab": "-1",
      "clouds": "- 0.7",
      "hazeC": "[0.1, 0.1, 0.12]",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "thickAir",
      "blockers": [],
      "desc": "The air pressure is very high.",
      "hab": "-1",
      "hazeC": "[0.3, 0.3, 0.4]",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "electricalStorms",
      "blockers": [],
      "desc": "Powerful electrical storms disrupt electronics and light up the sky.",
      "hab": "-1",
      "sci": "-1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "solarFlares",
      "blockers": [],
      "desc": "Frequent strong solar flares cause beautiful displays of light in the sky and make electronics all but useless.",
      "hab": "-1",
      "sci": "-1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "coldAir",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ]
      ],
      "desc": "The air is bitterly cold.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "hotAir",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "cold"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "desc": "The air is almost unbearably hot.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "coldWind",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ]
      ],
      "desc": "There is a constant cold wind.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "hotWind",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "cold"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "desc": "There is a constant hot wind.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "suddenColdWind",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ]
      ],
      "desc": "There are sudden cold winds.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "suddenHotWind",
      "blockers": [
        [
          "climate",
          "temperate"
        ],
        [
          "climate",
          "cold"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "desc": "There are sudden hot winds.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "poisonedSoil",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "The soil is poisoned with heavy metals.",
      "hab": "-3",
      "min": "+1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "richSurface",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Deposits of valuable ores can be seen all over the surface.",
      "min": "+3",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "deepRiches",
      "blockers": [
        [
          "surface:land",
          "yes"
        ]
      ],
      "desc": "There are deposits of valuable ores in the ocean depths.",
      "min": "+2",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "petroleum",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "There are deposits of a petroleum-like substance just under the surface.",
      "min": "+3",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "constantWind",
      "blockers": [],
      "desc": "A constant wind whips around the planet.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "shootingStars",
      "blockers": [],
      "desc": "There are frequent shooting stars.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "variableGravity",
      "blockers": [],
      "desc": "The gravity at the poles is much stronger than at the equator.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "radioDust",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "no"
        ]
      ],
      "desc": "Radioactive dust pollutes the air.",
      "hab": "-4",
      "hazeC": "[0.4, 0.42, 0.45]",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "volcanoes",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "There are many active volcanoes.",
      "hab": "-1",
      "sze": "-2",
      "min": "+1",
      "clouds": "+ 0.7",
      "cloudC": "{soilColor:c}",
      "hazeC": "{soilColor:c}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "dormantVolcanoes",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "There are many dormant volcanoes.",
      "sze": "-1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "dormantOceanVolcanoes",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "There are many dormant underwater volcanoes.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "meteoriteHail",
      "blockers": [],
      "desc": "There is a constant hail of small meteorite impacts.",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    },
    {
      "id": "colorWater",
      "blockers": [
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "The water is colored {plantDecoColor} by microorganisms.",
      "hab": "-1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{plantDecoColor:c}"
    },
    {
      "id": "ecoCollapseCycle",
      "blockers": [],
      "desc": "The ecosystem of the planet goes through a cycle of collapsing every few hundred years.",
      "hab": "-1",
      "sci": "+1",
      "hazeC": "{lifeSpecial:hazeC}",
      "oceanC": "{lifeSpecial:oceanC}"
    }
  ],
  "symmetry": [
    {
      "id": "2",
      "blockers": [],
      "many": "eight",
      "waterPropulsion": "tails",
      "fewLegged": "four-legged",
      "fold": "bilateral",
      "some": "two",
      "nPods": "bipeds",
      "nGons": "blobs",
      "nPedal": "bipedal"
    },
    {
      "id": "3",
      "blockers": [],
      "many": "nine",
      "waterPropulsion": "siphons",
      "fewLegged": "three-legged",
      "fold": "threefold",
      "some": "three",
      "nPods": "tripods",
      "nGons": "triangles",
      "nPedal": "tripedal"
    },
    {
      "id": "5",
      "blockers": [],
      "many": "ten",
      "waterPropulsion": "flippers",
      "fewLegged": "five-legged",
      "fold": "fivefold",
      "some": "five",
      "nPods": "pentapods",
      "nGons": "pentagons",
      "nPedal": "five-legged"
    },
    {
      "id": "6",
      "blockers": [],
      "many": "six",
      "waterPropulsion": "undulating bodies",
      "fewLegged": "six-legged",
      "fold": "hexagonal",
      "some": "six",
      "nPods": "hexapods",
      "nGons": "hexagons",
      "nPedal": "six-legged"
    },
    {
      "id": "0",
      "blockers": [],
      "many": "many",
      "waterPropulsion": "mass of tentacles",
      "fewLegged": "tentacular",
      "fold": "no",
      "some": "several",
      "nPods": "heptapods",
      "nGons": "blobs",
      "nPedal": "tentacular"
    }
  ],
  "animalColor": [
    {
      "id": "black",
      "blockers": [],
      "cap": "Black"
    },
    {
      "id": "striped",
      "blockers": [],
      "cap": "Striped"
    },
    {
      "id": "spotted",
      "blockers": [],
      "cap": "Spotted"
    },
    {
      "id": "red",
      "blockers": [],
      "cap": "Red"
    },
    {
      "id": "brown",
      "blockers": [],
      "cap": "Brown"
    },
    {
      "id": "white",
      "blockers": [],
      "cap": "White"
    },
    {
      "id": "many-colored",
      "blockers": [],
      "cap": "Many-colored"
    },
    {
      "id": "orange",
      "blockers": [],
      "cap": "Orange"
    },
    {
      "id": "mottled",
      "blockers": [],
      "cap": "Mottled"
    },
    {
      "id": "translucent",
      "blockers": [],
      "cap": "Translucent"
    },
    {
      "id": "yellow",
      "blockers": [],
      "cap": "Yellow"
    },
    {
      "id": "crimson",
      "blockers": [],
      "cap": "Crimson"
    },
    {
      "id": "pink",
      "blockers": [],
      "cap": "Pink"
    },
    {
      "id": "light blue",
      "blockers": [],
      "cap": "Light blue"
    },
    {
      "id": "dark green",
      "blockers": [],
      "cap": "Dark green"
    },
    {
      "id": "grey",
      "blockers": [],
      "cap": "Grey"
    },
    {
      "id": "dark orange",
      "blockers": [],
      "cap": "Dark orange"
    },
    {
      "id": "light green",
      "blockers": [],
      "cap": "Light green"
    },
    {
      "id": "dark grey",
      "blockers": [],
      "cap": "Dark grey"
    },
    {
      "id": "scintillating",
      "blockers": [],
      "cap": "Scintillating"
    },
    {
      "id": "glowing",
      "blockers": [],
      "cap": "Glowing"
    }
  ],
  "animalTexture": [
    {
      "id": "feathered",
      "blockers": []
    },
    {
      "id": "furry",
      "blockers": [
        [
          "climate",
          "veryHot"
        ]
      ]
    },
    {
      "id": "smooth-skinned",
      "blockers": [
        [
          "climate",
          "veryCold"
        ]
      ]
    },
    {
      "id": "scaly",
      "blockers": []
    },
    {
      "id": "spongy",
      "blockers": [
        [
          "climate",
          "veryCold"
        ]
      ]
    },
    {
      "id": "spiny",
      "blockers": []
    },
    {
      "id": "fuzzy",
      "blockers": []
    },
    {
      "id": "muscular",
      "blockers": []
    },
    {
      "id": "armored",
      "blockers": []
    },
    {
      "id": "gelatinous",
      "blockers": []
    },
    {
      "id": "rugose",
      "blockers": []
    },
    {
      "id": "segmented",
      "blockers": []
    },
    {
      "id": "leathery",
      "blockers": []
    }
  ],
  "flora": [
    {
      "id": "tubules",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ]
      ],
      "desc": "{plantTexture} {leafColor} tubules",
      "land": "There are clusters of {plantTexture} {leafColor} tubules everywhere.",
      "plural": "tubules",
      "lurk": "in the tubules.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "bubbles",
      "blockers": [
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ]
      ],
      "desc": "small {leafColor} bubbles",
      "land": "The local plant life takes the shape of small {leafColor} bubbles.",
      "plural": "bubbles",
      "lurk": "between the bubbles.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:warmC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "stalks",
      "blockers": [
        [
          "surface",
          "icyDesert"
        ]
      ],
      "desc": "tall, {leafColor} stalks",
      "land": "There are groups of tall, {leafColor} stalks everywhere.",
      "plural": "stalks",
      "lurk": "in the stalks.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "domes",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ]
      ],
      "desc": "giant {leafColor} geodesic domes",
      "land": "The plants take the shape of giant {leafColor} geodesic domes.",
      "plural": "domes",
      "lurk": "high up in the dome-plants.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "deepForests",
      "blockers": [
        [
          "surface",
          "tundra"
        ],
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "tall trees",
      "land": "Deep, dark forests cover the land.",
      "plural": "trees",
      "lurk": "in the branches.",
      "tall": "yes",
      "hab": "+1",
      "min": "+1",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:temperateC}",
      "hotC": "{leafColor:temperateC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "fungalThicket",
      "blockers": [
        [
          "surface",
          "tundra"
        ],
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "{leafColor} fungal towers",
      "land": "An impassable thicket of {leafColor} fungus covers the land.",
      "plural": "fungal towers",
      "lurk": "in the deepest fungal thickets.",
      "tall": "yes",
      "hab": "-1",
      "sze": "-1",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:warmC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "treeTowers",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "giant tower-like trees with {leafColor} leaves",
      "land": "There are giant tower-like trees with {leafColor} leaves.",
      "plural": "trees",
      "lurk": "in the branches.",
      "tall": "yes",
      "hab": "+1",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:warmC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "dottedShrubs",
      "blockers": [
        [
          "surface",
          "jungle"
        ]
      ],
      "desc": "{leafColor} shrubs with {plantDeco:desc}",
      "land": "There is the occasional {leafColor} shrub with {plantDeco:desc}.",
      "plural": "shrubs",
      "lurk": "under the shrubs.",
      "tall": "no",
      "coldC": "{soilColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{soilColor:c}",
      "hotC": "{rockColor:c}",
      "speckleC": "{leafColor:warmC}"
    },
    {
      "id": "grass",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "deep {leafColor} grass",
      "land": "Deep {leafColor} grass covers everything.",
      "plural": "blades of grass",
      "lurk": "in the grass.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:hotC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "grassClumps",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ]
      ],
      "desc": "{leafColor} grass",
      "land": "Clumps of {leafColor} grass.",
      "plural": "blades of grass",
      "lurk": "in the grass.",
      "tall": "no",
      "coldC": "{rockColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{soilColor:c}",
      "hotC": "{soilColor:c}",
      "speckleC": "{leafColor:temperateC}"
    },
    {
      "id": "lichen",
      "blockers": [
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ]
      ],
      "desc": "{leafColor} lichen",
      "land": "A thin dusting of {leafColor} lichen covers the land.",
      "plural": "clumps of lichen",
      "lurk": "in nooks and crannies.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:coldC}",
      "warmC": "{leafColor:coldC}",
      "hotC": "{leafColor:warmC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "floatingPlants",
      "blockers": [
        [
          "surface",
          "jungle"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ]
      ],
      "desc": "floating plants",
      "land": "Some local plants hover in mid-air, held aloft by gas bags.",
      "plural": "floating plants",
      "lurk": "between the tentacles of the flying plants.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "giantFlowers",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ]
      ],
      "desc": "thick {leafColor} stems with massive flowers",
      "land": "There are massive flowers in all kinds of colors, sitting atop thick {leafColor} stems.",
      "plural": "flowers",
      "lurk": "in the flowers.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "fungi",
      "blockers": [],
      "desc": "{leafColor} fungi",
      "land": "There are scattered {leafColor} fungi.",
      "plural": "fungi",
      "lurk": "under the fungi.",
      "tall": "no",
      "coldC": "{soilColor:c}",
      "temperateC": "{soilColor:c}",
      "warmC": "{soilColor:c}",
      "hotC": "{soilColor:c}",
      "speckleC": "{leafColor:temperateC}"
    },
    {
      "id": "moss",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ],
        [
          "surface",
          "jungle"
        ]
      ],
      "desc": "{leafColor} moss",
      "land": "The surface is covered in thick mats of {leafColor} moss.",
      "plural": "clumps of moss",
      "lurk": "in the moss.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:temperateC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "spines",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ]
      ],
      "desc": "tall {leafColor} {plantTexture} spines",
      "land": "The plants are tall {leafColor} {plantTexture} spines.",
      "plural": "spines",
      "lurk": "in the spines.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "sheets",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "vertical {leafColor} sheets of plant matter",
      "land": "The land is covered in vertical {leafColor} sheets of plant matter.",
      "plural": "sheets",
      "lurk": "between the sheets.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "toppedStalks",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "tall {leafColor} stalks covered in {plantDeco:desc}",
      "land": "The plants are tall {leafColor} stalks covered in {plantDeco:desc}, each with a single circular leaf at the top.",
      "plural": "stalks",
      "lurk": "in the leaves.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "nonToppedStalks",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ]
      ],
      "desc": "{leafColor}, {plantTexture} stalks",
      "land": "The plants are {leafColor}, {plantTexture} stalks with {plantDeco:desc} at the top.",
      "plural": "stalks",
      "lurk": "on the stalks.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "squatTrunks",
      "blockers": [
        [
          "surface",
          "jungle"
        ]
      ],
      "desc": "squat, {plantTexture} trunks with {plantDeco:desc}",
      "land": "The plants are squat, {plantTexture} trunks with {plantDeco:desc}.",
      "plural": "trunks",
      "lurk": "between the plants.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "barrels",
      "blockers": [
        [
          "surface",
          "jungle"
        ]
      ],
      "desc": "squat {leafColor} barrels covered with {plantDeco:desc}",
      "land": "The local plants take the shape of squat {leafColor} barrels covered with {plantDeco:desc}.",
      "plural": "barrels",
      "lurk": "between the plants.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "fronds",
      "blockers": [],
      "desc": "{leafColor} fronds",
      "land": "Clusters of {leafColor} fronds.",
      "plural": "fronds",
      "lurk": "in the fronds.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "sponges",
      "blockers": [],
      "desc": "{leafColor} sponges",
      "land": "The local plants are {leafColor} sponges.",
      "plural": "sponges",
      "lurk": "in the sponges.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:hotC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "trumpets",
      "blockers": [],
      "desc": "{plantTexture} trumpet-shaped plants",
      "land": "The plants are shaped like {plantTexture} trumpets pointing up at the sky.",
      "plural": "trumpets",
      "lurk": "in the trumpets.",
      "tall": "yes",
      "coldC": "{leafColor:temperateC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "hexsegments",
      "blockers": [],
      "desc": "{leafColor} segmented plants",
      "land": "The plants are made of hexagonal {leafColor} segments stacked atop each other, with {plantDeco:desc} between the segments.",
      "plural": "stacks",
      "lurk": "in the stacks.",
      "tall": "yes",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:temperateC}",
      "warmC": "{leafColor:warmC}",
      "hotC": "{leafColor:hotC}",
      "speckleC": "{landscape:speckleC}"
    },
    {
      "id": "roots",
      "blockers": [
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ],
        [
          "surface",
          "forests"
        ],
        [
          "surface",
          "scatteredForests"
        ],
        [
          "surface",
          "jungle"
        ]
      ],
      "desc": "{plantTexture} {leafColor} roots",
      "land": "The surface is covered in {plantTexture} {leafColor} roots.",
      "plural": "roots",
      "lurk": "between the roots.",
      "tall": "no",
      "coldC": "{leafColor:coldC}",
      "temperateC": "{leafColor:coldC}",
      "warmC": "{leafColor:coldC}",
      "hotC": "{leafColor:coldC}",
      "speckleC": "{landscape:speckleC}"
    }
  ],
  "leafColor": [
    {
      "id": "green",
      "blockers": [],
      "coldC": "[0.250980392157, 0.266666666667, 0.164705882353]",
      "temperateC": "[0.239215686275, 0.333333333333, 0.137254901961]",
      "warmC": "[0.223529411765, 0.501960784314, 0.121568627451]",
      "hotC": "[0.486274509804, 0.458823529412, 0.117647058824]"
    },
    {
      "id": "red",
      "blockers": [
        [
          "sun",
          "dullRed"
        ],
        [
          "sun",
          "harshRed"
        ]
      ],
      "coldC": "[0.521568627451, 0.262745098039, 0.180392156863]",
      "temperateC": "[0.745098039216, 0.133333333333, 0.176470588235]",
      "warmC": "[0.654901960784, 0.0823529411765, 0.101960784314]",
      "hotC": "[0.760784313725, 0.274509803922, 0.133333333333]"
    },
    {
      "id": "orange",
      "blockers": [],
      "coldC": "[0.709803921569, 0.325490196078, 0.0313725490196]",
      "temperateC": "[0.78431372549, 0.364705882353, 0.0705882352941]",
      "warmC": "[0.83137254902, 0.309803921569, 0.0352941176471]",
      "hotC": "[0.996078431373, 0.592156862745, 0.0078431372549]"
    },
    {
      "id": "purple",
      "blockers": [],
      "coldC": "[0.4, 0.419607843137, 0.443137254902]",
      "temperateC": "[0.380392156863, 0.376470588235, 0.41568627451]",
      "warmC": "[0.309803921569, 0.223529411765, 0.345098039216]",
      "hotC": "[0.376470588235, 0.227450980392, 0.372549019608]"
    },
    {
      "id": "black",
      "blockers": [],
      "coldC": "[0.180392156863, 0.2, 0.2]",
      "temperateC": "[0.192156862745, 0.239215686275, 0.219607843137]",
      "warmC": "[0.109803921569, 0.117647058824, 0.121568627451]",
      "hotC": "[0.454901960784, 0.388235294118, 0.364705882353]"
    },
    {
      "id": "blue",
      "blockers": [
        [
          "sun",
          "brightBlue"
        ],
        [
          "sun",
          "dimBlue"
        ]
      ],
      "coldC": "[0.160784313725, 0.470588235294, 0.529411764706]",
      "temperateC": "[0.145098039216, 0.411764705882, 0.490196078431]",
      "warmC": "[0.137254901961, 0.450980392157, 0.603921568627]",
      "hotC": "[0.149019607843, 0.462745098039, 0.525490196078]"
    },
    {
      "id": "white",
      "blockers": [
        [
          "flora",
          "deepForests"
        ],
        [
          "flora",
          "treeTowers"
        ],
        [
          "flora",
          "dottedShrubs"
        ]
      ],
      "coldC": "[0.756862745098, 0.717647058824, 0.549019607843]",
      "temperateC": "[0.807843137255, 0.81568627451, 0.721568627451]",
      "warmC": "[0.729411764706, 0.729411764706, 0.729411764706]",
      "hotC": "[0.678431372549, 0.643137254902, 0.560784313725]"
    },
    {
      "id": "yellow",
      "blockers": [],
      "coldC": "[0.737254901961, 0.439215686275, 0.321568627451]",
      "temperateC": "[0.988235294118, 0.839215686275, 0.0941176470588]",
      "warmC": "[0.996078431373, 0.823529411765, 0.0666666666667]",
      "hotC": "[0.839215686275, 0.760784313725, 0.466666666667]"
    },
    {
      "id": "crimson",
      "blockers": [],
      "coldC": "[0.486274509804, 0.223529411765, 0.0823529411765]",
      "temperateC": "[0.83137254902, 0.0941176470588, 0.0745098039216]",
      "warmC": "[0.980392156863, 0.0, 0.0980392156863]",
      "hotC": "[0.960784313725, 0.180392156863, 0.160784313725]"
    },
    {
      "id": "pink",
      "blockers": [],
      "coldC": "[0.733333333333, 0.0941176470588, 0.282352941176]",
      "temperateC": "[0.83137254902, 0.364705882353, 0.537254901961]",
      "warmC": "[0.807843137255, 0.380392156863, 0.560784313725]",
      "hotC": "[0.639215686275, 0.278431372549, 0.38431372549]"
    },
    {
      "id": "light blue",
      "blockers": [],
      "coldC": "[0.278431372549, 0.588235294118, 0.647058823529]",
      "temperateC": "[0.262745098039, 0.529411764706, 0.607843137255]",
      "warmC": "[0.254901960784, 0.56862745098, 0.721568627451]",
      "hotC": "[0.266666666667, 0.580392156863, 0.643137254902]"
    },
    {
      "id": "dark green",
      "blockers": [],
      "coldC": "[0.133333333333, 0.188235294118, 0.0470588235294]",
      "temperateC": "[0.121568627451, 0.254901960784, 0.0196078431373]",
      "warmC": "[0.105882352941, 0.423529411765, 0.00392156862745]",
      "hotC": "[0.36862745098, 0.380392156863, 0.0]"
    },
    {
      "id": "grey",
      "blockers": [],
      "coldC": "[0.498039215686, 0.43137254902, 0.376470588235]",
      "temperateC": "[0.63137254902, 0.623529411765, 0.603921568627]",
      "warmC": "[0.6, 0.6, 0.592156862745]",
      "hotC": "[0.478431372549, 0.486274509804, 0.486274509804]"
    },
    {
      "id": "dark orange",
      "blockers": [],
      "coldC": "[0.552941176471, 0.16862745098, 0.0]",
      "temperateC": "[0.627450980392, 0.207843137255, 0.0]",
      "warmC": "[0.674509803922, 0.152941176471, 0.0]",
      "hotC": "[0.839215686275, 0.435294117647, 0.0]"
    },
    {
      "id": "light green",
      "blockers": [],
      "coldC": "[0.329411764706, 0.38431372549, 0.243137254902]",
      "temperateC": "[0.317647058824, 0.450980392157, 0.21568627451]",
      "warmC": "[0.301960784314, 0.619607843137, 0.2]",
      "hotC": "[0.564705882353, 0.576470588235, 0.196078431373]"
    },
    {
      "id": "brown",
      "blockers": [],
      "coldC": "[0.564705882353, 0.254901960784, 0.18431372549]",
      "temperateC": "[0.662745098039, 0.317647058824, 0.196078431373]",
      "warmC": "[0.556862745098, 0.23137254902, 0.172549019608]",
      "hotC": "[0.937254901961, 0.592156862745, 0.360784313725]"
    }
  ],
  "plantTexture": [
    {
      "id": "smooth",
      "blockers": []
    },
    {
      "id": "knotted",
      "blockers": []
    },
    {
      "id": "brittle",
      "blockers": []
    },
    {
      "id": "spongy",
      "blockers": []
    },
    {
      "id": "reticulated",
      "blockers": []
    }
  ],
  "plantDecoColor": [
    {
      "id": "red",
      "blockers": [],
      "c": "[0.745098039216, 0.133333333333, 0.176470588235]"
    },
    {
      "id": "green",
      "blockers": [],
      "c": "[0.239215686275, 0.333333333333, 0.137254901961]"
    },
    {
      "id": "orange",
      "blockers": [],
      "c": "[0.78431372549, 0.364705882353, 0.0705882352941]"
    },
    {
      "id": "purple",
      "blockers": [],
      "c": "[0.380392156863, 0.376470588235, 0.41568627451]"
    },
    {
      "id": "black",
      "blockers": [],
      "c": "[0.192156862745, 0.239215686275, 0.219607843137]"
    },
    {
      "id": "blue",
      "blockers": [],
      "c": "[0.262745098039, 0.529411764706, 0.607843137255]"
    },
    {
      "id": "white",
      "blockers": [],
      "c": "[0.807843137255, 0.81568627451, 0.721568627451]"
    },
    {
      "id": "yellow",
      "blockers": [],
      "c": "[0.988235294118, 0.839215686275, 0.0941176470588]"
    },
    {
      "id": "crimson",
      "blockers": [],
      "c": "[0.83137254902, 0.0941176470588, 0.0745098039216]"
    },
    {
      "id": "pink",
      "blockers": [],
      "c": "[0.83137254902, 0.364705882353, 0.537254901961]"
    },
    {
      "id": "light blue",
      "blockers": [],
      "c": "[0.262745098039, 0.529411764706, 0.607843137255]"
    },
    {
      "id": "dark green",
      "blockers": [],
      "c": "[0.121568627451, 0.254901960784, 0.0196078431373]"
    },
    {
      "id": "grey",
      "blockers": [],
      "c": "[0.63137254902, 0.623529411765, 0.603921568627]"
    },
    {
      "id": "dark orange",
      "blockers": [],
      "c": "[0.627450980392, 0.207843137255, 0.0]"
    },
    {
      "id": "light green",
      "blockers": [],
      "c": "[0.317647058824, 0.450980392157, 0.21568627451]"
    },
    {
      "id": "brown",
      "blockers": [],
      "c": "[0.662745098039, 0.317647058824, 0.196078431373]"
    }
  ],
  "plantDeco": [
    {
      "id": "hairs",
      "blockers": [],
      "desc": "fine {plantDecoColor} hair"
    },
    {
      "id": "thinLeaves",
      "blockers": [],
      "desc": "thin {leafColor} leaves"
    },
    {
      "id": "broadLeaves",
      "blockers": [],
      "desc": "broad {leafColor} leaves"
    },
    {
      "id": "spines",
      "blockers": [],
      "desc": "{plantDecoColor} spines"
    },
    {
      "id": "thorns",
      "blockers": [],
      "desc": "{plantDecoColor} thorns"
    },
    {
      "id": "barbs",
      "blockers": [],
      "desc": "{plantDecoColor} barbs"
    },
    {
      "id": "warts",
      "blockers": [],
      "desc": "{plantDecoColor} warts"
    },
    {
      "id": "fruit",
      "blockers": [],
      "desc": "{plantDecoColor} fruit"
    },
    {
      "id": "flowers",
      "blockers": [],
      "desc": "{plantDecoColor} flowers"
    },
    {
      "id": "tentacles",
      "blockers": [],
      "desc": "{plantDecoColor} tentacles"
    },
    {
      "id": "blisters",
      "blockers": [],
      "desc": "{plantDecoColor} blisters"
    }
  ],
  "fauna": [
    {
      "id": "giantHives",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Giant hives of small, {animalTexture}, {symmetry:many}-legged creatures dominate. {lifeSpecial:plural}"
    },
    {
      "id": "suckers",
      "blockers": [],
      "desc": "The apex predators on {nameStart}{nameEnd} {nameNumber} inject their prey with digestive enzymes. {lifeSpecial:plural}"
    },
    {
      "id": "brainParasites",
      "blockers": [],
      "desc": "Vicious brain parasites lurk {surface:lurk} {lifeSpecial:plural}",
      "hab": "-3",
      "sci": "+1"
    },
    {
      "id": "tallNPods",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Gangly {animalColor} {symmetry:nPods} move between the {flora:plural}, feeding tentacles seeking nourishment. {lifeSpecial:plural}"
    },
    {
      "id": "nPodMatriarchs",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Clan groups of {animalColor} {symmetry:nPods} constantly vie for territory. {lifeSpecial:plural}"
    },
    {
      "id": "squatNPods",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Squat {animalTexture} {symmetry:nPods} move between the {flora:plural}. {lifeSpecial:plural}"
    },
    {
      "id": "constantFliers",
      "blockers": [],
      "desc": "{animalColor:cap} winged creatures spend their lives in flight, not even landing to reproduce. {lifeSpecial:plural}",
      "sci": "+1"
    },
    {
      "id": "accumulators",
      "blockers": [],
      "desc": "The local animals build shells for themselves out of precious metals. {lifeSpecial:plural}",
      "min": "+2"
    },
    {
      "id": "skeletonRecyclers",
      "blockers": [],
      "desc": "The skeletons of deceased animals are re-used as shells by small {animalTexture} creatures. {lifeSpecial:plural}"
    },
    {
      "id": "ambushPredators",
      "blockers": [],
      "desc": "Vicious {animalTexture} ambush predators lurk {surface:lurk} {lifeSpecial:plural}",
      "hab": "-1"
    },
    {
      "id": "lurkingSwarms",
      "blockers": [],
      "desc": "Swarms of tiny {symmetry:fewLegged} animals hide {surface:lurk} {lifeSpecial:plural}"
    },
    {
      "id": "nervoPods",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Groups of nervous {animalColor} {symmetry:nPods} graze on the {flora:plural}. {lifeSpecial:plural}"
    },
    {
      "id": "tribes",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Tribes of boisterous {animalColor} {symmetry:nPods} live in the {flora:plural}. {lifeSpecial:plural}"
    },
    {
      "id": "rapidHerds",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Herds of fast-moving {symmetry:fewLegged} animals stampede across the land. {lifeSpecial:plural}"
    },
    {
      "id": "insidePlants",
      "blockers": [
        [
          "flora:tall",
          "no"
        ]
      ],
      "desc": "Colonies of small {animalColor} creatures live inside the {flora:plural}. {lifeSpecial:plural}"
    },
    {
      "id": "shapeShifters",
      "blockers": [],
      "desc": "One of the local animals can imitate the shape and sounds of any creature, even a sentient one. {lifeSpecial:desc}",
      "hab": "-1",
      "sci": "+2"
    },
    {
      "id": "gasFloaters",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Grazing {animalColor} herbivores with {symmetry:fold} symmetry are held aloft by gas bags. {lifeSpecial:plural}"
    },
    {
      "id": "waterSwarms",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "animalTexture",
          "feathered"
        ]
      ],
      "desc": "Great swarms of {animalTexture} creatures inhabit the oceans. {lifeSpecial:plural}"
    },
    {
      "id": "deepScuttlers",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "animalTexture",
          "feathered"
        ]
      ],
      "desc": "The ocean depths are home to {animalTexture} scuttling creatures. {lifeSpecial:plural}"
    },
    {
      "id": "oceanWorms",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "The ocean shallows are home to giant {animalColor} worms. {lifeSpecial:plural}"
    },
    {
      "id": "oceanDrifters",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "Sheets of organic material drift through the ocean, ensnaring their prey in a passive fashion. {lifeSpecial:plural}"
    },
    {
      "id": "splashers",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "Groups of {animalColor} creatures splash and frolic in the shallows. {lifeSpecial:plural}"
    },
    {
      "id": "oceanGrazers",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "animalTexture",
          "feathered"
        ]
      ],
      "desc": "Far below the surface, slow-moving {animalTexture} creatures graze on the ocean floor. {lifeSpecial:plural}"
    },
    {
      "id": "oceanSails",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "climate",
          "cold"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "desc": "Large {animalColor} creatures use sails to drift across the ocean surface. {lifeSpecial:plural}"
    },
    {
      "id": "oceanHunters",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "Swift hunters with {symmetry:fold} symmetry stalk the sea. {lifeSpecial:plural}"
    },
    {
      "id": "oceanColonies",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "animalTexture",
          "feathered"
        ]
      ],
      "desc": "Large colonies of {animalTexture} {animalColor} creatures inhabit the shallows. {lifeSpecial:plural}"
    },
    {
      "id": "hydrothermals",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "climate",
          "hot"
        ],
        [
          "climate",
          "veryHot"
        ],
        [
          "climate",
          "temperate"
        ]
      ],
      "desc": "Small {animalColor} creatures cluster around hydrothermal vents. {lifeSpecial:plural}",
      "sci": "+1"
    },
    {
      "id": "oceanGiants",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "Gigantic {animalColor} creatures live in the ocean, moving slowly by using their {symmetry:waterPropulsion}. {lifeSpecial:plural}"
    },
    {
      "id": "hyperPredators",
      "blockers": [],
      "desc": "The planet is home to extremely dangerous apex predators, {animalTexture} {animalColor} creatures that move faster than the eye can track. {lifeSpecial:plural}",
      "hab": "-2",
      "sci": "+2"
    },
    {
      "id": "radiovores",
      "blockers": [],
      "desc": "The {animalTexture} local animals are able to feed on radioactivity. {lifeSpecial:plural}",
      "sci": "+2"
    },
    {
      "id": "swarmers",
      "blockers": [],
      "desc": "Every {prime} years, billions of {animalTexture} creatures hatch all at once and begin to swarm, eating everything in their path. {lifeSpecial:plural}",
      "hab": "-1"
    },
    {
      "id": "massiveHerds",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Massive herds of {symmetry:fewLegged}, {animalColor} beasts move across the planet in time with the seasons. {lifeSpecial:plural}",
      "hab": "+1",
      "min": "+1"
    },
    {
      "id": "invisiblePredators",
      "blockers": [],
      "desc": "The planet is home to a predatory creature that can turn itself invisible. {lifeSpecial:desc}",
      "hab": "-1",
      "sci": "+3"
    },
    {
      "id": "landGiants",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Ancient, {symmetry:fewLegged}, {animalColor} giants move across the land. {lifeSpecial:plural}"
    },
    {
      "id": "scuttlers",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "The land is teeming with {symmetry:many}-legged {animalColor} scuttling creatures. {lifeSpecial:plural}"
    },
    {
      "id": "giantWorms",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Giant {animalTexture} worms burrow in the {surface:ground}. {lifeSpecial:plural}",
      "sze": "-1"
    },
    {
      "id": "furryFliers",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Small, {animalTexture}, flying creatures zip between the {flora:plural}. {lifeSpecial:plural}"
    },
    {
      "id": "sessileTentacles",
      "blockers": [],
      "desc": "Sessile {animalTexture} tentacles lie in wait for their victims. {lifeSpecial:plural}"
    },
    {
      "id": "burrowers",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Small {animalTexture} burrowers make giant nests. {lifeSpecial:plural}"
    },
    {
      "id": "packHunters",
      "blockers": [],
      "desc": "Hundreds of {animalColor} animals hunt in well-coordinated packs. {lifeSpecial:plural}"
    },
    {
      "id": "giantNests",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "flora:tall",
          "no"
        ]
      ],
      "desc": "Groups of {animalTexture} animals work together to build giant, intricate dens out of the {flora:plural}. {lifeSpecial:plural}",
      "sze": "-1",
      "sci": "+1"
    },
    {
      "id": "psiConvincers",
      "blockers": [],
      "desc": "Squat, {animalTexture} creatures use their psionic abilities to convince their prey to simply lie down and accept being eaten. {lifeSpecial:plural}",
      "hab": "-2",
      "sci": "+3"
    },
    {
      "id": "poisonDarters",
      "blockers": [],
      "desc": "The animals of {nameStart}{nameEnd} {nameNumber} avail themselves of poisonous darts used both for defense and hunting. {lifeSpecial:plural}",
      "hab": "-1"
    },
    {
      "id": "motilePlants",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "The \"animals\" on {nameStart}{nameEnd} {nameNumber} are heavily modified, mobile plants. {lifeSpecial:plural}"
    },
    {
      "id": "segmented",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "animalTexture",
          "segmented"
        ]
      ],
      "desc": "Giant many-segmented {animalTexture} creatures slide along, crushing everything in their path. {lifeSpecial:plural}"
    },
    {
      "id": "social",
      "blockers": [],
      "desc": "The local creatures live in tight-knit family units. {lifeSpecial:plural}"
    },
    {
      "id": "worms",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "The {flora:plural} are covered in tiny {animalColor} worms. {lifeSpecial:plural}"
    },
    {
      "id": "prettyFliers",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "The air is filled with {animalColor} fluttering creatures. {lifeSpecial:plural}"
    },
    {
      "id": "engulfers",
      "blockers": [],
      "desc": "The local animals take their prey by engulfing it. {lifeSpecial:plural}"
    },
    {
      "id": "leapers",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Small {animalTexture} creatures rapidly leap between the {flora:plural}. {lifeSpecial:plural}"
    },
    {
      "id": "wheels",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "The planet's creatures have developed wheeled locomotion. {lifeSpecial:plural}",
      "sci": "+1"
    },
    {
      "id": "ooze",
      "blockers": [],
      "desc": "The animal life on this planet is a kind of protoplasmic ooze capable of temporarily forming itself into myriad shapes. {lifeSpecial:desc}"
    },
    {
      "id": "ngons",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Mobile stacks of {animalTexture} {symmetry:nGons} slowly move around. {lifeSpecial:plural}"
    },
    {
      "id": "persistence",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "desc": "Packs of {symmetry:nPedal} persistence hunters roam. {lifeSpecial:plural}"
    },
    {
      "id": "flocks",
      "blockers": [],
      "desc": "Great flocks of {animalTexture} {animalColor} fliers gather in the skies. {lifeSpecial:plural}"
    },
    {
      "id": "divers",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "{animalColor:cap} fliers patrol the oceans, diving suddenly to catch their prey. {lifeSpecial:plural}"
    },
    {
      "id": "divers",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "Thin {animalColor} ribbons move through the oceans. {lifeSpecial:plural}"
    },
    {
      "id": "torpedoes",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ]
      ],
      "desc": "Great {animalColor} torpedo-shaped hunters streak through the seas. {lifeSpecial:plural}"
    },
    {
      "id": "snailoids",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface:dry",
          "yes"
        ]
      ],
      "desc": "Large {animalTexture} creatures move across the land on trails of slime. {lifeSpecial:plural}"
    }
  ],
  "lifeSpecial": [
    {
      "id": "radar",
      "blockers": [],
      "plural": "They use a biological radar to perceive the world around them.",
      "desc": "The local creatures use a biological radar to perceive the world."
    },
    {
      "id": "masks",
      "blockers": [
        [
          "fauna",
          "sessileTentacles"
        ],
        [
          "fauna",
          "ooze"
        ]
      ],
      "plural": "Their faces look like colorful masks.",
      "desc": "The faces of the local creatures look like colorful masks."
    },
    {
      "id": "hibernate",
      "blockers": [],
      "plural": "They spend most of their lives in hibernation, punctuated by rapid bursts of activity when conditions are right.",
      "desc": "The local creatures spend most of their lives in hibernation, punctuated by rapid bursts of activity when conditions are right."
    },
    {
      "id": "falseBodies",
      "blockers": [],
      "plural": "They build decoy bodies from special secretions.",
      "desc": "The local creatures use their secretions to build decoy bodies."
    },
    {
      "id": "horns",
      "blockers": [],
      "plural": "Their heads have {symmetry:some} horns.",
      "desc": "Many animals on {nameStart}{nameEnd} {nameNumber} have {symmetry:some} horns."
    },
    {
      "id": "cilia",
      "blockers": [],
      "plural": "Their bodies are covered in sensory cilia.",
      "desc": "The bodies of the local fauna are covered in sensory cilia."
    },
    {
      "id": "growth",
      "blockers": [],
      "plural": "They keep growing as they age, leading to some massive specimens.",
      "desc": "The local animals keep growing as they age, leading to some massive specimens."
    },
    {
      "id": "eyeStrip",
      "blockers": [],
      "plural": "A narrow strip of eyes wraps around their bodies, giving them 360-degree vision.",
      "desc": "A narrow strip of eyes wraps around the bodies of most local animals, giving them 360-degree vision."
    },
    {
      "id": "explode",
      "blockers": [],
      "plural": "As a last-ditch defense mechanism, they will literally explode.",
      "desc": "Some of the local creatures will literally explode as a last-ditch defense mechanism.",
      "sci": "+1"
    },
    {
      "id": "hollowSymbiotes",
      "blockers": [],
      "plural": "Symbiotic creatures live on their skin, keeping away pests and attackers.",
      "desc": "Symbiotic creatures live on the skin of many of the local animals, keeping away pests and attackers.",
      "sci": "+1"
    },
    {
      "id": "buddingOff",
      "blockers": [],
      "plural": "They reproduce by budding off.",
      "desc": "The local lifeforms reproduce by budding off."
    },
    {
      "id": "sporeRepro",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "They reproduce by sporulation.",
      "desc": "The local lifeforms reproduce by sporulation.",
      "hazeC": "[0.3, 0.3, 0.3]"
    },
    {
      "id": "eatenByOffspring",
      "blockers": [],
      "plural": "Their offspring eat their way out of them.",
      "desc": "The offspring of the animals on the planet simply eat their way out of their parents."
    },
    {
      "id": "parasiticalReproduction",
      "blockers": [],
      "plural": "They implant their eggs into the living tissues of animals they catch for this purpose.",
      "desc": "Many of the local animals implant their eggs into the tissues of other living animals."
    },
    {
      "id": "splitting",
      "blockers": [],
      "plural": "They reproduce by splitting along their seams, resulting in {symmetry:some} equally-sized offspring.",
      "desc": "The creatures on this planet reproduce by splitting along their seams, resulting in {symmetry:some} equally-sized  offspring."
    },
    {
      "id": "temporaryEyes",
      "blockers": [],
      "plural": "They have many eyes on stalks, which frequently drop off and regrow.",
      "desc": "The eyes of the local animals frequently drop off and regrow."
    },
    {
      "id": "psiShock",
      "blockers": [],
      "plural": "When threatened, they use psionic powers to stun their potential attackers.",
      "desc": "The local lifeforms have psionic powers they use to stun potential threats.",
      "sci": "+2"
    },
    {
      "id": "humming",
      "blockers": [],
      "plural": "They emit a constant humming sound.",
      "desc": "There is a constant humming sound."
    },
    {
      "id": "psiNightmares",
      "blockers": [],
      "plural": "Their psionic abilities cause constant nightmares.",
      "desc": "The psionic abilities of the local lifeforms cause constant nightmares.",
      "hab": "-4"
    },
    {
      "id": "psiEuphoria",
      "blockers": [],
      "plural": "Their psionic abilities cause a dangerous feeling of constant euphoria.",
      "desc": "The psionic abilities of the local lifeforms cause a dangerous feeling of constant euphoria.",
      "hab": "-1",
      "sci": "+1"
    },
    {
      "id": "braying",
      "blockers": [],
      "plural": "They make loud braying sounds.",
      "desc": "One of the local creatures makes loud braying sounds."
    },
    {
      "id": "hissing",
      "blockers": [],
      "plural": "They make quiet hissing sounds.",
      "desc": "There are quiet hissing sounds coming from somewhere."
    },
    {
      "id": "chittering",
      "blockers": [],
      "plural": "They use a chittering sound to communicate.",
      "desc": "Chittering sounds occasionally erupt from groups of local animals."
    },
    {
      "id": "soundStun",
      "blockers": [],
      "plural": "They use extremely loud sounds to stun their victims.",
      "desc": "One of the local predators uses extremely loud sounds to stun its prey.",
      "hab": "-1"
    },
    {
      "id": "electricShocks",
      "blockers": [],
      "plural": "They can produce powerful electric shocks to defend themselves.",
      "desc": "Some of the local animals can produce powerful electric shocks to defend themselves."
    },
    {
      "id": "bioLaser",
      "blockers": [],
      "plural": "They are able to emit laser-like blasts of light to hurt and disorient their enemies.",
      "desc": "Some of the wildlife can emit laser-like blasts of light to hurt and disorient their enemies.",
      "hab": "-1",
      "sci": "+2"
    },
    {
      "id": "nests",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "fauna",
          "giantNests"
        ],
        [
          "fauna",
          "burrowers"
        ]
      ],
      "plural": "They build nests in the {flora:plural}.",
      "desc": "There are many nests in the {flora:plural}."
    },
    {
      "id": "foam",
      "blockers": [
        [
          "surface:ocean",
          "no"
        ],
        [
          "climate",
          "cold"
        ],
        [
          "climate",
          "veryCold"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "A white foam of unknown origin covers much of the ocean.",
      "oceanC": "[0.52, 0.5, 0.5]"
    },
    {
      "id": "climbers",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "fauna",
          "leapers"
        ]
      ],
      "plural": "Many animals can be found climbing in the {flora:plural}."
    },
    {
      "id": "fungalZombies",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "The local fungus takes over the motor functions of deceased animals, using their decaying bodies to spread and feed itself.",
      "hab": "-1",
      "sci": "+2"
    },
    {
      "id": "bigEyed",
      "blockers": [],
      "plural": "They each have a single, massive eye.",
      "desc": "Most of the creatures on {nameStart}{nameEnd} {nameNumber} have a single, massive eye."
    },
    {
      "id": "manyEyed",
      "blockers": [],
      "plural": "Their eyes are clustered at the end of long tentacles.",
      "desc": "The eyes of the local animals are clustered at the end of long tentacles."
    },
    {
      "id": "treeEggs",
      "blockers": [
        [
          "flora:tall",
          "no"
        ],
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "They lay millions of tiny eggs in the {flora:plural}.",
      "desc": "The {flora:plural} are covered in millions of tiny eggs."
    },
    {
      "id": "pharmaceuticals",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "Some of the local plants have interesting pharmaceutical properties.",
      "hab": "+1",
      "sci": "+3"
    },
    {
      "id": "toxic",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "The biochemistry of the local life is toxic.",
      "hab": "-2"
    },
    {
      "id": "clingons",
      "blockers": [],
      "plural": "They have a tendency to cling on to the hulls of visiting spaceships.",
      "desc": "The local wildlife has a tendency to cling on to the hulls of visiting spaceships."
    },
    {
      "id": "rapidMutation",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "Life on the planet mutates and evolves at a rapid pace.",
      "sci": "+2"
    },
    {
      "id": "fires",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "surface",
          "tundra"
        ],
        [
          "surface",
          "icyDesert"
        ],
        [
          "surface",
          "desert"
        ],
        [
          "surface",
          "rocks"
        ],
        [
          "surface",
          "jaggedRocks"
        ],
        [
          "surface",
          "muddy"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "There are constant fires filling the skies with smoke.",
      "hab": "-1",
      "sze": "-1",
      "hazeC": "[0.35, 0.35, 0.3]"
    },
    {
      "id": "selfImmolation",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "The local {flora:plural} periodically set themselves on fire to spread their seeds.",
      "hab": "-1",
      "sze": "-1"
    },
    {
      "id": "pollen",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "special",
          "thinAir"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "The air is filled with a thick haze of pollen.",
      "hab": "-1",
      "hazeC": "[0.4, 0.4, 0.1]"
    },
    {
      "id": "spores",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "special",
          "thinAir"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "The air is filled with a thick haze of spores.",
      "hab": "-1",
      "hazeC": "[0.2, 0.35, 0.22]"
    },
    {
      "id": "hairs",
      "blockers": [
        [
          "surface:land",
          "no"
        ],
        [
          "special",
          "thinAir"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "The air is filled with a thick haze of hairs.",
      "hab": "-1",
      "hazeC": "[0.3, 0.12, 0.12]"
    },
    {
      "id": "symbiosis",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "The local life is enmeshed in a complex symbiotic network.",
      "sci": "+2"
    },
    {
      "id": "morphs",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "Most of the local animals are different morphs of the same highly versatile species.",
      "sci": "+1"
    },
    {
      "id": "superorganism",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "The lifeforms on this planet appear to be part of a kind of superorganism.",
      "sci": "+2"
    },
    {
      "id": "hallucinogens",
      "blockers": [],
      "plural": "{lifeSpecial:desc}",
      "desc": "The air is filled with organic compounds that induce hallucinations.",
      "hab": "-1",
      "hazeC": "[0.3, 0.1, 0.3]"
    },
    {
      "id": "songs",
      "blockers": [],
      "plural": "They produce eerie but beautiful songs.",
      "desc": "The local creatures produce eerie but beautiful songs.",
      "hab": "+1"
    },
    {
      "id": "dissolvingFungus",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "{lifeSpecial:desc}",
      "desc": "The local fungus dissolves everything in its path, even spacecraft hulls.",
      "hab": "-3",
      "sze": "-3",
      "sci": "+1"
    },
    {
      "id": "immortal",
      "blockers": [],
      "plural": "They are functionally immortal.",
      "desc": "Most of the animal life is functionally immortal, dying only when eaten or otherwise killed.",
      "sci": "+1"
    },
    {
      "id": "echolocating",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "They use echolocation to find their way around, filling the air with chirps and trills.",
      "desc": "Most of the local animals use echolocation to find their way around, filling the air with chirps and trills."
    },
    {
      "id": "claws",
      "blockers": [],
      "plural": "They have large claws.",
      "desc": "Many of the local animals have large claws."
    },
    {
      "id": "fangs",
      "blockers": [],
      "plural": "They have large fangs.",
      "desc": "Many of the local animals have large fangs."
    },
    {
      "id": "toolUse",
      "blockers": [],
      "plural": "They are capable of using simple tools.",
      "desc": "Some of the species on the planet have developed simple tool use.",
      "sci": "+1"
    },
    {
      "id": "herders",
      "blockers": [],
      "plural": "They keep herds of smaller creatures for sustenance.",
      "desc": "A few of the local species have taken to keeping herds of other animals for sustenance."
    },
    {
      "id": "farmers",
      "blockers": [
        [
          "surface:land",
          "no"
        ]
      ],
      "plural": "They tend to patches of {flora:plural} as a food source.",
      "desc": "There are patches of {flora:plural} tended to by local lifeforms as a food source."
    },
    {
      "id": "multiHead",
      "blockers": [],
      "plural": "They have multiple heads.",
      "desc": "Many of the animals have multiple heads."
    },
    {
      "id": "lightComms",
      "blockers": [],
      "plural": "They use flashes of colored light to communicate.",
      "desc": "There are constant flashes of colored light used by the local wildlife to communicate."
    },
    {
      "id": "falseHead",
      "blockers": [],
      "plural": "They have a large false head to distract attackers.",
      "desc": "Many of the animals have false heads used to distract attackers."
    },
    {
      "id": "juvieHunt",
      "blockers": [],
      "plural": "The adults hunt their own juveniles for food.",
      "desc": "Many of the animals on {nameStart}{nameEnd} {nameNumber} hunt their own juveniles for food."
    },
    {
      "id": "bigEgg",
      "blockers": [],
      "plural": "They lay large eggs and guard them carefully.",
      "desc": "The animals on this planet tend to lay single large eggs, and guard them carefully."
    },
    {
      "id": "noxiousFluid",
      "blockers": [],
      "plural": "When threatened, they release a noxious fluid.",
      "desc": "Some of the animals release a noxious fluid when threatened."
    },
    {
      "id": "noxiousGas",
      "blockers": [],
      "plural": "When threatened, they release a noxious gas.",
      "desc": "Some of the animals release a noxious gas when threatened."
    },
    {
      "id": "slimeDefense",
      "blockers": [],
      "plural": "They exude a sticky slime when threatened.",
      "desc": "Some of the animals release a sticky slime when threatened."
    },
    {
      "id": "slimeOffense",
      "blockers": [],
      "plural": "They can exude a rapidly-hardening slime to trap their prey.",
      "desc": "Many of the local creatures can exude a rapidly-hardening slime to trap their prey."
    },
    {
      "id": "secretionExo",
      "blockers": [],
      "plural": "They construct exoskeletons from special, rapidly hardening secretions.",
      "desc": "Many of the animals construct exoskeletons from special, rapidly hardening secretions."
    },
    {
      "id": "shellCarvers",
      "blockers": [],
      "plural": "They carve perfectly fitting shells out of the local {rockColor} rocks.",
      "desc": "Many of the creatures on {nameStart}{nameEnd} {nameNumber} carve shells for themselves out of the local {rockColor} rocks."
    },
    {
      "id": "adultNoEat",
      "blockers": [],
      "plural": "Their adult stage does not eat, and only mates and then dies.",
      "desc": "Adults of most species on the planet do not eat, living only to mate and then die."
    },
    {
      "id": "scentHunt",
      "blockers": [],
      "plural": "They track down their prey by scent.",
      "desc": "The local predators track down their prey by scent."
    },
    {
      "id": "psiHunt",
      "blockers": [],
      "plural": "They track down their prey using their psionic powers.",
      "desc": "The local predators track down their prey using their psionic powers.",
      "hab": "-1",
      "sci": "+1"
    },
    {
      "id": "nothingSpecial",
      "blockers": [],
      "plural": " ",
      "desc": " "
    }
  ]
};


Vue.component("planet-render", {
  props: ['planetParams'],

  data: function () {

    return {
      t: new Date().getTime() % 1000000,

      // planetParams: this.planetParams,
    }
  },
  methods: {
    buildShaders() {
      let _gl = this.$refs.canvas.getContext("webgl");
      this.gl = _gl;
      this.vertexShader = createShader(_gl, _gl.VERTEX_SHADER, vertexShaderSource());
      this.fragmentShader = createShader(_gl, _gl.FRAGMENT_SHADER, fragmentShaderSource());
      this.program = createProgram(_gl, this.vertexShader, this.fragmentShader);
      this.positionAttributeLocation = _gl.getAttribLocation(this.program, "a_position");
    },

    getUniformLocation(v) {
      return this.gl.getUniformLocation(this.program, v);
    },

    getAllUniformLocations() {
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

      this.positionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
      // three 2d points
      this.positions = [
        -1, -1,
        -1, 1,
        1, 1,
        -1, -1,
        1, 1,
        1, -1
      ];
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.positions), this.gl.STATIC_DRAW);
    },

    renderPlanet() {
      let gl = this.gl
      resize(gl.canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      // Clear the canvas
      //gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      // Tell it to use our program (pair of shaders)
      gl.useProgram(this.program);
      gl.enableVertexAttribArray(this.positionAttributeLocation);
      // Bind the position buffer.
      gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

      // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
      var size = 2; // 2 components per iteration
      var type = gl.FLOAT; // the data is 32bit floats
      var normalize = false; // don't normalize the data
      var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
      var offset = 0; // start at the beginning of the buffer
      gl.vertexAttribPointer(
        this.positionAttributeLocation, size, type, normalize, stride, offset)

      let planetRadius = 380 / (1 + Math.exp(this.planetParams.radius / 100)) + 190;
      console.log(planetRadius)
      gl.uniform1i(this.uCities, 0);
      gl.uniform1f(this.uTime, this.$data.t * 0.001); // qqDPS
      gl.uniform1f(this.uLeft, -(400 - planetRadius) / 2);
      gl.uniform1f(this.uTop, -(400 - planetRadius) / 2);
      gl.uniform2f(this.uResolution, planetRadius, planetRadius);
      gl.uniform1f(this.uAngle, this.planetParams.vAngle);
      gl.uniform1f(this.uRotspeed, this.planetParams.vRotspeed);
      gl.uniform1f(this.uLight, this.planetParams.vLight);
      gl.uniform1f(this.uZLight, this.planetParams.vZLight);
      gl.uniform3fv(this.uLightColor, this.planetParams.vLightColor);
      gl.uniform1f(this.uModValue, this.planetParams.vModValue);
      gl.uniform2fv(this.uNoiseOffset, this.planetParams.vNoiseOffset);
      gl.uniform2fv(this.uNoiseScale, this.planetParams.vNoiseScale);
      gl.uniform2fv(this.uNoiseScale2, this.planetParams.vNoiseScale2);
      gl.uniform2fv(this.uNoiseScale3, this.planetParams.vNoiseScale3);
      gl.uniform2fv(this.uCloudNoise, this.planetParams.vCloudNoise);
      gl.uniform1f(this.uCloudiness, this.planetParams.vCloudiness);
      gl.uniform3fv(this.uOcean, this.planetParams.vOcean);
      gl.uniform3f(this.uIce, 250 / 255.0, 250 / 255.0, 250 / 255.0);
      gl.uniform3fv(this.uCold, this.planetParams.vCold); //53/255.0, 102/255.0, 100/255.0);
      gl.uniform3fv(this.uTemperate, this.planetParams.vTemperate); //79/255.0, 109/255.0, 68/255.0);
      gl.uniform3fv(this.uWarm, this.planetParams.vWarm); //119/255.0, 141/255.0, 82/255.0);
      gl.uniform3fv(this.uHot, this.planetParams.vHot); //223/255.0, 193/255.0, 148/255.0);
      gl.uniform3fv(this.uSpeckle, this.planetParams.vSpeckle);
      gl.uniform3fv(this.uClouds, this.planetParams.vClouds);
      gl.uniform3fv(this.uHaze, this.planetParams.vHaze);
      gl.uniform1f(this.uWaterLevel, this.planetParams.vWaterLevel);
      gl.uniform1f(this.uRivers, this.planetParams.vRivers);
      gl.uniform1f(this.uTemperature, this.planetParams.vTemperature);

      var primitiveType = gl.TRIANGLES;
      var offset = 0;
      var count = 6;
      gl.drawArrays(primitiveType, offset, count);
    },

    _nextFrame() {
      this.t = new Date().getTime() % 1000000;
      this.renderPlanet();
      requestAnimationFrame(this._nextFrame);
    }
  },
  mounted: function () {
    this.buildShaders();
    this.getAllUniformLocations();
    console.log(this.$data);

    this.renderPlanet();

    // Once everything is set up, start game loop.
    requestAnimationFrame(this._nextFrame);
  },
  template: '<canvas ref="canvas" class="planet-view"></canvas>',
});
// var canvas = document.getElementById("planet-view");

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


var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var t = new Date().getTime() % 1000000;

// function nextFrame() {
//   t = new Date().getTime() % 1000000;
//   renderPlanet();
//   requestAnimationFrame(nextFrame);
// }

// // Once everything is set up, start game loop.
// requestAnimationFrame(nextFrame);

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



// fetch('./assets/structs.json')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     structs = data
//     console.log(data)
//   })
//   .catch(err => {
//     // Do something for an error here
//     console.log(err);
//   })

// fetch('./assets/slots.json')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     slots = data
//     console.log("loaded sots, generating")

//     doDisplay(doGen("planet"));
//   })
//   .catch(err => {
//     // Do something for an error here
//     console.log(err);
//   })

function vertexShaderSource() {
  return `
attribute vec4 a_position;
void main() {
  gl_Position = a_position;
}`}

function fragmentShaderSource() {
  return `
#ifdef GL_ES
precision highp float;
#endif

uniform int cities;
uniform float time;
uniform float left;
uniform float top;
uniform vec2 resolution;
uniform float angle;
uniform float rotspeed;
uniform float light;
uniform float zLight;

uniform float modValue;

uniform vec2 noiseOffset;
uniform vec2 noiseScale;
uniform vec2 noiseScale2;
uniform vec2 noiseScale3;
uniform vec2 cloudNoise;

uniform float cloudiness;

uniform float waterLevel;
uniform float rivers;
uniform float temperature;

uniform vec3 ocean;
uniform vec3 ice;
uniform vec3 cold;
uniform vec3 temperate;
uniform vec3 warm;
uniform vec3 hot;
uniform vec3 speckle;
uniform vec3 clouds;
uniform vec3 haze;
uniform vec3 lightColor;

//
// GLSL textureless classic 2D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x)
{
return x - floor(x * (1.0 / modValue)) * modValue;
}

vec4 permute(vec4 x)
{
return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade(vec2 t) {
return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec2 P, vec2 rep)
{
vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
Pi = mod(Pi, rep.xyxy); // To create noise with explicit period
Pi = mod289(Pi);        // To avoid truncation effects in permutation
vec4 ix = Pi.xzxz;
vec4 iy = Pi.yyww;
vec4 fx = Pf.xzxz;
vec4 fy = Pf.yyww;

vec4 i = permute(permute(ix) + iy);

vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
vec4 gy = abs(gx) - 0.5 ;
vec4 tx = floor(gx + 0.5);
gx = gx - tx;

vec2 g00 = vec2(gx.x,gy.x);
vec2 g10 = vec2(gx.y,gy.y);
vec2 g01 = vec2(gx.z,gy.z);
vec2 g11 = vec2(gx.w,gy.w);

vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
g00 *= norm.x;  
g01 *= norm.y;  
g10 *= norm.z;  
g11 *= norm.w;  

float n00 = dot(g00, vec2(fx.x, fy.x));
float n10 = dot(g10, vec2(fx.y, fy.y));
float n01 = dot(g01, vec2(fx.z, fy.z));
float n11 = dot(g11, vec2(fx.w, fy.w));

vec2 fade_xy = fade(Pf.xy);
vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
return 2.3 * n_xy;
}

float spow(float x, float y) { float s = sign(x); return s * pow(s * x, y); }

vec4 planet(in vec2 pix) {
  vec2 p = -1.0 + 2.0 * pix;
  p.x *= resolution.x / resolution.y;
  float rot = time * rotspeed;
  p = mat2(cos(angle), sin(angle), -sin(angle), cos(angle)) * p;
  
  vec3 ro = vec3( 0.0, 0.0, 2.25 );
  vec3 rd = normalize( vec3( p, -2.0 ) );

  vec3 col = vec3(0.0);

  // intersect sphere
  float b = dot(ro,rd);
  float c = dot(ro,ro) - 1.0;
  float h = b*b - c;
  float t = -b - sqrt(h);
  vec3 pos = ro + t*rd;
  vec3 nor = pos;

  // texture mapping
  vec2 uv;
  uv.x = atan(nor.x,nor.z)/6.2831 + rot;
  uv.y = acos(nor.y)/3.1416;
  uv.y = 0.5 + spow(uv.y - 0.5, 1.2);
  uv += noiseOffset;
  
  float n2 = pnoise(uv * noiseScale2, noiseScale2) * 0.05;
  float n = pnoise(uv * noiseScale, noiseScale) + n2;
  float n3 = pnoise(uv * noiseScale3, noiseScale3);
  
  float temp = cos(nor.y * 4.0) + n3 * 0.8 + n * 0.5 + temperature;
  
  float oceanity = min(1.0, 1.0 - smoothstep(0.19, 0.2, n - waterLevel) + rivers * (1.0 - smoothstep(0.01, 0.04, mod(temp - uv.x * 35.0 + 0.3, 1.0) + n * n * 0.35))) * smoothstep(-0.9, -0.75, temp);

  float iceity = max(0.0, 1.0 + waterLevel - oceanity - smoothstep(-0.8, -0.6, temp));
  float specklity = max(0.0, step(0.009, n2 * n3) - iceity - oceanity);
  float coldity = max(0.0, 1.0 - iceity - oceanity - specklity - smoothstep(-0.4, 0.0, temp));
  float temperateity = max(0.0, 1.0 - iceity - coldity - oceanity - specklity - smoothstep(0.3, 0.8, temp));
  float warmity = max(0.0, 1.0 - iceity - coldity - temperateity - oceanity - specklity - smoothstep(1.05, 1.3, temp));
  float hottity = max(0.0, 1.0 - oceanity - iceity - coldity - temperateity - warmity - specklity);
  
  col = ocean * oceanity + ice * iceity + cold * coldity + temperate * temperateity + warm * warmity + hot * hottity + speckle * specklity;
  
  col *= (0.7 + abs(temp + n * 0.2) * 0.3);
  col *= 0.92 + step(0.1, mod(n2, 0.4)) * 0.08;
  col *= 1.0 + step(0.39, mod(n + uv.x, 0.4)) * 0.1;
  
  float cloudN = max(0.0, pnoise((uv + vec2(rotspeed * time, 0)) * cloudNoise, cloudNoise) + cloudiness + n2);
  col = col * (1.0 - cloudN) + clouds * cloudN;

  float lighting = max(sin(light) * nor.y * 2.0 + cos(light) * nor.x * 2.0 + nor.z * zLight,0.0);
  col = col * 0.2 + col * lightColor * lighting * 0.8;
  
  if (
      cities == 1 &&
      lighting <= 0.8 &&
      (n > 0.05 && n < 0.2 ||// Next to the water
      mod(uv.x * uv.y + n / 10.0, 1.0) < 0.1)
  )
  {
      col += vec3(1.0, 1.0, 0.7) * (1.0 - smoothstep(0.4, 0.8, lighting)) * (max(0.7, pnoise(uv * vec2(122.0, 122.0), vec2(122.0, 122.0))) - 0.7) * 3.0;
  }

  //return vec4(col, smoothstep(0.0, 8.0 / resolution.x, h));
  return vec4(clamp(col, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0)) * smoothstep(0.0, 8.0 / resolution.x, h) + haze * smoothstep(0.0, 30.0 / resolution.x, h + 0.1), smoothstep(0.0, 30.0 / resolution.x, h + 0.1));
}

void main(void)
{
  vec3 coord = vec3(gl_FragCoord);
  coord.x += left;
  coord.y += top;

  gl_FragColor = planet(coord.xy / resolution.xy), 1.0;
}`}