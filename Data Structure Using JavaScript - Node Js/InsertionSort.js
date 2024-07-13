let unsortedData = [4,1,7,2,5,9,8,3];
console.log("unsorted data "+unsortedData);
let sortedData = insertionSort(unsortedData);
console.log("sorted data "+sortedData);

function insertionSort(arr){
    let len = arr.length;

    for(let i=1;i<len;i++){
        let current= arr[i];        // current 1st position elements. 
        console.log(i+" outer loop iteration")
        let j = i-1;
        //console.log((i+" i value "+i)
        console.log(`value of i${i} and value of j ${j}`);
        // move elements of array[0,1,2.....i-1]    
        while(j>=0 && arr[j] < current){
            arr[j+1]=arr[j];
            j--;
            console.log(i+"inner while loop iteration")
        }
        arr[j+1]=current;
    }
    
    return arr;
}