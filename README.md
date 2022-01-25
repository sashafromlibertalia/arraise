<div align="center">
<h1>arraise.js</h1>
<h4>🚀 TypeScript and JavaScript library which extends default array's and object's methods</h4>

<p align="center">
<img src="https://app.travis-ci.com/sashafromlibertalia/arraise.js.svg?branch=main">
<img src="https://coveralls.io/repos/github/sashafromlibertalia/arraise.js/badge.svg">
<img src="https://img.shields.io/bundlephobia/min/arraise.js">
<img src="https://img.shields.io/github/license/sashafromlibertalia/arraise.js">
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
  - [makeUnique()](#makeunique)
  - [sortAscending()](#sortascending)
  - [sortDescending()](#sortdescending)
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

### makeUnique()
| Arguments      | Required         |
| :-------------: |:-------------:| 
| `Array<T>`    | true | 

Returns array with unique elements:
```js
const array = [1, 1, 2, 3]
arraise.makeUnique(array) // [1, 2, 3]
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