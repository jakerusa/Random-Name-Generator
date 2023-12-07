const names = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack", "Liam", "Olivia", "Noah", "Emma", "Sophia", "Jackson", "Ava", "Lucas", "Isabella", "Oliver",
    "Amelia", "Benjamin", "Mia", "Elijah", "Charlotte", "Henry", "Caden", "Aria", "Ethan", "Scarlett",
    "Alexander", "Luna", "Sebastian", "Evelyn", "James", "Abigail", "Carter", "Chloe", "Mateo", "Grace",
    "Samuel", "Harper", "Daniel", "Emily", "Michael", "Lily", "Logan", "Layla", "Leo", "Avery", "Nathan",
    "Sofia", "David", "Ella", "Joseph", "Riley", "Isaac", "Aubrey", "Lincoln", "Camila"
];

function generateName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const generatedName = names[randomIndex];
    document.getElementById('generatedName').textContent = generatedName;
}
