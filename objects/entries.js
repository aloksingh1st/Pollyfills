Object.myEntries = function (obj) {
    if (obj == null || typeof obj !== "object") {
        throw new TypeError("Object.entries called on non-object");
    }

    let result = [];
    for (let key in obj) {
        // console.log(key);
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result.push([key, obj[key]]); d
        }
    }
    return result;
};


const car1 = {
    brand: "Benz",
    color: 'purple',
    speed: 60,
    model: "top"
}


console.log(Object.myEntries(car1));