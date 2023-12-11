# Specify the path to your CSV file
file_path = './names.csv'

# Read the CSV file
with open(file_path, 'r') as file:
    # Extract the fourth column from each line
    fourth_column_list = [line.strip().split('\t')[0].split(",")[3].lower().capitalize() for line in file]

# Output the list of fourth column values
print(fourth_column_list)

file_path = './output.txt'

# Example list of strings (replace this with your actual list)
list_of_strings = ["Value1", "Value2", "Value3"]
f = open("output.txt", "a")
for element in fourth_column_list:
    f.write(element, ",")
f.close()

# # Open the file in write mode
# with open(file_path, 'w') as file:
#     # Redirect the console output to the file
#     file.write("\n")