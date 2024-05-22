/* // //Variable and Data types

// var x = 25; // This is not widely used but due hoisting property of the var.

// let y = 20;

// z = "Samridhha";

// const name = "Aayusha";

// const add = () => {
//   let first = document.getElementById("first");
//   let last = document.getElementById("last");
//   let result = document.getElementById("result");
//   console.log("This is working.");
//   let val = parseInt(first.value) + parseInt(last.value);

//   result.innerText = val;
// };

// const colorId = document.getElementById("colorId");

// function changeColor() {
//   const color = colorId.value;
//   console.log(color);
//   document.body.style.backgroundColor = color;
// }

// const newDiv = document.createElement("div");

// newDiv.innerHTML = "<p>This is a new paragraph </p>";

$(document).ready(() => {
  $("#button").click(function () {
    let input = document.getElementById("input");
    let inputValue = parseInt(input.value);
    const fact = (n) => {
      if (n === 0) {
        return 1;
      } else {
        return n * fact(n - 1);
      }
    };
    let val = fact(inputValue);
    $("#result").text(val);
  });
});

$(document).ready(() => {
  $("#generate").click(() => {
    let val = document.getElementById("fibo").value;
    console.log(val);
    const fibo = (n) => {
      if (n <= 1) {
        return n;
      } else {
        return fibo(n - 1) + fibo(n - 2);
      }
    };
    let result = `<h2>Fibonacci series upto ${val}</h2>`;
    let arr = [];
    for (let i = 0; i < parseInt(val); i++) {
      arr[i] = fibo(i);
    }
    console.log(arr);
    arr.map((val, idx) => {
      result += `<span>${val}     </span>`;
    });
    console.log(result);

    $("#fibonacci").html(result);
  });
});

//Fuction to find the time difference of America and Nepal

const totalSeconds = ({ hour, minute, second }) => {
  total = hour * 3600 + minute * 60 + second;
  return total;
};

const toDate = (total) => {
  //Convert the date in second into hours, minutes and second.
  let hours = Math.floor(total / 3600);
  let minutes = Math.floor((total - hours * 3600) / 60);
  let second = total - hours * 3600 - minutes * 60;

  return { hours, minutes, second };
};

const value = (tt) => {
  return document.getElementById(tt).value;
};
$(document).ready(() => {
  $("#difference").click(() => {
    // console.log(nepalTime);
    function timeDiff() {
      // let america = new Date().toLocaleTimeString("en-US", {
      //   timeZone: "NewYork/America",
      // });
      let nepal = {
        hour: value("hourNP"),
        minute: value("minuteNP"),
        second: value("secondNP"),
      };
      let america = {
        hour: value("hourUS"),
        minute: value("minuteUS"),
        second: value("secondUS"),
      };

      console.log(nepal);
      console.log(america);
      let difference = totalSeconds(nepal) - totalSeconds(america);

      let date = toDate(difference);

      let differenceDate = `${date.hours}:${date.minutes}:${date.second}`;
      $("#date").html(
        `The difference between the time of america and nepal is: ${differenceDate}`
      );
    }
    timeDiff();
  });
});
 */
/* 
let num = prompt("Enter a number to find the factorial of:");

// Convert the input to a number
num = Number(num);

if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
  alert("Please enter a valid non-negative integer.");
} else {
  alert("The entered number is " + num);

  let fact = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  };

  // Rename the variable to avoid shadowing the built-in confirm function
  let userConfirmed = confirm("Are you sure?");

  if (userConfirmed) {
    alert(`The factorial of ${num} is ${fact(num)}`);
  } else {
    alert("Not confirmed");
  }
}
 */
class college {
  constructor(name, location, phone) {
    this.name = name;
    this.location = location;
    this.phone = phone;
  }

  display() {
    console.log(this.name);
    console.log(this.location);
    console.log(this.phone);
  }
  //Getter
  getName() {
    return this.name;
  }
  getLocation() {
    return this.location;
  }

  getPhone() {
    return this.phone;
  }

  //Setter
  setName(name) {
    this.name = name;
  }
  setLocation(location) {
    this.location = location;
  }

  setPhone(phone) {
    this.phone = phone;
  }
}

var obj = new college("CIT", "Chennai", "1234567890");

let obj1 = new college();
obj1.name = "Vedas";
obj1.location = "Jwalakhel";
// obj1.phone = "9823123123";

obj.display();
console.log("\n");
obj1.display();
