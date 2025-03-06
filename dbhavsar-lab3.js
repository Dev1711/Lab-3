// Dev Gautam Bhavsar
// ITMD 541-01

// Exercise #1
function minMaxAverage(n) {
    // tot = total length, min = minimum, max = maximum, sum is alculated in order to get average(mean).
    let tot = n.length; 
    let min = Math.min(...n);
    let max = Math.max(...n);
    let sum = n.reduce((s, num) => s + num, 0);
    let avg = sum/tot;

    console.log(`Total Numbers: ${tot}, Min Value: ${min}, Max Value: ${max}, Average: ${avg}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([7, 13, 80, 9, 100, 7, 33, 2]);
minMaxAverage([55, 6, 89, 9, 3, 11, 21, 33]);

// Exercise 2
function countVowels(str) {
    let v = "aeiouAEIOU";
    let c = 0;

    for(let char of str){
        if(v.includes(char)){
            c++;
        }
    }
    console.log(`${str}: ${c} vowels`);

    
}

countVowels("Winter");
countVowels("Foundation");
countVowels("Australia");


//Exercise 3
function sortNumbers(a){
    // creating kind of a copy of array and sorting it further in ascending order.
    let sort = [...a].sort((a,b) => a-b);
    console.log(`Original Array: [${a}] output Sorted Array: [${sort}]`);

}

sortNumbers([9, 4, 6, 2])
sortNumbers([12, 88, 34, 2])
sortNumbers([11, 8, 2, 99])

//Exercise 4
function celsiusToFahrenheit(x){
    let nx = Number(x); // This is done to change the character to a number.
    let fah = (nx * 9/5) + 32;
    console.log(`${nx.toFixed(1)} Celsius = ${fah.toFixed(1)} Fahrenheit`);
}

celsiusToFahrenheit(30);
celsiusToFahrenheit(45);
celsiusToFahrenheit(2);
celsiusToFahrenheit("-20")
celsiusToFahrenheit("34")

//Exercise 5
function sorting(p){
    p.sort((a, b) => a.age - b.age);
    return p.map(p => `${p.name} is ${p.age} and from ${p.city}`);


}

const p1 = [
    {name: 'Dev', age: 22, city: 'Chicago'},
    {name: 'Soni', age: 23, city: 'Raleigh'},
    {name: 'Smit', age: 21, city: 'Manitoba'},
    {name: 'Nirmit', age: 30, city: 'Texas'},
    {name: 'Pranay', age: 31, city: 'New York'}
];

const p2 = [
    {name: 'Rishi', age: 25, city: 'Adelaide'},
    {name: 'Yash', age: 20, city: 'Banglore'},
    {name: 'Sneh', age: 40, city: 'Mumbai'},
    {name: 'Jenil', age: 22, city: 'Arizona'},
    {name: 'James', age: 33, city: 'London'}
];

console.log(sorting(p1));
console.log(sorting(p2));