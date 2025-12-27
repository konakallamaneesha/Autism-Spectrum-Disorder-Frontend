// Read backend response from localStorage
const result = JSON.parse(localStorage.getItem("asdResult"));

if (result) {

    document.getElementById("prediction").innerText =
        result.prediction;

    document.getElementById("probability").innerText =
        "ASD Probability: " + result.probability;

    // ⭐ ADD THIS ⭐
    document.getElementById("severity").innerText =
        "Severity Level: " + result.severity;

    const list = document.getElementById("explanation");

    if (!result.key_factors || result.key_factors.length === 0) {
        list.innerHTML = "<li>No significant indicators</li>";
    } else {
        result.key_factors.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });
    }
}

function goHome() {
    window.location.href = "index.html";
}
