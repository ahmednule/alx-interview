---

# Coin Change Problem

## Project Overview

This project provides a solution to the classic **Coin Change Problem**: Given a set of coin denominations and a target amount, the goal is to determine the minimum number of coins required to reach the target. The challenge lies in finding the optimal solution efficiently, considering various combinations of coin values.

### Problem Statement

You are given a list of coins of different denominations and a target amount. Your task is to write a function that determines the fewest number of coins required to reach exactly the target amount.

### Prototype

```python
def makeChange(coins, total):
```

### Function Description

- **`makeChange(coins, total)`**:
  - **Parameters**:
    - `coins`: A list of integers representing the denominations of the coins you have.
    - `total`: An integer representing the target amount you need to reach.
  - **Returns**:
    - The fewest number of coins needed to meet the target amount.
    - If the total is `0` or less, the function returns `0`.
    - If the target amount cannot be met with any combination of coins, the function returns `-1`.

### Key Assumptions

1. The value of each coin in the `coins` list is always an integer greater than `0`.
2. You have an infinite supply of each type of coin.
3. The solution is expected to be efficient, given that the runtime will be evaluated.

## Examples

### Example 1

```python
makeChange([1, 2, 25], 37)
```

**Explanation**:
- The target amount is `37`.
- The fewest number of coins to reach `37` using coins of values `[1, 2, 25]` is `7`.
  - `25 + 10 + 2 = 37`
- Therefore, the function returns `7`.

### Example 2

```python
makeChange([1256, 54, 48, 16, 102], 1453)
```

**Explanation**:
- The target amount is `1453`.
- It is not possible to reach `1453` using any combination of the given coin denominations.
- Therefore, the function returns `-1`.

## Approach

To solve this problem, the algorithm typically uses a **dynamic programming** approach:

1. **Initialization**:
   - Create an array `dp` where `dp[i]` will store the minimum number of coins required to make the amount `i`.
   - Initialize the array with a large number (representing infinity), except for `dp[0]`, which should be `0` (since no coins are needed to make the amount `0`).

2. **Fill the DP Array**:
   - Iterate through each coin in the `coins` list.
   - For each coin, update the `dp` array by comparing the current value with the value obtained by including the coin.

3. **Result**:
   - If `dp[total]` is still infinity, return `-1` (since the amount cannot be formed with the given coins).
   - Otherwise, return `dp[total]`, which will have the minimum number of coins needed.

### Pseudocode

```python
def makeChange(coins, total):
    if total <= 0:
        return 0

    # Initialize dp array with a large number (infinity)
    dp = [float('inf')] * (total + 1)
    dp[0] = 0

    # Fill dp array
    for coin in coins:
        for i in range(coin, total + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[total] if dp[total] != float('inf') else -1
```

## Performance

The time complexity of this solution is `O(n * m)`, where `n` is the target amount (`total`) and `m` is the number of coins. This is efficient given that the problem requires checking multiple combinations of coin values to find the optimal solution.

## License

This project is licensed under the [ALX Africa License](LICENSE).

## Contact

For any inquiries, suggestions, or feedback, feel free to contact the author:

**Ahmed Nule**  
Email: [nuleahmed6@gmail.com](mailto:nuleahmed6@gmail.com)

---