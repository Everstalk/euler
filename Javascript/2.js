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
