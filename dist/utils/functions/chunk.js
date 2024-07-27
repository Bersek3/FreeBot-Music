export function chunk(arr, len) {
    var res = [];
    for(var i = 0; i < arr.length; i += len){
        res.push(arr.slice(i, i + len));
    }
    return res;
}
