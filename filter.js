const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


Array.prototype.myFilter = function(callback){
    const newArray = [];


    for(let i=0; i<this.length; i++){
        if(callback(this[i])){

            newArray.push(this[i]);
        }
    }


    return newArray;
}


const newarray = arr.myFilter((element) => element > 5);


console.log(newarray);