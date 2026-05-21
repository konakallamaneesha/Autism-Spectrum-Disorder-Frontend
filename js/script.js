document.getElementById("asdForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        A1: Number(document.getElementById("A1").value),
        A2: Number(document.getElementById("A2").value),
        A3: Number(document.getElementById("A3").value),
        A4: Number(document.getElementById("A4").value),
        A5: Number(document.getElementById("A5").value),
        A6: Number(document.getElementById("A6").value),
        A7: Number(document.getElementById("A7").value),
        Age_Mons: Number(document.getElementById("Age_Mons").value),
        Sex: Number(document.getElementById("Sex").value),
        Jaundice: Number(document.getElementById("Jaundice").value),
        Family_mem_with_ASD: Number(document.getElementById("Family_mem_with_ASD").value)
    };

    try {

        const backendURL =
            "https://autism-spectrum-disorder-backend-10.onrender.com";

        const response = await fetch(`${backendURL}/predict`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        localStorage.setItem("asdResult", JSON.stringify(result));

        window.location.href = "./result.html";

    } catch (error) {

        alert("Backend not reachable");

        console.error(error);
    }
});