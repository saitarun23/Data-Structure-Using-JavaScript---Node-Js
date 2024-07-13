let unsortedData = [4,1,7,2,5,9,8,3];
console.log("unsorted data "+unsortedData);
let sortedData = bubbleSort(unsortedData);
console.log("sorted data "+sortedData);
function bubbleSort(arr){
    let len = arr.length;
    let swapped;

    do {
        swapped=false;
        for(let i=0;i<len;i++){
            //if(arr[i] < arr[i+1]){      // Desc order
            if(arr[i] > arr[i+1]){      // Asc order     
                //swap logic 
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }while(swapped);
    return arr;
}