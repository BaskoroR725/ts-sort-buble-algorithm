"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const Sorter_1 = require("./Sorter");
const numbersCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0, 7]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
