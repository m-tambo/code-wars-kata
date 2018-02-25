# http://www.codewars.com/kata/simple-division/train/python

# In this Kata, you will be given two numbers, a and b.
# Your task is to determine if the first number a is divisible by
# all the prime factors of the second number b.
# For example: solve(15,12) = False because 15 is not divisible by
# all the prime factors of 12 (which include2).


def is_prime(num):
    return False if [x for x in range(2, int(num**0.5) + 1) if num % x == 0] else True

def all_prime_factors(num, upper):
    return [x for x in range(2, upper) if is_prime(x) and num % x == 0]

def is_divisible_by_all_prime_factors(a, b):
    if all_prime_factors(b, a + 1) == []:
        return False
    for factor in all_prime_factors(b, a + 1):
        if a % factor != 0:
            return False
    return True


if __name__ == '__main__':
    """Run tests"""
    # print(is_prime(61), "should be True")
    # print(is_prime(60), "should be False")
    # print(is_prime(29), "should be True")
    # print(is_prime(30), "should be False")
    # print(is_prime(101), "should be True")
    # print(is_prime(102), "should be False")
    # print(is_prime(199), "should be True")
    # print(is_prime(205), "should be False")

    # print(all_prime_factors(42, 42), "should be [2, 3, 7]")
    # print(all_prime_factors(78, 78), "should be [2, 3, 13]")
    # print(all_prime_factors(2, 2), "should be []")

    print(is_divisible_by_all_prime_factors(2,256), "should be True")
    print(is_divisible_by_all_prime_factors(2,253), "should be False")
    print(is_divisible_by_all_prime_factors(9,243), "should be True")
    print(is_divisible_by_all_prime_factors(15,12), "should be False")
    print(is_divisible_by_all_prime_factors(21,2893401), "should be True")
    print(is_divisible_by_all_prime_factors(21,2893406), "should be False")
    print(is_divisible_by_all_prime_factors(54,2834352), "should be True")
    print(is_divisible_by_all_prime_factors(54,2834359), "should be False")
    print(is_divisible_by_all_prime_factors(1000013,7187761), "should be True")
    print(is_divisible_by_all_prime_factors(1000013,7187762), "should be False")
