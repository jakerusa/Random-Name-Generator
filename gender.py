# Specify the path to your CSV file
file_path = './names.csv'

# Read the CSV file and extract gender and names
with open(file_path, 'r') as file:
    lines = [line.strip().split(',') for line in file]

# Separate names based on gender
male_names = [line[3].lower().capitalize() for line in lines if line[1].lower() == 'male']
female_names = [line[3].lower().capitalize() for line in lines if line[1].lower() == 'female']

# Output the list of fourth column values
print(male_names)
print(female_names)

male_file_path = 'male_names.txt'
female_file_path = 'female_names.txt'

# Example list of strings (replace this with your actual list)

with open(male_file_path, "w") as file:
    file.write('')

f = open(male_file_path, "a")
for element in male_names:
    f.write("\"" + element + "\", ")
f.close()

# Example list of strings (replace this with your actual list)

with open(female_file_path, "w") as file:
    file.write('')

f = open(female_file_path, "a")
for element in female_names:
    f.write("\"" + element + "\", ")
f.close()

# # Open the file in write mode
# with open(file_path, 'w') as file:
#     # Redirect the console output to the file
#     file.write("\n")
