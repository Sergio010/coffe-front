import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListCoffees = ({ coffees }) => {
    return (
        <>
            <h3 className="mb-3">Coffees</h3>
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

export default ListCoffees;
