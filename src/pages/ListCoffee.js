
import CoffeeSearch from "../components/CoffeSearch";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { getCoffees, updateCoffee } from "../services/api";

const ListCoffee = () => {
    const [coffees, setCoffees] = useState([]);
    const [filteredCoffees, setFilteredCoffees] = useState([]);

    useEffect(() => {
        fetchCoffees();
    }, []);

    const fetchCoffees = async () => {
        try {
            const data = await getCoffees();
            setCoffees(data);
            setFilteredCoffees(data); // Inicialmente, mostrar todos los cafés
        } catch (error) {
            console.error("Error fetching coffees:", error);
        }
    };

    const handleUpdateCoffee = async (id, updatedCoffeeData) => {
        try {
            await updateCoffee(id, updatedCoffeeData);
            fetchCoffees(); // Actualizar la lista de cafés después de la actualización
        } catch (error) {
            console.error(`Error updating coffee with ID ${id}:`, error);
        }
    };

    const handleFilterCoffees = (filteredData) => {
        setFilteredCoffees(filteredData);
    };

    return (
        <>
            <h3 className="mb-3">Coffees</h3>
            <CoffeeSearch setCoffees={handleFilterCoffees} />

            {filteredCoffees.map(coffee => (
                <div key={coffee.id} className="mb-3 border rounded p-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <div>
                            {coffee.image64 && (
                                <img src={`data:image/png;base64, ${coffee.image64}`} alt="Coffee" style={{ maxWidth: '100px' }} />
                            )}
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <div className="fw-bold">{coffee.name}</div>
                            <div>Precio: {coffee.price}</div>
                            <div>Descripción: {coffee.description}</div>
                        </div>
                        <div className="text-muted-small">
                            <FontAwesomeIcon
                                icon={faEdit}
                                className="cursor-pointer"
                                onClick={() => handleUpdateCoffee(coffee.id, { ...coffee, name: 'Nuevo Nombre' })}
                            />
                            <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export { ListCoffee };