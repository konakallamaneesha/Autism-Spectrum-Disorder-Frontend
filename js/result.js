document.addEventListener("DOMContentLoaded", function () {

    const result = JSON.parse(localStorage.getItem("asdResult"));

    console.log("Result Data:", result);

    if (!result) {
        document.body.innerHTML =
            "No result found. Please try again.";
        return;
    }

    // Prediction
    document.getElementById("prediction").innerText =
        result.prediction;

    // Probability
    document.getElementById("probability").innerText =
        "ASD Probability: " + result.probability;

    // Risk
    document.getElementById("risk").innerText =
        "Risk Level: " + result.risk;

    // Explanation list
    const list = document.getElementById("explanation");

    list.innerHTML = "";

    if (!result.key_factors ||
        result.key_factors.length === 0) {

        list.innerHTML =
            "<li>No significant indicators</li>";

    } else {

        result.key_factors.forEach(item => {

            const li = document.createElement("li");

            li.innerText = item;

            list.appendChild(li);
        });
    }

    // SHAP IMAGE

    const img = document.getElementById("shapImage");

    if (result.shap_image) {

        console.log("SHAP URL:", result.shap_image);

        let url = result.shap_image;

        if (!url.startsWith("http")) {

            const backendURL =
                "https://autism-spectrum-disorder-backend-10.onrender.com";

            url = backendURL + url;
        }

        img.src = url + "?t=" + new Date().getTime();

        img.style.display = "block";

    } else {

        console.log("No SHAP image found");

        img.style.display = "none";
    }
});