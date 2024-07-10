import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CreateTestimonial } from './CreateTestimonial';

const ListTestimonials = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleTestimonialCreated = () => {
        // Lógica para actualizar la lista de testimonios después de la creación
    };

    return (
        <>
           
        </>
    );
};

export { ListTestimonials };
