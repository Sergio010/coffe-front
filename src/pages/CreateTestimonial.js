import { AuthContext } from "../auth/AuthContext";
import React, { useRef, useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';


const CreateTestimonial = ({ show, onHide, onSubmit, coffeeId }) => {
    const formRef = useRef();
    const { auth } = useContext(AuthContext);

    const [testimonialData, setTestimonialData] = useState({
        idTestimonials: null,
        username: auth.username,
        testimonial: "",
        idCoffee: coffeeId,
        coffee: null,
        user: null
    });
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/testimonials/create', {
                username: auth.username,
                testimonial: testimonialData.testimonial,
                idCoffee: coffeeId
            });

            // Actualizar los datos del testimonio con la respuesta de la API
            setTestimonialData({
                ...testimonialData,
                idTestimonials: response.data.idTestimonials,
                coffee: response.data.coffee, // Actualizar coffee
                user: response.data.user, // Actualizar user
            });

            onSubmit(); // Ejecutar función onSubmit después de crear el testimonio
            formRef.current.reset(); // Limpiar el formulario
            setError(null); // Limpiar errores
            onHide(); // Ocultar modal después de operación exitosa
        } catch (error) {
            setError('Error al crear el testimonio: ' + error.message); // Manejo de errores
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Testimonio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    {/* Campo de Testimonio (editable) */}
                    <Form.Group controlId="testimonial" className="mb-3">
                        <Form.Label>Testimonio</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={testimonialData.testimonial}
                            onChange={(e) => setTestimonialData({ ...testimonialData, testimonial: e.target.value })}
                            required
                        />
                    </Form.Group>
                    {/* Mostrar errores */}
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Botón Cancelar */}
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                {/* Botón Crear */}
                <Button variant="primary" onClick={handleSubmit}>
                    Crear
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export{CreateTestimonial};