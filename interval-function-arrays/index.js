// Question 1 
//Write a function that will take a array from an user and check if everything is a number.

// If yes update the array by multiplying it’s value by twice every 5 seconds.

// And clear the interval after 20 seconds.

// If not, tell the user how many incorrect inputs were there.

function processArray(array) {
  let incorrectInputs = 0;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      incorrectInputs++;
    }
  }

  if (incorrectInputs > 0) {
    console.log(`Number of incorrect inputs: ${incorrectInputs}`);
  } else {
    const intervalId = setInterval(() => {
      for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
      }
      console.log('Updated array:', array);
    }, 5000);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log('Interval cleared after 20 seconds');
    }, 20000);
  }
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
processArray(inputArray);



// Question 2 

// Write a function to take a name from user (fname, sname,age, …) and pass all this info to a function with a function to convert the info to an object and log the object.

function convertToObj(fname, sname, age) {
  const infoObj = {
    fname,
    sname,
    age
    // Add more properties as needed
  };

  console.log('Info Object:', infoObj);
}

function getInfoFromUser(callback) {
  const fname = prompt('Enter your first name:');
  const sname = prompt('Enter your last name:');
  const age = prompt('Enter your age:');

  callback(fname, sname, age);
}

// Example usage:
getInfoFromUser(convertToObj);
