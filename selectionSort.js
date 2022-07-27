function findSmallestIndex(array){
    let smallestElement = array[0], smallestIndex = 0;
    
    for(let i = 1; i < array.length; i++){
      if(smallestElement > array[i]){
        smallestElement = array[i];
        smallestIndex = i;
      };
    };
    
    return smallestIndex;
  };
  
  function selectionSort(array){
    let ordenedArray = [];
    let arrayLength = array.length;
    
    for(let i = 0; i < arrayLength; i++){
      let smallestIndex = findSmallestIndex(array);
      ordenedArray.push(array.splice(smallestIndex, 1)[0]);
    };
    
    return(ordenedArray);
  };
  
  console.log(selectionSort([5, 3, 6, 2, 10, 1]));