# http://www.codewars.com/kata/simple-division/train/python

# In this Kata, you will be given two numbers, a and b.
# Your task is to determine if the first number a is divisible by
# all the prime factors of the second number b.
# For example: solve(15,12) = False because 15 is not divisible by
# all the prime factors of 12 (which include2).

def is_divisible_by_all_prime_factors(a, b):
    return True





if __name__ == '__main__':
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
