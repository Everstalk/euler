// Find the sum of all the multiples of 3 or 5 below 1000.
function multiples() {
    var sum = 0;

    for (var i = 0; i < 1000; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fib() {
    var a = 0;
    var b = 1;
    var sum = 0;

    while (a < 4000000) {
        var temp = b;
        b = a + b;
        a = temp;

        if (a % 2 === 0)
            sum += a;
    }

    return sum;
}

// What is the largest prime factor of the number 600851475143?
    function largest_prime(num) {
        var factors = [];
        var p = 2;

        while (num > 1) {
            while (num % p === 0) {
                factors.push(p);
                num /= p;
            }

            p += 1;
        }

        return Math.max(...factors);
    }
