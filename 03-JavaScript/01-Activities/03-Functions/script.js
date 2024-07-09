

function checkEquality(value1, value2) {
    if (value1 === value2) {
      
      console.log("They are equal in type and value");
    } else if (value1 == value2) {
      
      console.log("They are equal in value");
    } else {
      
      console.log("The values are not equal");
    }
  }
  
  checkEquality(100, "100"); 
  // number = 100 , = "100"