export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  const pivotIdx = partition(array, startIdx, endIdx, animations);
  quickSortHelper(array, startIdx, pivotIdx - 1, animations);
  quickSortHelper(array, pivotIdx + 1, endIdx, animations);
}

function partition(array, startIdx, endIdx, animations) {
  let pivotValue = array[endIdx];
  let pivotIdx = startIdx;
  for (let i = startIdx; i < endIdx; i++) {
    animations.push([i, endIdx]);
    animations.push([i, endIdx]);
    if (array[i] <= pivotValue) {
      animations.push([i, array[pivotIdx]]);
      animations.push([pivotIdx, array[i]]);
      [array[i], array[pivotIdx]] = [array[pivotIdx], array[i]];
      pivotIdx++;
    }
  }
  animations.push([pivotIdx, array[endIdx]]);
  animations.push([endIdx, array[pivotIdx]]);
  [array[pivotIdx], array[endIdx]] = [array[endIdx], array[pivotIdx]];
  return pivotIdx;
}

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      animations.push([j, minIdx]);
      animations.push([j, minIdx]);
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    animations.push([i, array[minIdx]]);
    animations.push([minIdx, array[i]]);
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return animations;
}

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      animations.push([j + 1, array[j]]);
      array[j + 1] = array[j];
      j--;
    }
    animations.push([j + 1, key]);
    array[j + 1] = key;
  }
  return animations;
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return animations;
}
