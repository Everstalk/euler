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
