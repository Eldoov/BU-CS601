let count = 0;
let loop = false;

function welcome(){
    alert("Hello there! This is CS601 WebApp Dev assignment 3!")
    let welcome;
    const name = prompt("What's your name?", "Harry Potter");

    // if click cancel
    if(name == null){
        welcome = "Welcome to JavaScript Calculator, Harry Potter!";
    }else {
        welcome = "Welcome to JavaScript Calculator, " + name + "!";
    }
    // print message
    alert(welcome);
}

function RecursionCal(){
    count ++; // count how many times calculator has been operated
    const value = prompt("Please enter two numbers (use comma to seperate numbers): ", "1,2");

    const a = value.split(",")[0];
    const b = value.split(",")[1];

    // check input
    if(checkNum(a) && checkNum(b)){
        // continue
    }else {
        count--;
        alert("Invalid input, please enter numbers only.");
        RecursionCal();
        return;
    }

    const num1 = parseInt(a); // convert string to integer
    const num2 = parseInt(b);
    const res = num1 + num2;

    if(res > 10){
        alert("The sum of your two numbers is: " + res + ". That is a big number.");
    }else {
        alert("The sum of your two numbers is: " + res + ". That is a small number.");
    }

    if(loop){
        RecursionCal();
    }else {
      const response = confirm("Do you wish to use the calculator again?");
      if(response){
          RecursionCal();
      }else {
          alert("The calculator has been operated " + count + " time(s). Thank you for using the JavaScript Calculator!");
          count = 0;
      }
    }
}


function WhileLoopCal(){
    loop = true;
    while(loop){
        count ++; // count how many times calculator has been operated
        const value = prompt("Please enter two numbers (use comma to seperate numbers): ", "1,2");

        const a = value.split(",")[0];
        const b = value.split(",")[1];

        // check input
        if(checkNum(a) && checkNum(b)){
            // continue
        }else {
            count--;
            alert("Invalid input, please enter numbers only.");
            WhileLoopCal();
            return;
        }

        const num1 = parseInt(a); // convert string to integer
        const num2 = parseInt(b);
        const res = num1 + num2;

        if(res > 10){
            alert("The sum of your two numbers is: " + res + ". That is a big number.");
        }else {
            alert("The sum of your two numbers is: " + res + ". That is a small number.");
        }

        const response = confirm("Do you wish to use the calculator again?");
        if(response){
            loop = true;
        }else {
            alert("The calculator has been operated " + count + " time(s). Thank you for using the JavaScript Calculator!");
            count = 0;
            loop = false;
        }
    }
}

function checkNum(value){
    const x = value.match(/^[0-9]*$/);
    if(x == null){
        return false;
    }else {
        return true;
    }
}
