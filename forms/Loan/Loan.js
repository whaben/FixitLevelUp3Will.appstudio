let prin = ""
let rate = ""
let nmonth = "
let nyear = ""

function Car(p, r, n){
   return z = p*(r*((1+r)**n))/(((1+r)**n)-1)
}

function Home(p, r, n){
   return z= p*(r*((1+r)**n))/(((1+r)**n)-1)
}

btnCar.onclick=function(){
  prin = inptPrin.value
  rate = inptRate.value
  nmonth = inptMon.value
  parPrin = parseInt(prin,10)
  parRate = parseInt(rate,10)
  parMon = parseInt(nmonth,10)
  lblResult.value = `A car loan for $ ${prin} over ${nmonth} months at ${rate}% interest would have a monthly payment of ${Car(prin, rate, nmonth)}`
  lblResult.backgroundColor = "#ADD8E6"
}

btnHome.onclick=function(){
  prin = inptPrin.value
  rate = inptRate.value
  nmonth = inptMon.value
  parPrin = parseInt(prin,10)
  parRate = parseInt(rate,10)
  parMon = parseInt(nmonth,10)
  if(parMon == 180){
     nyear = 15
  } else {
       nyear = 30
    }
  lblResult.value = `A home loan for $ ${prin} over ${nyear} years at ${rate}% interest would have a monthly payment of ${Car(prin, rate, nmonth)}`
  lblResult.backgroundColor = "#ADD8E6"
}

btnQuit.onclick=function(){
  loan.close
}