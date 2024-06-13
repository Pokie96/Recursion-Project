

function fibs(n)
{
    let arr = [0, 1];

    for(let i = 2; i < n; i++){
        let newValue = arr[i - 1] + arr[i - 2];
        arr.push(newValue);
    }

    return arr;
}

//console.log(fibs(5));

function fibsRec(n)
{
    if(n == 2){
        return [0 , 1];
    }
    
    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

//console.log(fibsRec(5))

const myArray = [3, 2, 1, 13, 8, 5, 0, 1];

function merge(leftArr, rightArr){
    let temp = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            temp.push(leftArr[leftIndex]);
            leftIndex++
        } else{
            temp.push(rightArr[rightIndex]);
            rightIndex++
        }
    }
    return [...temp, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr; //Sorted arr
    }
    let firstHalf = arr.slice(0, arr.length / 2)
    let secondHalf = arr.slice(arr.length / 2);
    

    return merge(
        mergeSort(firstHalf),
        mergeSort(secondHalf)
    )

}
console.log(mergeSort(myArray));