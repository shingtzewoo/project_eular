// Problem 1
var multiples = function (number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (i%3 === 0 || i%5 === 0) {
            sum += i;
        };
};
document.getElementById("demo").innerHTML = alert("The answer is "+sum+"!");
}
multiples(1000);

// Problem 2
var fibonacci = function (number) {
var sum = 0;

var x = 1;
var y = 2;
while (x < number) {
    if (x%2 === 0) {
        sum +=x;
    }
    var z = x + y;
    x = y;
    y = z;
};
alert("The answer is "+sum+"!");
}
fibonacci(4000000);

console.log(sum);

// Problem 3

function largestPrimeFactor(n){
var i=2;
while (i<=n){                    // It will keep running until i = n
    if (n%i === 0){              // That is when the prime number is found
        n/=i;                    //
    }else{                       //
        i++;
    };
};
alert("The answer is "+i+"!");;
}
largestPrimeFactor(1000);