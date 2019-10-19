////////////////////////////////////////////////////////////////////
// https://github.com/wwwtyro/procedural.js Public Domain         //
////////////////////////////////////////////////////////////////////

//TODO: Parametrize sun color.

"use strict";

////////////////////////////////////////////////////////////////////
// Iterator & Renderers                                           //
////////////////////////////////////////////////////////////////////

let XYIterator = function(width, height) {
    this.width = width;
    this.height = height;
    this.x = -1;
    this.y = 0;
}

XYIterator.prototype.next = function() {
    if (this.y == this.height) {
        return {
            x: this.width - 1,
            y: this.width - 1,
            done: 1
        };
    }
    this.x++;
    if (this.x == this.width) {
        this.x = 0;
        this.y++;
    }
    if (this.y == this.height) {
        return {
            x: this.width - 1,
            y: this.width - 1,
            done: 1
        };
    }
    return {
        x: this.x,
        y: this.y,
        done: (this.y * this.width + this.x) / (this.width * this.height)
    };
}

////////////////////////////////////////////////////////////////////

export function StarRenderer(canvas, r, g, b, x, y, size) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.x = Math.round(x);
    this.y = Math.round(y);
    this.size = size;
    this.context = canvas.getContext("2d");
    this.e = 0.5;
    let E = this.e * 2;
    this.m = Math.pow(this.size, E);
    let d = 0;
    while (this.m / Math.pow(d * d, this.e + (d * d) / 10000) > 0.001) {
        d++;
    }
    this.side = d;
    this.iterator = new XYIterator(this.side * 2, this.side * 2);
}

StarRenderer.prototype.next = function() {
    let next = this.iterator.next();
    let d = Math.pow(next.x - this.side, 2) + Math.pow(next.y - this.side, 2);
    let i = Math.min(1, this.m / Math.pow(d, this.e + d / 10000));
    this.context.fillStyle = rgba(this.r, this.g, this.b, i);
    this.context.fillRect(next.x + this.x - this.side, next.y + this.y - this.side, 1, 1);
    return next.done;
}

////////////////////////////////////////////////////////////////////

export function SunRenderer(canvas, r, g, b, x, y, size) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.x = x;
    this.y = y;
    this.size = size;
    this.context = canvas.getContext("2d");
    this.iterator = new XYIterator(canvas.width, canvas.height);
    this.e = 1;
    this.m = Math.pow(this.size, this.e * 2);
    this.idata = this.context.getImageData(0, 0, canvas.width, canvas.height).data;
}

SunRenderer.prototype.next = function() {
    let next = this.iterator.next();
    let d = Math.pow(next.x - this.x, 2) + Math.pow(next.y - this.y, 2);
    let raw = this.m / Math.pow(d, this.e);
    let i = Math.min(1, raw);
    let q = raw - i;
    let offset = next.y * this.iterator.width * 4 + next.x * 4;
    let r = this.idata[offset + 0] / 255 + Math.min(1, this.r + q * 2) * i;
    let g = this.idata[offset + 1] / 255 + Math.min(1, this.g + q * 4) * i;
    let b = this.idata[offset + 2] / 255 + Math.min(1, this.b + q * 2) * i;
    this.context.fillStyle = rgba(r, g, b, 1);
    this.context.fillRect(next.x, next.y, 1, 1);
    return next.done;
}

////////////////////////////////////////////////////////////////////

export function NebulaRenderer(canvas, r, g, b, scale, intensity, falloff) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.scale = scale;
    this.intensity = intensity;
    this.falloff = falloff;
    this.context = canvas.getContext("2d");
    this.pn = new Perlin("" + Math.random());
    this.iterator = new XYIterator(canvas.width, canvas.height);
}

NebulaRenderer.prototype.recursiveField = function(x, y, depth, divisor) {
    if (depth == 0) {
        return this.pn.noise(x / divisor, y / divisor, 0);
    }
    let displace = this.recursiveField(x, y, depth - 1, divisor / 2);
    return this.pn.noise(x / divisor + displace, y / divisor + displace, 0);
}

NebulaRenderer.prototype.field = function(r, g, b, x, y, intensity, falloff) {
    let i = Math.min(1, this.recursiveField(x, y, 5, 2) * intensity);
    i = Math.pow(i, falloff);
    return rgba(r, g, b, i);
}

NebulaRenderer.prototype.next = function() {
    let next = this.iterator.next();
    this.context.fillStyle = this.field(this.r, this.g, this.b, next.x / this.scale, next.y / this.scale, this.intensity, this.falloff);
    this.context.fillRect(next.x, next.y, 1, 1);
    return next.done;
}

