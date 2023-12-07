const names = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"
];

function generateName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const generatedName = names[randomIndex];
    document.getElementById('generatedName').textContent = generatedName;
}
