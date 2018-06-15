var arr = [10,9,8,7,6,5,4,3,2,1];

function merge(arr, left, mid, right) {

    var len = right - left + 1;
    var i = left;
    var j = mid + 1;
    var index = 0;
    var tempArr = [];


    while (i <= mid && j<=right){
        tempArr[index++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
    }

    while (i <= mid){

        tempArr[index++] = arr[i++];
    }

    while (j <= right ){

        tempArr[index++] = arr[j++];
    }


    for(var k = 0; k < len; k++){
        arr[left++] = tempArr[k];
    }

}


function recursion(arr, left, right) {

    if(left == right){
        return;
    }

    var mid = Math.floor((left + right) / 2);

    recursion(arr,left, mid);
    recursion(arr, mid + 1, right);

    merge(arr, left, mid, right);

    console.log("result");
    console.log(arr);
}

recursion(arr, 0, arr.length - 1);

console.log("end");
console.log(arr);