function studentScore(grade){
if( grade >= 90 && grade <= 100){
    console.log("execellent you did a very good job")
}

else if( grade >= 80 && grade <= 89){
    console.log(" what an encouraging performance")
}

else if( grade >= 70 && grade <= 79){
    console.log(" nice you did well")
}

else if( grade >= 60 && grade <= 69){
    console.log(" with more dedication you can do better ")
}

else if( grade >= 50 && grade <= 59){
    console.log("put more effort you can do better ")
}

else if( grade >= 0 && grade <= 49){
    console.log("you failed, try again next year")
}
}

let value = studentScore(35);
console.log(value)