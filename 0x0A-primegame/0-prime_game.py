#!/usr/bin/python3
"""
0x0A. Prime Game
"""


def isWinner(x, nums):
    """
    Determines the winner of the most rounds of a prime game
    """

    # A helper function that returns True if n is prime, False otherwise
    if not nums or x < 1:
        return None
    n = max(nums)
    test_case = [True for _ in range(max(n + 1, 2))]
    for i in range(2, int(pow(n, 0.5)) + 1):
        if not test_case[i]:
            continue
        for j in range(i * i, n + 1, i):
            test_case[j] = False
    test_case[0] = test_case[1] = False
    c = 0
    for i in range(len(test_case)):
        if test_case[i]:
            c += 1
        test_case[i] = c
    player1 = 0
    for n in nums:
        player1 += test_case[n] % 2 == 1
    if player1 * 2 == len(nums):
        return None
    if player1 * 2 > len(nums):
        return "Maria"
    return "Ben"
