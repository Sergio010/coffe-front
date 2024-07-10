import axios from 'axios';
import { useContext } from 'react'; 
import { AuthContext } from "../auth/AuthContext";
import React, { useRef } from 'react';

import { AuthProvider } from '../auth/AuthContext';
/*
export async function getUsers(){
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    return data;
}
*/

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

export async function createUser(userdata) {
    try {
        const res = await axios.post('http://localhost:8080/api/users/create', userdata);
        return res.data; // Puedes devolver los datos si es necesario
    } catch (error) {
        console.error('Error creating coffee:', error);
        throw error; // Puedes manejar el error aquí o propagarlo según sea necesario
    }
}


// Esta función getUsers debe ser parte de un componente funcional de React o un hook personalizado
export async function getUsers() {
    try {
        const response = await axios.get('http://localhost:8080/api/users/getAllUsers', {
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function updateCoffee(id, coffeeData) {
    try {
        const res = await axios.put(`http://localhost:8080/api/coffee/updateCoffee/${id}`, coffeeData);
        return res.data; // Puedes devolver los datos si es necesario
    } catch (error) {
        console.error(`Error updating coffee with ID ${id}:`, error);
        throw error; // Puedes manejar el error aquí o propagarlo según sea necesario
    }
}

export async function deleteCoffee(id, coffeeData) {
    try {
        const res = await axios.delete(`http://localhost:8080/api/coffee/deleteCoffee/${id}`, coffeeData);
        return res.data; // Puedes devolver los datos si es necesario
    } catch (error) {
        console.error(`Error updating coffee with ID ${id}:`, error);
        throw error; // Puedes manejar el error aquí o propagarlo según sea necesario
    }
}

export async function createTestimonial(testimonialData) {
    try {
        const res = await axios.post('http://localhost:8080/api/testimonials/create', testimonialData, {
        });
        return res.data; // Devolver los datos del testimonio creado
    } catch (error) {
        console.error('Error creating testimonial:', error);
        throw error;
    }
}