////////////////////////////////////////////////////////////////////
// SpaceVista                                                     //
////////////////////////////////////////////////////////////////////

export function SpaceVista(seed, width, height, renderPointStars, renderStars, renderNebulae, renderSun) {
    this.width = width;
    this.height = height;
    this.seed = seed;
    this.renderStars = renderStars;
    this.renderNebulae = renderNebulae;
    this.renderSun = renderSun;
    this.scale = Math.max(width, height);
    this.initializeSurfaces();
    Math.random = Alea(this.seed);
    if (renderPointStars) {
        this.renderField();
    }
    this.buildQueue();
}

SpaceVista.prototype.initializeSurfaces = function() {
    this.canvas = rgbaCanvas(this.width, this.height, 0, 0, 0, 1);
    this.ctx = this.canvas.getContext("2d");
}

SpaceVista.prototype.buildQueue = function() {
    this.queueIndex = 0;
    this.queue = [];
    this.op = undefined;
    Math.random = Alea(this.seed);
    if (this.renderStars) {
        this.queue.push("star");
        while (Math.random() < 0.95) {
            this.queue.push("star");
        }
    }
    Math.random = Alea(this.seed);
    if (this.renderNebulae) {
        this.queue.push("nebula");
        while (Math.random() < 0.5) {
            this.queue.push("nebula");
        }
    }
    Math.random = Alea(this.seed);
    if (this.renderSun) {
        this.queue.push("sun");
    }
}

SpaceVista.prototype.getOp = function(opCode) {
    if (opCode == "star") {
        return new StarRenderer(this.canvas, 1, 1, 1, Math.random() * this.width, Math.random() * this.height, Math.random() * 0.001 * this.scale);
    } else if (opCode == "nebula") {
        return new NebulaRenderer(this.canvas, Math.random(), Math.random(), Math.random(), this.scale / 4, Math.random() * 0.2 + 1, Math.random() * 3 + 3);
    } else if (opCode == "sun") {
        let r, g, b;
        if (Math.random() < 0.5) {
            r = 1;
            g = Math.random();
            b = Math.random() * 0.25;
        } else {
            r = Math.random() * 0.25;
            g = Math.random();
            b = 1;
        }
        return new SunRenderer(this.canvas, r, g, b, Math.random() * this.width, Math.random() * this.height, this.scale * (Math.random() * 0.1 + 0.01));
    }
}

SpaceVista.prototype.renderField = function() {
    for (let i = 0; i < this.width * this.height / 512; i++) {
        let x = Math.random() * this.width;
        let y = Math.random() * this.height;
        let c = Math.random();
        this.ctx.fillStyle = rgba(1, 1, 1, c * c * c);
        this.ctx.fillRect(x, y, 1, 1);
    }
}

SpaceVista.prototype.update = function() {
    if (this.op == undefined) {
        if (this.queueIndex == this.queue.length) {
            return {
                op: "done",
                done: 1
            }
        }
        this.op = this.getOp(this.queue[this.queueIndex]);
    }
    let t0 = Date.now()
    let done = 0;
    while (Date.now() - t0 < 20 && done < 1) {
        done = this.op.next();
    }
    if (done == 1) {
        this.op = undefined;
        this.queueIndex++;
        if (this.queue[this.queueIndex] != this.queue[this.queueIndex - 1]) {
            Math.random = Alea(this.seed);
        }
    }
    return {
        op: this.queue[this.queueIndex],
        done: done
    };
}


////////////////////////////////////////////////////////////////////
// Utility functions                                              //
////////////////////////////////////////////////////////////////////

function rgba(r, g, b, a) {
    r = Math.floor(r * 255);
    g = Math.floor(g * 255);
    b = Math.floor(b * 255);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function rgbaCanvas(width, height, r, g, b, a) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");
    context.fillStyle = rgba(r, g, b, a);
    context.fillRect(0, 0, width, height);
    return canvas;
}

