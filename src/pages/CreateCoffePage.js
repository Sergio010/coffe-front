import React, { useRef, useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import axios from 'axios';


const CreateCoffeePage = ({ onSubmit }) => {
    const formRef = useRef();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [foto, setFoto] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('desc', description);
        formData.append('foto', foto);

        try {
            await axios.post('http://localhost:8080/api/coffee/createCoffee', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onSubmit(); // Llamar a la función prop onSubmit después de la creación exitosa
            formRef.current.reset(); // Reiniciar el formulario
            setError(null); // Limpiar errores
        } catch (error) {
            setError('Error al crear el café: ' + error.message);
        }
    };

    const handleFileChange = (event) => {
        setFoto(event.target.files[0]);
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3 className="mb-3">Nuevo café</h3>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input id="name" name="name" type="text" className="form-control" required
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Precio</label>
                        <input id="price" name="price" type="number" className="form-control" required
                            value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <textarea id="description" name="description" className="form-control" required
                            value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="foto" className="form-label">Imagen</label>
                        <input id="foto" name="foto" type="file" className="form-control" required
                            onChange={handleFileChange} />
                    </div>

                    <div className="text-end mt-3">
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>
                </form>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
        </div>
    );
};



export { CreateCoffeePage };
