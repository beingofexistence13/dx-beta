import os
import re

# Your string
s = """
1. sumon
2. computer-vision
3. natural-language-processing
"""

# Find names after numbers
names = re.findall(r'\d+\.\s+(\w+)', s)

for name in names:
    # Create a directory for each name
    os.makedirs(name, exist_ok=True)
    
    # Create a README file in each directory
    with open(os.path.join(name, 'README.md'), 'w') as f:
        f.write(name)
