<div align="center">
<h1>arraise.js</h1>
<h4>🚀 TypeScript and JavaScript library which extends default array's and object's methods</h4>

<p align="center">
<img src="https://app.travis-ci.com/sashafromlibertalia/arraise.js.svg?branch=main">
<img src="https://coveralls.io/repos/github/sashafromlibertalia/arraise.js/badge.svg">
<img src="https://img.shields.io/bundlephobia/min/arraise.js">
<img src="https://img.shields.io/github/license/sashafromlibertalia/arraise.js">
  
<a href="https://www.buymeacoffee.com/fromlibertalia"><img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"></a>
</p>
</div>


## Installation

```bash
npm i arraise.js
```

## Usage
```js
// ES6 / TypeScript
import Arraise from "arraise"
const arraise = new Arraise()
```

## API
Arraise is compatible with `arrays` and `objects`. Here is a list of available methods:

- Arrays
  - [areSame()](#aresame)
  - [findCommon()](#findcommon)
  - [findDifference()](#finddifference)
  - [makeUnique()](#makeunique)
  - [merge()](#merge)
  - [max()](#max)
  - [min()](#min)
  - [sortAscending()](#sortascending)
  - [sortDescending()](#sortdescending)
  - [swap()](#swap)
  - [toArrayList()](#toArrayList)
- Objects
  - [аreSame()](#aresameobj)

## Arrays

### areSame()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 
| `Array<T>`    | true | 

Compares two arrays and returns true if they are the same.
```js
const arr1 = [1, 5, 3]
const arr2 = [1, 5, 3]
arraise.areSame(arr1, arr2) // True
```

### findCommon()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Finds common elements in provided arrays and returns new array with these elements.
<br>
**Note**: You can pass *N* arrays at the same time ✨
```js
const arr1 = [1, 2, 3, 6]
const arr2 = [1, 2, 3, 4, 5, 6]
arraise.findCommon(arr1, arr2) // [1, 2, 3, 6]
```

### findDifference()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Finds different elements in provided arrays and returns new array with these elements.
<br>
**Note**: You can pass *N* arrays at the same time ✨
```js
const arr1 = [1, 2, 3, 6]
const arr2 = [1, 2, 3, 4, 5, 6]
arraise.findDifference(arr1, arr2) // [4, 5]
```

### makeUnique()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Returns array with unique elements
```js
const array = [1, 1, 2, 3]
arraise.makeUnique(array) // [1, 2, 3]
```

### merge()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `unique<Boolean>` | true
| `Array<T>`    | true | 

Merge provided arrays. Supports merging **without** duplicated elements.
```js
const arr1 = [1, 2, 3]
const arr2 = [1, 2]
arraise.merge(true, arr1, arr2) // [3]
arraise.merge(false, arr1, arr2) // [1, 2, 3, 1, 2]
```

### max()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Finds maximum value in given array
```js
const array = [1, 2, 3]
arraise.max(array) // 3
```

### min()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Finds minimum value in given array
```js
const array = [1, 2, 3]
arraise.min(array) // 1
```

### sortAscending()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Sorts array in ascending order:
```js
const array = [1, 5, 3]
arraise.sortAscending(array) // [5, 3, 1]
```

### sortDescending()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Sorts array in descending order:
```js
const array = [1, 5, 3]
arraise.sortDescending(array) // [1, 3, 5]
```

### swap()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 
| `first<number>`    | true | 
| `last<number>`    | true | 

Swaps elements in given array. Provide indexes to swap.
```js
const array = [1, 5, 3]
arraise.swap(array, 0, 1) // [5, 1, 3]
```

### toArrayList() <a name="toArrayList"></a>
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 
| `level<number>`    | true | 

Converts array to list of arrays.
```js
const array = [1, 2, 3, 4, 5]
arraise.toArrayList(array, 2) // [[1, 2], [3, 4], [5]]
```

## Objects

### areSame() <a name="aresameobj"></a>
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Object`    | true | 
| `Object`    | true | 

Compares two objects and returns true if they are the same. **Supports nesting**
```js
const obj1 = {
    KEY: "VALUE"
}
const obj2 = {
    KEY: "VALUE"
}
arraise.areSame(obj1, obj2) // True
```
