const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];


function customFromEntries(data) {
    const object = {};
    data.forEach(element => {
        object[element[0]] = element[1];
    });


    return object;
}


const mainObj = Object.fromEntries(fruits)


console.log(mainObj);

const myObj = customFromEntries(fruits);