function Perlin(seed) {
    var ClassicalNoise = function(r) {
        if (r == undefined) r = Math;
        this.grad3 = [
            [1, 1, 0],
            [-1, 1, 0],
            [1, -1, 0],
            [-1, -1, 0],
            [1, 0, 1],
            [-1, 0, 1],
            [1, 0, -1],
            [-1, 0, -1],
            [0, 1, 1],
            [0, -1, 1],
            [0, 1, -1],
            [0, -1, -1]
        ];
        this.p = [];
        for (var i = 0; i < 256; i++) {
            this.p[i] = Math.floor(r.random() * 256);
        }
        this.perm = [];
        for (var i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
        }
    };
    ClassicalNoise.prototype.dot = function(g, x, y, z) {
        return g[0] * x + g[1] * y + g[2] * z;
    };
    ClassicalNoise.prototype.mix = function(a, b, t) {
        return (1.0 - t) * a + t * b;
    };
    ClassicalNoise.prototype.fade = function(t) {
        return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
    };
    ClassicalNoise.prototype.noise = function(x, y, z) {
        var X = Math.floor(x);
        var Y = Math.floor(y);
        var Z = Math.floor(z);
        x = x - X;
        y = y - Y;
        z = z - Z;
        X = X & 255;
        Y = Y & 255;
        Z = Z & 255;
        var gi000 = this.perm[X + this.perm[Y + this.perm[Z]]] % 12;
        var gi001 = this.perm[X + this.perm[Y + this.perm[Z + 1]]] % 12;
        var gi010 = this.perm[X + this.perm[Y + 1 + this.perm[Z]]] % 12;
        var gi011 = this.perm[X + this.perm[Y + 1 + this.perm[Z + 1]]] % 12;
        var gi100 = this.perm[X + 1 + this.perm[Y + this.perm[Z]]] % 12;
        var gi101 = this.perm[X + 1 + this.perm[Y + this.perm[Z + 1]]] % 12;
        var gi110 = this.perm[X + 1 + this.perm[Y + 1 + this.perm[Z]]] % 12;
        var gi111 = this.perm[X + 1 + this.perm[Y + 1 + this.perm[Z + 1]]] % 12;
        var n000 = this.dot(this.grad3[gi000], x, y, z);
        var n100 = this.dot(this.grad3[gi100], x - 1, y, z);
        var n010 = this.dot(this.grad3[gi010], x, y - 1, z);
        var n110 = this.dot(this.grad3[gi110], x - 1, y - 1, z);
        var n001 = this.dot(this.grad3[gi001], x, y, z - 1);
        var n101 = this.dot(this.grad3[gi101], x - 1, y, z - 1);
        var n011 = this.dot(this.grad3[gi011], x, y - 1, z - 1);
        var n111 = this.dot(this.grad3[gi111], x - 1, y - 1, z - 1);
        var u = this.fade(x);
        var v = this.fade(y);
        var w = this.fade(z);
        var nx00 = this.mix(n000, n100, u);
        var nx01 = this.mix(n001, n101, u);
        var nx10 = this.mix(n010, n110, u);
        var nx11 = this.mix(n011, n111, u);
        var nxy0 = this.mix(nx00, nx10, v);
        var nxy1 = this.mix(nx01, nx11, v);
        var nxyz = this.mix(nxy0, nxy1, w);
        return nxyz;
    };
    var rand = {
        random: Alea(seed)
    };
    var noise = new ClassicalNoise(rand);
    this.noise = function(x, y, z) {
        return 0.5 * noise.noise(x, y, z) + 0.5;
    }
}

function Alea() {
    return (function(args) {
        var s0 = 0;
        var s1 = 0;
        var s2 = 0;
        var c = 1;
        if (args.length == 0) {
            args = [+new Date];
        }
        var mash = Mash();
        s0 = mash(' ');
        s1 = mash(' ');
        s2 = mash(' ');
        for (var i = 0; i < args.length; i++) {
            s0 -= mash(args[i]);
            if (s0 < 0) {
                s0 += 1;
            }
            s1 -= mash(args[i]);
            if (s1 < 0) {
                s1 += 1;
            }
            s2 -= mash(args[i]);
            if (s2 < 0) {
                s2 += 1;
            }
        }
        mash = null;
        var random = function() {
            var t = 2091639 * s0 + c * 2.3283064365386963e-10;
            s0 = s1;
            s1 = s2;
            return s2 = t - (c = t | 0);
        };
        random.uint32 = function() {
            return random() * 0x100000000;
        };
        random.fract53 = function() {
            return random() +
                (random() * 0x200000 | 0) * 1.1102230246251565e-16;
        };
        random.version = 'Alea 0.9';
        random.args = args;
        return random;

    }(Array.prototype.slice.call(arguments)));
};

function Mash() {
    var n = 0xefc8249d;

    var mash = function(data) {
        data = data.toString();
        for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 0x100000000;
        }
        return (n >>> 0) * 2.3283064365386963e-10;
    };

    mash.version = 'Mash 0.9';
    return mash;
}
