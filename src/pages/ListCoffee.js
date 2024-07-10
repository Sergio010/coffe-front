import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { getCoffees } from "../services/api";

const ListCoffee = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        async function fetchCoffees() {
            try {
                const data = await getCoffees();
                setCoffees(data);
            } catch (error) {
                console.error("Error fetching coffees:", error);
            }
        }

        fetchCoffees();
    }, []);

    return (
        <>
            <h3 className="mb-3">Coffees</h3>
            <input ></input>
            {coffees.map(coffee => (
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
                            <FontAwesomeIcon icon={faEdit} className="cursor-pointer"/>
                            <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2"/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export { ListCoffee }; // Exporta el componente ListCoffee
