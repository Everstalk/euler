# Find the sum of all the multiples of 3 or 5 below 1000.
def multiples_sum(limit):
    total = 0
    for num in range(limit):
        if num % 3 == 0 or num % 5 == 0:
            total += num
    return total
