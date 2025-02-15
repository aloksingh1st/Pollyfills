const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myMap = function (e) {

    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        let element = e(this[i], i);
        newArray.push(element);
    }

    return newArray;
}


const newarr = arr.myMap((e) => e + 2);



