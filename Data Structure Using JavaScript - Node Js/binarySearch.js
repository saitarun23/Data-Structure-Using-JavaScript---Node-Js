let arr = [3,2,6,1,8,9,5,7,4];
console.log(arr)
//arr.sort();

arr.sort((a,b)=>a-b)            // asc 
console.log(arr)
arr.sort((a,b)=>b-a)            // desc 
console.log(arr)
let target = 10;
let index = binarySearch(arr,target);
console.log(index);
if(index!=-1){
console.log(`Element ${target} present in position as ${index}`)
}else {
    console.log(`Element ${target} not present `)
}

function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);

        console.log("mid value "+mid)

        if(arr[mid]===target){
            return mid;
        }
                // if target is greater than ,  ignore the left half 
        console.log(`array mid arr[${mid}] and target value ${target}] array mid value `+arr[mid])
        if(arr[mid] > target){  // > data in desc  < data in asc 
            console.log("true part")
            left=mid+1;
        }else {     // it target is less than , ignore the right half
            console.log("false") 
            right=mid-1;
        }
    }
    return -1;
}