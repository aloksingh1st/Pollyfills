const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

Array.prototype.myIncludes = function (searchElement, thisArg) {


    for (let i = 0; i < this.length; i++) {
        if (this[i] == searchElement) {
            return true;
        }
    }

    return false;
};


console.log(arr.myIncludes(54));