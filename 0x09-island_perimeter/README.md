# 0. Island Perimeter

This project focuses on applying knowledge of algorithms, data structures (specifically matrices or 2D lists), and iterative or conditional logic to solve a geometric problem within a grid context. The objective is to calculate the perimeter of a single island in a grid, where the grid is represented by a 2D array of integers. Understanding how to navigate and analyze 2D arrays and apply logical operations to determine the conditions for perimeter calculation is crucial for this task.

## Concepts Needed

### 1. 2D Arrays (Matrices)
- **Accessing and Iterating Over Elements**: Learn how to traverse a 2D array.
- **Navigating Through Adjacent Cells**: Understand how to move horizontally and vertically to adjacent cells.

### 2. Conditional Logic
- **Determining Cell Contribution**: Apply conditions to check whether a cell contributes to the perimeter of the island.

### 3. Counting Techniques
- **Counting Perimeter Edges**: Develop a method to count the edges that form the island’s perimeter.

### 4. Problem-Solving Strategies
- **Breaking Down the Problem**: Identify land cells and calculate their contribution to the perimeter step-by-step.

### 5. Python Programming
- **Nested Loops**: Use nested loops for iterating over grid cells.
- **Conditional Statements**: Utilize conditional statements to check the status of adjacent cells.

## Resources

- **Python Official Documentation:**
  - [Nested Lists](https://docs.python.org/3/tutorial/datastructures.html#nested-lists): Understanding how to work with lists within lists in Python.
  
- **GeeksforGeeks Articles:**
  - [Python Multi-dimensional Arrays](https://www.geeksforgeeks.org/multidimensional-arrays-in-python/): A guide to working with 2D arrays in Python effectively.
  
- **TutorialsPoint:**
  - [Python Lists](https://www.tutorialspoint.com/python/python_lists.htm): Explanation of creating, accessing, and manipulating lists in Python, essential for grid operations.
  
- **YouTube Tutorials:**
  - [Python 2D Arrays and Lists](https://www.youtube.com/results?search_query=python+2d+arrays+and+lists)

## Additional Resources

- **Mock Technical Interviews**: Practice and preparation for coding interviews.

## Requirements

### General
- Allowed editors: `vi`, `vim`, `emacs`
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using Python 3.4.3.
- All files should end with a new line.
- The first line of all files should be exactly `#!/usr/bin/python3`.
- A `README.md` file, at the root of the project folder, is mandatory.
- Your code should use the PEP 8 style (version 1.7).
- You are not allowed to import any modules.
- All modules and functions must be documented.
- All files must be executable.

## Task

### 0. Island Perimeter

**Mandatory**

Create a function `def island_perimeter(grid):` that returns the perimeter of the island described in the grid:

- `grid` is a list of list of integers:
  - `0` represents water.
  - `1` represents land.
- Each cell is square, with a side length of `1`.
- Cells are connected horizontally/vertically (not diagonally).
- The grid is rectangular, with its width and height not exceeding `100`.
- The grid is completely surrounded by water.
- There is only one island (or nothing).
- The island doesn’t have “lakes” (water inside that isn’t connected to the water surrounding the island).

### Example

```python
guillaume@ubuntu:~/0x09$ cat 0-main.py
#!/usr/bin/python3
"""
0-main
"""
island_perimeter = __import__('0-island_perimeter').island_perimeter

if __name__ == "__main__":
    grid = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    print(island_perimeter(grid))
guillaume@ubuntu:~/0x09$ 
guillaume@ubuntu:~/0x09$ ./0-main.py
12
guillaume@ubuntu:~/0x09$ 
