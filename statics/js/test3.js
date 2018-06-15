var a = 12;

var colthis = function () {
    console.log(this.a)
}

function Obj() {
    this.a = 10;

    console.log(this.a);

}

Obj.prototype.sys = colthis;


var o = new Obj();
o.sys();

Obj.prototype = {};

var o2 = new Obj();

o.sys();




