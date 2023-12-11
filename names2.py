# Specify the path to your CSV file
file_path = './names.csv'

# Read the CSV file
with open(file_path, 'r') as file:
    # Extract the fourth column from each line
    fourth_column_list = [line.strip().split('\t')[3].capitalize() for line in file]

# Output the list of fourth column values
print(fourth_column_list)

# Additional functionality, if needed
def generate_name():
    import random
    
    # Randomly select a name from the list
    generated_name = random.choice(fourth_column_list)
    print("Generated Name:", generated_name)

# Call the additional functionality
generate_name()
