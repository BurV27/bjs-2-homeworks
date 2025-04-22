function getArrayParams(...arr){
  let min;
  let max;
  let avg;
  let sum = 0;

  for (let i =0; i < arr.length; i++) {
    
    if (arr[i] > arr[i - 1]) {
      max = arr[i]
      sum += max
    } else if (arr[i] < arr[i - 1]) {
      min = arr[i]
      sum += min
    } else {
      min = arr[i];
      max = arr[i];
      sum = arr[i]
    }
  }
  avg = sum / arr.length

  return {max: max, min: min, avg: +avg.toFixed(2)}
  
}

function summElementsWorker(...args){
  if (args.length === 0) {
    return 0
  }
  let sum = 0;
  for (let i = 0; i <args.length; i++){
    sum += args[i]
  }
  return sum
}

function differenceMaxMinWorker(...args) {
  if (args.length === 0) {
    return 0
  }
  let min;
  let max;
  for (let i = 0; i < args.length; i++){
  if (args[i] > args[i - 1]) {
      max = args[i]
    } else if (args[i] < args[i - 1]) {
      min = args[i]
    } 
  }
    return max - min;
}

function differenceEvenOddWorker(...args) {
  if (args.length === 0) {
    return 0
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result;
  for (let i = 0; i < args.length; i++){
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i]
    } else if (args[i] % 2 === 1) {
      sumOddElement += args[i]
    }
  }

  return  sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...args) {
  if (args.length === 0) {
    return 0
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0){
      sumEvenElement += args[i]
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func){
  let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      let sort = arrOfArr[i]
      const resultFunc = func(...sort);
      if (resultFunc > maxWorkerResult) {
        maxWorkerResult = resultFunc;
      }
    }
    return maxWorkerResult
}