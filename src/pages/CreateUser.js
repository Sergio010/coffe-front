import React, { useRef, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import axios from 'axios';

const CreateUser = ({ onSubmit }) => {
    const formRef = useRef();
    const { auth } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const userData = {
            username: formData.get('username'),
            disabled: formData.get('disabled') === 'on' ? 1 : 0,
            email: formData.get('email'),
            locked: formData.get('locked') === 'on' ? 1 : 0,
            password: formData.get('password')
        };

        await sendUserData(userData);
    };

    const sendUserData = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/create', userData, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`,
                    'Content-Type': 'application/json'
                }
            });
            onSubmit();
            formRef.current.reset();
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3 className="mb-3">Crea tu cuenta</h3>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Nombre de usuario</label>
                        <input id="username" name="username" type="text" className="form-control" required />
                    </div>

                    {/* Ocultar visualmente los campos de checkbox si están deshabilitados */}
                    <div className="mb-3 visually-hidden">
                        <label htmlFor="disabled" className="form-label">Deshabilitado</label>
                        <input id="disabled" name="disabled" type="checkbox" className="form-check-input" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input id="email" name="email" type="email" className="form-control" />
                    </div>

                    {/* Ocultar visualmente los campos de checkbox si están bloqueados */}
                    <div className="mb-3 visually-hidden">
                        <label htmlFor="locked" className="form-label">Bloqueado</label>
                        <input id="locked" name="locked" type="checkbox" className="form-check-input" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input id="password" name="password" type="password" className="form-control" required />
                    </div>

                    <div className="text-end mt-3">
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { CreateUser };
