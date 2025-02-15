const arr = [1, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10];


Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }

    return undefined;
}

const val = arr.myFind((element) => element > 2);

console.log(val);