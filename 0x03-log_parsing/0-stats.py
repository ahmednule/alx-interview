#!/usr/bin/python3
"""0-stats.py
    Reads stdin line by line and computes metrics:
        - Input format: * <status code> <file size>
    Prints total file size and possible status codes in format:
        File size: <total size>
        <status code>: <number>
"""

import fileinput


def print_logs(file_size: int, status_codes: dict):
    """Print logs
        Args: file_size (int): Total file size
                status_codes (dict): Dictionary of status codes
                Returns: None
        """
    print("File size: {}".format(file_size))
    for key, value in sorted(status_codes.items()):
        if (value > 0):
            print("{}: {}".format(key, value))


def parse_log():
    """Parse logs about status codes and file size from stdin
        Args: None
                Returns: None
        """
    file_size = 0
    status_codes = {
        "200": 0,
        "301": 0,
        "400": 0,
        "401": 0,
        "403": 0,
        "404": 0,
        "405": 0,
        "500": 0}
    current_line = 0

    try:
        for line in fileinput.input():
            data = line.split()
            if (len(data) < 2):
                continue
            file_size += int(data[-1])
            status = data[-2]
            if (status in status_codes):
                status_codes[status] += 1
            current_line += 1
            if (current_line % 10 == 0):
                print_logs(file_size, status_codes)
    except KeyboardInterrupt:
        pass
    print_logs(file_size, status_codes)


if __name__ == "__main__":
    parse_log()
