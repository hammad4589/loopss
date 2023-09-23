// for loops
for (let i =0; i < 20; i++){
console.log("hello hammad hassan")
}

for (let h = 0 ; h<60; h = h+4){
    console.log(h)
}

// while loop
 let p = 0;
while( p<23){
    console.log("hi while loop")
    p++

}
// do while 

let y = 3;
do{
    console.log("hi do while")
    y++

}
while(y<17)

// foe in loops 

let hammad = {
    education : "graduaion ",
    age : 23 ,
    height : 5.10 

}

for (let key in hammad) {
    console.log(hammad, key[hammad])

}
// or dot notation
for (let key in hammad) {
    console.log(hammad.age)
}

// for of and for in   in arrays 

let family = ["tayyab","ahmed ", "hammad"];

for (let index in family){
    console.log(index,family[index])
}

// for of

for (let name of family){
    console.log(name)
}
