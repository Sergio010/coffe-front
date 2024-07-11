import axios from 'axios';
import { useContext } from 'react'; 
import { AuthContext } from "../auth/AuthContext";
import React, { useRef } from 'react';

import { AuthProvider } from '../auth/AuthContext';


export async function getCoffees() {
    const res = await fetch("http://localhost:8080/api/coffee/listCoffeesWithTestimonials"); 
    const data = await res.json();
    return data;
}

export async function loginAccount(login) {
    try {
        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            body: JSON.stringify(login), 
            headers: {
                "Content-Type": "application/json" // "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); 
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error); 
        return null;
    }
}


export async function createCoffee(coffeeData) {
    try {
        const res = await axios.post('http://localhost:8080/api/coffee/createCoffee', coffeeData);
        return res.data; 
    } catch (error) {
        console.error('Error creating coffee:', error);
        throw error; 
    }
}

export async function createUser(userdata) {
    try {
        const res = await axios.post('http://localhost:8080/api/users/create', userdata);
        return res.data; 
    } catch (error) {
        console.error('Error creating coffee:', error);
        throw error; 
    }
}



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
        console.log("Updating coffee with ID:", id);
        console.log("Updated data:", coffeeData);

        const res = await axios.put(`http://localhost:8080/api/coffee/updateCoffee/${id}`, coffeeData);
        console.log("Update response:", res.data);

        return res.data; 
    } catch (error) {
        console.error(`Error updating coffee with ID ${id}:`, error);
        throw error; 
    }
}


export async function deleteCoffee(id, coffeeData) {
    try {
        const res = await axios.delete(`http://localhost:8080/api/coffee/deleteCoffee/${id}`, coffeeData);
        return res.data; 
    } catch (error) {
        console.error(`Error updating coffee with ID ${id}:`, error);
        throw error; 
    }
}

export async function createTestimonial(testimonialData) {
    try {
        const res = await axios.post('http://localhost:8080/api/testimonials/create', testimonialData, {
        });
        return res.data; 
    } catch (error) {
        console.error('Error creating testimonial:', error);
        throw error;
    }
}

export async function getCoffeByName(name,coffeeData) {
    try {
        const res = await axios.delete(`http://localhost:8080/api/coffee/getCoffeeByName/${name}`, coffeeData);
        return res.data; 
    } catch (error) {
        throw error; 
    }
}