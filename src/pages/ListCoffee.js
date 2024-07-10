
import CoffeeSearch from "../components/CoffeSearch";
import React, { useState, useEffect } from "react";
import { getCoffees, updateCoffee, deleteCoffee } from "../services/api";
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { CreateTestimonial } from "./CreateTestimonial";

const ListCoffee = ({ username }) => {
    const [coffees, setCoffees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [coffeeEditando, setCoffeeEditando] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedImage, setEditedImage] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [coffeeToDelete, setCoffeeToDelete] = useState(null);
    const [showTestimonialModal, setShowTestimonialModal] = useState(false);
    const [selectedCoffeeId, setSelectedCoffeeId] = useState(null);

    useEffect(() => {
        fetchCoffees();
    }, []);

    const fetchCoffees = async () => {
        try {
            const data = await getCoffees();
            setCoffees(data);
        } catch (error) {
            console.error("Error fetching coffees:", error);
        }
    };

    const handleEditClick = (coffee) => {
        setCoffeeEditando(coffee);
        setEditedName(coffee.name);
        setEditedPrice(coffee.price);
        setEditedDescription(coffee.description);
        setEditedImage(coffee.image64);
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            if (!coffeeEditando || !coffeeEditando.idCoffee) {
                console.error("No coffee selected or coffee ID is undefined.");
                return;
            }
            await updateCoffee(coffeeEditando.idCoffee, {
                name: editedName,
                price: editedPrice,
                description: editedDescription,
                image64: editedImage
            });
            fetchCoffees();
            setShowModal(false);
            setCoffeeEditando(null);
        } catch (error) {
            console.error(`Error updating coffee with ID ${coffeeEditando.idCoffee}:`, error);
        }
    };

    const handleDeleteClick = (coffee) => {
        console.log("Deleting coffee:", coffee);
        setCoffeeToDelete(coffee);
        setShowDeleteConfirmation(true);
    };
    
    const handleDeleteConfirm = async () => {
        try {
            console.log("Confirming deletion of coffee:", coffeeToDelete);
            if (!coffeeToDelete || !coffeeToDelete.idCoffee) {
                console.error("No coffee selected or coffee ID is undefined.");
                return;
            }
            await deleteCoffee(coffeeToDelete.idCoffee);
            fetchCoffees();
            setShowDeleteConfirmation(false);
            setCoffeeToDelete(null);
        } catch (error) {
            console.error(`Error deleting coffee with ID ${coffeeToDelete.idCoffee}:`, error);
        }
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
        setCoffeeEditando(null);
    };

    const handleCloseDeleteConfirmation = () => {
        setShowDeleteConfirmation(false);
        setCoffeeToDelete(null);
    };

    const handleAddTestimonialClick = (coffeeId) => {
        setSelectedCoffeeId(coffeeId);
        setShowTestimonialModal(true);
    };

    const handleTestimonialSubmit = () => {
        setShowTestimonialModal(false);
        fetchCoffees(); // Puedes actualizar la lista de cafés o testimonios aquí si es necesario
    };

    return (
        <>
            <h3 className="mb-3">Coffees</h3>
            {/* Componente para buscar o filtrar cafés, por ejemplo CoffeeSearch */}

            {coffees.map((coffee) => (
                <div key={coffee.idCoffee} className="mb-3 border rounded p-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <div>
                            {coffee.image64 && (
                                <img
                                    src={`data:image/png;base64, ${coffee.image64}`}
                                    alt="Coffee"
                                    style={{ maxWidth: "100px" }}
                                />
                            )}
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <div className="fw-bold">{coffee.name}</div>
                            <div>Precio: {coffee.price}</div>
                            <div>Descripción: {coffee.description}</div>
                            
                            <div className="text-muted-small">
                                {/* Botón para editar */}
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="cursor-pointer"
                                    onClick={() => handleEditClick(coffee)}
                                />
                                {/* Botón para eliminar */}
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="cursor-pointer ms-2"
                                    onClick={() => handleDeleteClick(coffee)}
                                />
                                {/* Botón para agregar testimonio */}
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="cursor-pointer ms-2"
                                    onClick={() => handleAddTestimonialClick(coffee.idCoffee)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Modal de Edición */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Café</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPrice}
                                onChange={(e) => setEditedPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicImage">
                            <Form.Label>Imagen (base64)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={editedImage}
                                onChange={(e) => setEditedImage(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de Confirmación de Eliminación */}
            <Modal show={showDeleteConfirmation} onHide={handleCloseDeleteConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar este café?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteConfirmation}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal para Crear Testimonio */}
            <CreateTestimonial
                show={showTestimonialModal}
                onHide={() => setShowTestimonialModal(false)}
                onSubmit={handleTestimonialSubmit}
                coffeeId={selectedCoffeeId}
                preloadedUsername={username}
            />
        </>
    );
};

export { ListCoffee };