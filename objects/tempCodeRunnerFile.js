Object.prototype.myAssign = function(target, ...sources){
    if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }

    sources.forEach(source => {
        if (source != null) {
            Object.entries(source).forEach(([key, value]) => {
                target[key] = value;
            });
        }
    });

    return target;


}


const car1 = {
    brand : "Benz",
    color : 'purple',
    speed : 60,
    model : "top"
}


const car2 = {
    brand : 'Porches',
    color : 'parrot green'
}


Object.myAssign(car1, car2);


console.log(car1);
// console.log(car2);