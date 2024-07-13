let unsortedData = [4,1,7,2];
console.log("unsorted data "+unsortedData);
    let sortedData = quickSort(unsortedData,0,unsortedData.length-1);
console.log("sorted data "+sortedData);



function quickSort(arr, low,high){
        if(low<high){
        console.log("array "+arr+"low "+low+"high "+high)
        let pivotIndex = partition(arr,low,high);
        console.log("pivot index "+pivotIndex);
        quickSort(arr,low,pivotIndex-1);
        quickSort(arr,pivotIndex+1,high);
        }
        return arr;
}


function partition(arr,low,high){
    let pivot = arr[high];          // pivot element is last element from array ie 2
    console.log("pivot element"+pivot)
        let i = low-1;      // index of smaller elements 
    console.log("i value out side loop "+i)
    for(let j=low;j<=high-1;j++){
        if(arr[j]> pivot){
            i++;            // increment the index of smallest element or number 
            // then we can write the logic to swap the element 
            console.log("before swap inside loop")
            console.log(`arr[${i}]`+arr[i]);
            console.log(`arr[${j}]`+arr[j]);
        [arr[i],arr[j]]=[arr[j],arr[i]];
            console.log("after swap inside loop")
            console.log(`arr[${i}]`+arr[i]);
            console.log(`arr[${j}]`+arr[j]);
        }
    }
    // swap arr[i+1] and arr[high] to pivot 
    console.log("before swap outside loop")
    console.log(`arr[${i}]`+arr[i]);
    console.log(`arr[${high}]`+high);
    
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    
    console.log("after swap outside loop")
    console.log(`arr[${i}]`+arr[i]);
    console.log(`arr[${high}]`+high);
    return i+1;
}