

"use strict"



// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

// for (let i=1; i <= 10; i++){
//   console.log(i)
// }

// userName = prompt("What is your name? ")
// nameConfirmation = confirm(`Your name is ${userName}`)

// if (nameConfirmation == true){
//   console.log(userName)
// } else {
//   console.log("Please try again")
// }

//Calculator

// let age = prompt("How old are you? ")
// let accessAllowed = (35 > age > 18) ? alert(true):
//   (age > 35) ? alert("Elligible"):
//   (age > 45) ? alert("Target Market"):
//   "You're still welcome!";


// ROCK PAPER SCISSORS
// function getComputerGuess(){
//   let randomIndex = Math.floor(Math.random() * 3) + 1;
//   let choices = ["rock", "paper", "scissors"];
//   console.log(choices[randomIndex])
//   return choices[randomIndex]
// }

// function getUserGuess(){
//   prompt("Rock, Paper, or Scissors?").toLowerCase();
// }
// function rockPaperScissors(){
//   let userGuess = getUserGuess()
//   let computerGuess = getComputerGuess()
//   if (userGuess === "rock" && computerGuess === "scissors"){
//     return console.log("Rock beats Scissors, You Win!")
//   } else if(userGuess === "paper" && computerGuess === "rock"){
//     console.log("Paper beats rock, You Win!")
//   } else if (userGuess === "scissors" && computerGuess === "paper"){
//     console.log("Scissors beats Paper, You Win!")
//   } else if (userGuess === computerGuess){
//     console.log("Draw!")
//   } else {
//     console.log("You Lose!")
//   }

// }

// rockPaperScissors();


// Cars Object
// const carInventory = {
//   Volkswagen: "GTI",
//   BMW: "M5 CS",
//   Nissan: "GT-R",
//   Toyota: "Supra"
// }

// console.log(Object.keys(carInventory))
// console.log(Object.values(carInventory))

// for (let car in carInventory){
//   console.log(`${car} ${carInventory[car]}`)
// }

// class Cars{
//   constructor(make, model, airflow){
//     this.make = make
//     this.model = model
//     this.airflow = airflow
//   };
//   getAirFlow(){
//     return this.airflow;
//   }

//   setAirFlow(airFlow){
//     this.airflow = carAirFlow;
//   }
//   carPark(){
//     console.log(
//       `Car in Parking is a ${this.airflow} ${this.model} ${this.make}`
//       );
//   };
// }


// class WeekendCar extends Cars{
//   constructor(make, model, airflow, weekendType){
//     super(make, model, airflow);
//     this.weekendType = weekendType;
//   }
//   getWeekendType(){
//     return this.weekendType;
//   }
// }
// const myCar = new Cars("V8", console.log(carInventory[0]));
// myCar.setAirFlow("TurboCharged")
// myCar.carPark();
// myWeekendCar = new WeekendCar("Nissan", "GT-R", "SuperCharged")
// console.log(myWeekendCar.getWeekendType());

// *JSON*
// const car = {
//   name: "Nissan",
//   airflow: "TurboCharged",
//   engine: "V6",
//   type: "GT-R"
// }

// console.log(car.name, car.type)

// sendJSON = JSON.stringify(car)
// let typeJSON = typeof sendJSON
// console.log(typeJSON)

// receiveJSON = JSON.parse(sendJSON)
// let typeofJSON = typeof receiveJSON
// console.log(typeofJSON)

// for (let i in Range(100)){
//   let num
//   i += num;
//   i++
// }


// *RANGE*
// const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => start + i);

// console.log(range(0, 10))



// let i = 0;
// let num = 0
// let newArray = [];
// while (i<15){
//   // console.log(i);
//   i++;
//   // console.log(i)
//   num += i;
//   newArray.push(i);
//   console.log("Beyond here");
  
// }

// console.log(newArray);
// // *FUNCTIONS*
// function myGreeting() {
//   alert("Konnichiwa")
// }

// myGreeting();