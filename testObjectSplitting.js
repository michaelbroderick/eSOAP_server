const tN = require('./tableNames.js');

myObject = {
    key1: "val1",
    key2: "val2",
    key3: "val3"
}

console.log(myObject);

NewObject = myObject["key1", "key3"];

console.log(NewObject);


function omit(obj, props) {
    props = props instanceof Array ? props : [props]
    return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
}



// usage
const obj = { a: 1, b: 2, c: 3, d: 4 }

for (let o in obj) {
    if (obj[o] === 2) {
        delete obj[o];
    }
}

console.log(obj)

const clone = omit(obj, ['b', 'c'])
const clone1 = tN.filterObj(obj, ['a', 'b', 'c'])
console.log(clone1)



// for (let table of Object.keys(tN.tables)) {

//     console.log(table);
//     console.log(tables[table])

// }

// // console.log(Object.keys(tables))

// let x = [1, 2, 3, 4, 5];

