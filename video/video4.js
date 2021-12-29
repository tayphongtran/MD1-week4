console.log('hello word js');

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    { name: 'Anh Tay', age: 25 },
    { name: 'Dao Duc', age: 10 },
    { name: 'Ly Tri', age: 16 },
    { name: 'Tinh Cam', age: 19 },
    { name: 'Khiem Ton', age: 25 },
]

//filter, find

let filter = arr.find((item, index) => {
    return item && item.age === 25;
});

console.log(filter);