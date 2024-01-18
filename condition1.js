// function addfive (score) {
//     let finalScore = 0
//     if (score >= 38 && score)
// }


//add 5 to score if student score 38,48,58,68
function method1(score){
    let scoreStr = String(score)
    let finalScore = 0
    if ((scoreStr[1]=='8' || scoreStr[1]=='9') && score < 70 && score >37)
    {
        finalScore = score + 5
    }
    else {
        finalScore = score
    }
    return finalScore
}


//write a function for English and Maths that gives pass if the person scores from 50 above otherwise return fail.

function aveg (english, maths){
    let average = (maths + english)/2
    let result

    if(average >= 50) {

        result = `you scored ${average.toFixed(1)} meaning you passed`  
    }
    else{
        result = `you failed`
    }
    
    return result
}


//Grade function
    function grade(score){
        let gradeVal = ''
if (score <= 100){
    if (score >= 70){
        gradeVal = 'A'
    }
    else if (score >= 60){
        gradeVal = 'B'
    }
    else if (score >= 50){
        gradeVal = 'C'
    }
    else if (score >= 40){
        gradeVal = 'P'
    }
    else if (score < 40){
        gradeVal = 'F'
    }
    
}

else{

    gradeVal = 'Invalide Input. Correct it.'
}
    return gradeVal
    
    
}
//console.log(return gradeVal)
