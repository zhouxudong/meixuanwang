
var arr = [];

var imgs = [];

for(var i = 0; i < arr.length; i++){
    var board = arr[i].board;
    var pins = board.pins;

    for(var j = 0;j < pins.length; j++){
        var key = pins[j].file.key;

        // console.log("http://img.hb.aicdn.com/" + key);
        imgs.push("http://img.hb.aicdn.com/" + key);
    }
}


var http = require("http");
var fs = require("fs");
console.log(imgs.length);
var urlIndex = 0;

function getImg(){
    console.log(urlIndex);
    var url = imgs[urlIndex++];
    console.log(url)
    if(!url) return;

    setTimeout(function () {

        http.get(url, function(res){
            var imgData = "";

            res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开


            res.on("data", function(chunk){
                imgData+=chunk;
            });

            res.on("end", function(){
                // console.log("img" + imgData);
                fs.writeFile("./day6/"+new Date().getTime()+".png", imgData, "binary", function(err){
                    if(err){
                        console.log("down fail");
                    }
                    console.log("down success");

                    getImg();
                });
            });
        });

    },100)

}

getImg();


















