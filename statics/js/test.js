var Ball = function (radius, color) {
    this.radius = radius || 30;
    this.color = color || "#ff0000";
    this.x = 0;
    this.y = 0;

}

Ball.prototype.draw = function (cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.arc(0,0, this.radius, 0, Math.PI*2);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
}


var arr = [5,4,3,2,1];

for(var i = 1; i < arr.length; i++){

    var get = arr[i];

    for(var j = (i - 1); j>=0 && arr[j] > get; j--){
        arr[j+1] = arr[j]
        console.log(j);
    }


    console.log(j);
    arr[j+1] = get;
    console.log(arr);
}

console.log(arr);

var shellShort = function (arr, n) {
    var h = 0;

    while (h <=n){
        h = 3*h + 1;
        console.log(h);
    }

    console.log(h);
}

shellShort(arr, arr.length);