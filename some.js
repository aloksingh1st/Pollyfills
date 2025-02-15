const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];


Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }

    return false;
}


console.log(arr.some((element)=> element > 11));