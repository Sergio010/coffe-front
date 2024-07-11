import React, { useRef } from 'react';
import axios from 'axios';

const FormCoffee = ({ onSubmit }) => {
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const coffeeData = {
            name: formData.get('name'),
            price: formData.get('price'),
            description: formData.get('description'),
            image64: formData.get('image64')
        };

        axios.post('http://localhost:8080/api/coffee/createCoffee', coffeeData)
            .then(() => {
                onSubmit(); 
                formRef.current.reset(); 
            })
            .catch(error => {
                console.error('Error creating coffee:', error);
            });
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3 className="mb-3">Nuevo café</h3>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input id="name" name="name" type="text" className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Precio</label>
                        <input id="price" name="price" type="number" className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <textarea id="description" name="description" className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image64" className="form-label">Imagen</label>
                        <input id="image64" name="image64" type="file" className="form-control" required />
                    </div>

                    <div className="text-end mt-3">
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCoffee;
