function customFreeze(obj) {
    return new Proxy(obj, {
        set(target, key, value) {
            console.warn(`Cannot set property ${key}, object is frozen.`);
            return true;
        },
        deleteProperty(target, key) {
            console.warn(`Cannot delete property ${key}, object is frozen.`);
            return true;
        }
    });
}


const obj = { name: "Alice", age: 25 };
const frozenObj = customFreeze(obj);

frozenObj.age = 30;
delete frozenObj.name;

console.log(frozenObj.age);
