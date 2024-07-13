let arr  = [4,2,7,8,5,3,6];
let target = 6;
let found = linearSearch(arr,target)
if(found){
    console.log(`element ${target} present in array`)
}else {
    console.log(`element ${target} not present in array`)
}
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true;
        }
    }
    return false;
}