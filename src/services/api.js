export async function loginAccount(login) {
    try {
        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            body: JSON.stringify(login), // Corregido: No es JSON.stringify{login}, sino JSON.stringify(login)
            headers: {
                "Content-Type": "application/json" // Corregido: "aplicaction/json" debe ser "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Corregido: Debe ser res.json(), no res.JSON()
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error); // Corregido: console.log(error) -> console.error(error)
        return null;
    }
}
