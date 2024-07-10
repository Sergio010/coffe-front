import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { getUsers } from "../services/api";

const ListUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <>
            <h3 className="mb-3">Usuarios</h3>
            {users.map(user => (
                <div key={user.id} className="mb-3 border rounded p-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <div className="flex-grow-1 ms-3">
                            <div className="fw-bold">Username: {user.username}</div>
                            <div>Email: {user.email}</div>
                            <div>Locked: {user.locked ? 'Yes' : 'No'}</div>
                            <div>Disabled: {user.disabled ? 'Yes' : 'No'}</div>
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

export { ListUsers }; // Exporta el componente ListUsers
