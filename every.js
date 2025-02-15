const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

Array.prototype.myEvery = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        if (!callback.call(thisArg, this[i], i, this)) {
            return false; // Stop immediately when an element fails
        }
    }

    return true; // If all elements pass, return true
};


console.log(arr.myEvery((element)=> element > 1));