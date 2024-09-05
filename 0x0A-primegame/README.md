# 0x0A. Prime Game

## Description

This project involves solving a game theory problem using prime numbers and algorithm optimization. The challenge is to determine the winner of a game between two players, Maria and Ben, who take turns removing prime numbers and their multiples from a set of consecutive integers. The goal is to leverage your understanding of prime numbers, the Sieve of Eratosthenes, game theory, and dynamic programming to efficiently solve the problem.

## Project Requirements

- All code will be interpreted/compiled on Ubuntu 20.04 LTS using Python 3.4.3.
- Your code should follow the PEP 8 style guide (version 1.7.x).
- All files must end with a new line and be executable.
- The first line of each file should be: `#!/usr/bin/python3`.
- No external libraries or packages can be imported for this task.
- A `README.md` file at the root of the project folder is mandatory.

## Game Rules

Maria and Ben play `x` rounds of a game with the following rules:

1. The game starts with a set of consecutive integers from `1` to `n`.
2. Maria always goes first, and both players play optimally.
3. A player chooses a prime number from the set and removes that number along with all its multiples.
4. The player who cannot make a move loses the game.

Given `x` rounds of the game, where `n` may vary for each round, you need to determine who wins the most rounds.

### Function Prototype

```python
def isWinner(x, nums):
x: Number of rounds.
nums: List of integers representing the upper limit (n) for each round.
Return: The name of the player that won the most rounds ("Maria" or "Ben"), or None if there is no winner.
Example
python
Copy code
x = 3
nums = [4, 5, 1]
First round (n = 4): Maria picks 2 and removes 2, 4; Ben picks 3 and removes 3. Ben wins.
Second round (n = 5): Maria picks 2 and removes 2, 4; Ben picks 3 and removes 3; Maria picks 5 and removes 5. Maria wins.
Third round (n = 1): Ben wins because there are no prime numbers for Maria to choose.
Result: Ben wins the most rounds.

Hints for Solving
Prime Numbers:

Understand what prime numbers are and how to efficiently find them within a range.
Use the Sieve of Eratosthenes algorithm to quickly generate a list of prime numbers up to the maximum possible value of n.
Game Theory:

Consider how the choice of a prime number affects future moves. Optimal play involves forcing the opponent into a position where they cannot make a move.
Identify patterns in winning and losing positions to build a strategy.
Dynamic Programming/Memoization:

Use memoization to store results of previously computed rounds to avoid redundant calculations.
Dynamic programming may help in determining optimal moves based on previously calculated game states.
Python Programming:

Use loops and conditional statements to implement game logic.
Use lists or arrays to keep track of which numbers have been removed from the set.
Resources
Prime Numbers and Sieve of Eratosthenes:

Prime Numbers: Introduction
Sieve of Eratosthenes in Python
Game Theory Basics:

Game Theory Introduction
Dynamic Programming:

Dynamic Programming with Python Examples
Python Official Documentation:

Python Lists
Example Usage
To test your solution, create a file named main_0.py with the following content:

python
Copy code
#!/usr/bin/python3

isWinner = __import__('0-prime_game').isWinner

print("Winner: {}".format(isWinner(5, [2, 5, 1, 4, 3])))
Run the file to see the expected output:

bash
Copy code
$ ./main_0.py
Winner: Ben
Repository Structure
GitHub Repository: alx-interview
Directory: 0x0A-primegame
File: 0-prime_game.py
