let colors = ['black','blue','pink']; //array

console.log(colors);
console.log(colors[2]); //index

colors [0] = 'grey'; //update
console.log(colors);
console.log(colors.length); //length
console.log(colors.includes('grey')); //to check if it's in 

colors.unshift('green'); //add in the beging
console.log(colors);
colors.shift(); //delete the first 
console.log(colors);
colors.push('red'); // add in the end 
console.log(colors);
colors.pop(); //delete the last
console.log(colors);

let color = 'red'; 
console.log(Array.isArray(color)); //check if it's array
