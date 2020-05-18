let dieRolls = []
let numroll = document.querySelector("#numrolls")
let rolls = document.querySelector("#roll")
let sumrolls = document.querySelector("#sumrolls")
rolls.addEventListener("click", function () {
    console.log(numroll.value)
    let sum = 0
  let count = 0
  while (count < numroll.value) {
  let roll = (Math.floor(Math.random() *6) +1)
  count += 1
  if (roll === 1) {
    dieRolls.push(1)
    sum += 1
  }
  if (roll === 2) {
    dieRolls.push(2)
    sum += 2
  }
  if (roll=== 3) {
    dieRolls.push(3)
    sum += 3
  }
  if (roll === 4) {
    dieRolls.push(4)
    sum += 4
  }
  if (roll === 5) {
    dieRolls.push(5)
    sum += 5
  }
  if (roll === 6) {
    dieRolls.push(6)
    sum += 6
  }          
    console.log(dieRolls)

  }

  sumrolls.innerHTML = "Total:" + sum
  

})

let orderrolls = document.querySelector ("#orderrolls")
let showallrolls = document.querySelector("#showallrolls")
showallrolls.addEventListener("click", function () {
 let singleroll = 0
 while (singleroll < dieRolls.length) {
   orderrolls.innerHTML += "<li>" +dieRolls[singleroll] + "</li>"
   singleroll += 1
 }

})
