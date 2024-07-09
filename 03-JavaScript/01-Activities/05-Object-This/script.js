// TODO: What is `this` referring to here?
console.log(this);
// `this` is referred to window object.

// TODO: What is `this` referring to here?
function helloThis() {
  console.log("Inside this function, this is " + this);
  // This 'this' is referred to the global object => window.
}

// TODO: What is `this` referring to here? What will be logged in the console?
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
    // This 'this' is referred to the variable child object.
  },
};

// TODO: What is `this` referring to here? What will be logged in the console?
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
      // This 'this' is referred the investment.
    },
  },
};

// TODO: Call the `helloThis` function and the object methods to check results in the console
helloThis();