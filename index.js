function deepFreeze(obj = {}) {
  let keyNamesArr = Object.getOwnPropertyNames(obj);

  keyNamesArr.forEach(value => {
    if (typeof obj[value] === 'object' && obj[value] !== null) {
      deepFreeze(obj[value]);
    }
  })

  return Object.freeze(obj);
}


function deepLoop(obj = {}) {
  // can not get Symbol key
  // let propNames = Object.getOwnPropertyNames(obj);

  let propNames = Reflect.ownKeys(obj);

  for (let name of propNames) {
    console.log(name)
    if (typeof obj[name] === 'object' && obj[name] !== null) {
      deepLoop(obj[name]);
    }
  }
  return 'done';
}


// binary search
function binarySearch(arr = [], target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

// linked list

class LinkedList {
  constructor() {
    this.list = {};

  }

  find(target) {}

  delete(target) {}

  insert(pos, target) {
    this.list
  }
}


// 选择排序
function findSmallestEle(arr = []) {
  return Math.min(...arr.map(value => value));
}

function findSmallestEle(arr = []) {
  let index = 0;
  let temp = arr[index];

  for (let i = 1; i < arr.length; i++) {
    if (temp > arr[i]) {
      temp = arr[i];
      index = i;
    }
  }
  return index;
}

function selectionSort(arr = []) {
  let newArr = [];

  while(arr.length > 0) {
    newArr.push(arr[findSmallestEle(arr)]);
    arr.splice(findSmallestEle(arr), 1);
  }

  return newArr;
}


// 欧几里得算法 最大公约数
function maxCommonDivisor(big, small) {
 if (small === 0) {
   return big;
 } else {
   return maxCommonDivisor(small, big % small);
 }
}

// 快速排序
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = Math.floor(Math.random() * arr.length);
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[pivot]) {
      greater.push(arr[i]);
    }

    if (arr[i] < arr[pivot]) {
      less.push(arr[i]);
    }
  }

  return [...quickSort(less), arr[pivot], ...quickSort(greater)];
}


// 归并排序
function mergeSort(arr) {}