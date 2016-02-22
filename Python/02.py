# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
def even_fib(limit):
    total = 0
    x, y = 0, 1
    while x < limit:
        if x % 2 == 0:
            total += x
        x, y = y, y + x
    return total
