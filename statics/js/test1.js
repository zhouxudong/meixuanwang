var arr = [5,9,7,3,5,34,76,34,234,65,76,345,65,76,8,456,5,4,345,234,234,534,654,654,457];
function swap(arr, i, j) {
    var temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;

}
function heapify(arr, i) {

    console.log("fn begin: " + i);
    var left_child = 2 * i + 1;
    var right_child = 2 * i + 2;
    var max = i;
    var size = arr.length;
    if(left_child < size && arr[left_child] > arr[max]){
        max = left_child;
    }

    if(right_child < size && arr[right_child] > arr[max]){
        max = right_child;
    }
    console.log("1 left:" + left_child + "\t" + "1 right: " + right_child);
    console.log(left_child, right_child);
    console.log(i, max);
    if(max != i){
        swap(arr, i, max);
        heapify(arr, max);

    }

    // console.log("2 left:" + left_child + "\t" + "2 right:" + right_child)
    // console.log(arr[left_child], arr[right_child], arr[max]);
}

function buildHeap(arr) {
    var heap_size = arr.length;



    for(var i = Math.floor(heap_size/2-1); i>=0;i--){
        console.log("--------------" + i);

        heapify(arr, i);
    }
    
}

function heapSort(arr) {
    var heap_size = arr.length;
    buildHeap(arr);
    while (heap_size > 1){
        swap(arr, 0, --heap_size);
        heapify(arr, 0, heap_size);
    }
}


heapSort(arr);

console.log(arr);