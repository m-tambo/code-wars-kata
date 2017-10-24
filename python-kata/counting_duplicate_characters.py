# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

# Write a function that will return the count of distinct
# case-insensitive alphabetic characters and numeric digits
# that occur more than once in the input string.
# The input string can be assumed to contain only
# alphabets (both uppercase and lowercase) and numeric digits.


def duplicate_count(text):
    characters = list(text.upper())
    char_set = set()
    duplicate_set = set()
    count = 0
    for char in characters:
        x = char.upper()
        if not x in char_set:
            char_set.add(x)
        elif not x in duplicate_set:
            count += 1
            duplicate_set.add(x)
    return count


if __name__ == '__main__':
    print(str(duplicate_count("abcde")) + " should equal 0")
    print(str(duplicate_count("abcdea")) + " should equal 1")
    print(str(duplicate_count("indivisibility")) + " should equal 1")
    print(str(duplicate_count("Indivisibilities")) + " should equal 2")
    print(str(duplicate_count("aA11")) + " should equal 2")
    print(str(duplicate_count("ABBA")) + " should equal 2")
