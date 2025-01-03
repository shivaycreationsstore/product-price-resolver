document.getElementById("resolveBtn").addEventListener("click", async () => {
    const inputString = document.getElementById("inputString").value.toUpperCase();
    const output = document.getElementById("output");

    try {
        const response = await fetch("mapping.json");
        const mapping = await response.json();

        const result = [...inputString]
            .map(char => Object.keys(mapping).find(key => mapping[key] === char) || char)
            .join("");

        output.textContent = `Resolved String: ${result}`;
    } catch (error) {
        output.textContent = "Error loading mapping file!";
        console.error(error);
    }
});
