def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
    return True

def get_nth_prime(n):
    count = 0
    num = 2
    while True:
        if is_prime(num):
            count += 1
            if count == n:
                return num
        num += 1

def digit_root(num):
    while num >= 10:
        num = sum(int(d) for d in str(num))
    return num

def solve_q1(m, n):
    prime = get_nth_prime(m)
    single_digit = digit_root(prime)
    return prime * single_digit

# Examples:
print(solve_q1(6, 8))   # Output: 52
print(solve_q1(10, 50)) # Output: 58
