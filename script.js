const submitBtn = document.querySelector('#sbt-btn');
let userName;
let balance;
let firstBal;
let predictedNum = -1;
submitBtn.addEventListener('click', function(e){
    if(document.querySelector('#name-in').value == ""){
        alert("Please enter your name")
    } else if(document.querySelector('#balance-in').value == "" || document.querySelector('#balance-in').value == 0 || document.querySelector('#balance-in').value < 10){
        alert("you must have to enter a valid amount");
    } else{
        userName = document.querySelector('#name-in').value;
        balance = document.querySelector('#balance-in').value;
        firstBal = balance;
        console.log(userName, " ", balance);
        e.preventDefault();
        document.querySelector('.initial-sc-section').style.display = "none";
        document.querySelector('.second-screen').style.display = "flex";
        document.querySelector('#welcome-user-name').innerText = "Welcome, " + userName;
        document.querySelector('#balance-label').innerText = "Balance: " + balance;
        predictedNum = Math.round(Math.random() * 100 + 1)
        console.log(predictedNum);
    }
    
}, false)

let predArray = [];
let isArrFull = false;
let isMatched = false;

const submitPredBtn = document.querySelector('#save-pred-btn');
submitPredBtn.addEventListener('click', function(e){
    if(isArrFull){
        e.preventDefault();
        for(let i = 0; i < predArray.length; i++){
            if(predictedNum == predArray[i]){
                isMatched = true;
            }
        }
        if(isMatched){
            document.querySelector('#result').innerHTML = "The Selected Number Was " + predictedNum + ", and your have predicted the number correctly, You Won! please collect your winning amount Rs." + (firstBal*2);
        } else{
            document.querySelector('#result').innerHTML = "You Loose! The predicted number was " + predictedNum;
        }
    } else{
        predArray.push(document.querySelector('#pred-num-in').value);
        document.querySelector('#pred-num-in').value = "";
        document.querySelector('#div-for-pred-array').innerText = predArray;
        e.preventDefault();
        balance -= 10;
        document.querySelector('#balance-label').innerText = "Balance: " + balance;
        if(balance < 10){
            submitPredBtn.value = "Submit Predictions";
            isArrFull = true;
        }
    }
    
}, false)