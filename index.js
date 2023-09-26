// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  return (fahren - 32) * (.56);
}

console.log(convertToCelsius(95));
/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
 function createMessage(fahren, celc) {
   let message = ""
    if(fahren < 32 && celc < 0) {
       message = `${fahren}, ${celc}, very cold`;
     }
       else if(fahren < 64 && celc < 18) {
         message = `${fahren}, ${celc}, cold`;
       }
         else if(fahren < 86 && cecl < 30) {
           message = `${fahren}, ${celc}, warm`;
         } else if(fahren <100 && celc < 37) {
          message = `${fahren}, ${celc}, hot`;
         }
         return message;
 }
 console.log(createMessage(95,35));

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * limit);
}
console.log(rand(10));
// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

// let fahren = prompt(
//   "enter a number, we will convert that number from fahrenheit to celcius"
// );
// let celc = convertToCelsius(fahren);
// let output = createMessage(fahren, celc);
// console.log(output);

// fahren = prompt(
//   "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
// );
// celc = convertToCelsius(fahren);
// output = createMessage(fahren, celc);
// console.log(output);

// fahren = rand(110);
// celc = convertToCelsius(fahren);
// output = createMessage(fahren, celc);
// console.log(output);

// fahren = rand(110);
// celc = convertToCelsius(fahren);
// output = createMessage(fahren, celc);
// console.log(output);
