function interest(P,r,n){
    let simpleInterest=Math.round(P*r*n)
    let compoundInterest = Math.round(P*((1+r)**n))
    return [simpleInterest+P, compoundInterest]
}

// https://www.codewars.com/kata/59cd0535328801336e000649/solutions/javascript