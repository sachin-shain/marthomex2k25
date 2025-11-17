# File paths
input_file = "events.html"       # replace with your source file
output_file = "output.txt"     # file to store matching lines

# Open the input file and output file
with open(input_file, "r", encoding="utf-8") as infile, open(output_file, "w", encoding="utf-8") as outfile:
    for line in infile:
        if line.strip().startswith('<img src="images/stalls/'):
            outfile.write(line)  # write matching line to output

# Print the contents of the output file
with open(output_file, "r", encoding="utf-8") as f:
    content = f.read()
    print(content)
