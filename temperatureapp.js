function temperature(degree){
    if( degree >= 60 && degree <= 100){
        console.log("the weather is hot")
    }
    
    else if( degree >= 35 && degree <= 49){
        console.log("the weather is nice")
    }
    
    else if( degree >= 0 && degree <= 29){
        console.log("the weather is cold")
    
    }
}
    let weather = temperature(40);
    console.log(weather);