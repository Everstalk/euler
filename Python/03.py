# What is the largest prime factor of the number 600851475143?
def prime_num(num):
    largest_factor = 1

    while num % 2 == 0:
        largest_factor = 2
        num /= 2

    while num != 1:
        p = 3
        while num % p == 0:
            largest_factor = p
            num /= p
        p += 2

    return largest_factor
