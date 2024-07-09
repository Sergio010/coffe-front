
import axios from "axios";


export async function getUsers(){
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    return data;
}


export async function getCoffees() {
    const res = await fetch("http://localhost:8080/api/coffee/listCoffeesWithTestimonials"); // Reemplaza con la URL de tu API de cafés
    const data = await res.json();
    return data;
}



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


export async function createCoffee(coffeeData) {
    try {
        const res = await axios.post('http://localhost:8080/api/coffee/createCoffee', coffeeData);
        return res.data; // Puedes devolver los datos si es necesario
    } catch (error) {
        console.error('Error creating coffee:', error);
        throw error; // Puedes manejar el error aquí o propagarlo según sea necesario
    }
}

