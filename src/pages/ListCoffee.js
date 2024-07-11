
import React, { useState, useEffect } from "react";
import { getCoffees, updateCoffee, deleteCoffee } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Modal, Card, Accordion } from 'react-bootstrap';
import { CreateTestimonial } from "./CreateTestimonial";
import { faEdit, faTrash, faPlus, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ListCoffee = ({ username }) => {
    const [coffees, setCoffees] = useState([]);
    const [filteredCoffees, setFilteredCoffees] = useState([]);
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
    const [searchTerm, setSearchTerm] = useState('');
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        fetchCoffees();
    }, []);

    const fetchCoffees = async () => {
        try {
            const data = await getCoffees();
            setCoffees(data);
            setFilteredCoffees(data); // Inicializa los cafés filtrados con todos los cafés al inicio
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

            const updatedCoffeeData = {
                name: editedName,
                price: editedPrice,
                description: editedDescription,
                image64: editedImage
            };

            await updateCoffee(coffeeEditando.idCoffee, updatedCoffeeData);
            fetchCoffees();
            setShowModal(false);
            setCoffeeEditando(null);
            setEditedName('');
            setEditedPrice('');
            setEditedDescription('');
            setEditedImage('');

        } catch (error) {
            console.error(`Error updating coffee with ID ${coffeeEditando.idCoffee}:`, error);
        }
    };

    const handleDeleteClick = (coffee) => {
        setCoffeeToDelete(coffee);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteConfirm = async () => {
        try {
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
        setEditedName('');
        setEditedPrice('');
        setEditedDescription('');
        setEditedImage('');
    };

    const handleCloseDeleteConfirmation = () => {
        setShowDeleteConfirmation(false);
        setCoffeeToDelete(null);
    };

    const handleAddTestimonialClick = (coffeeId) => {
        setSelectedCoffeeId(coffeeId);
        setEditedName(''); // Limpiar el nombre al abrir el modal
        setEditedPrice(''); // Limpiar el precio al abrir el modal
        setEditedDescription(''); // Limpiar la descripción al abrir el modal
        setEditedImage(''); // Limpiar la imagen al abrir el modal
        setShowTestimonialModal(true);
    };

    const handleTestimonialSubmit = async () => {
        try {
            // Lógica para enviar el testimonio al servidor

            // Después de enviar el testimonio, cerrar el modal y limpiar los campos
            setShowTestimonialModal(false);
            setEditedName(''); // Limpiar el nombre después de enviar el testimonio
            setEditedPrice(''); // Limpiar el precio después de enviar el testimonio
            setEditedDescription(''); // Limpiar la descripción después de enviar el testimonio
            setEditedImage(''); // Limpiar la imagen después de enviar el testimonio

            // Actualizar la lista de cafés o testimonios si es necesario
            fetchCoffees();
        } catch (error) {
            console.error('Error submitting testimonial:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearchCoffees(e.target.value);
    };

    const handleSearchCoffees = async (value) => {
        try {
            const data = await getCoffees();
            const filteredData = data.filter(coffee =>
                coffee.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCoffees(filteredData);
        } catch (error) {
            console.error("Error fetching coffees:", error);
        }
    };

    const handleToggleAccordion = (coffeeId) => {
        setActiveKey(activeKey === coffeeId ? null : coffeeId);
    };

    return (
        <>
            <br />
            <h3 className="mb-3">Listado de Cafés</h3>

            <Form.Group controlId="formBasicSearch">
                <Form.Control
                    type="text"
                    placeholder="Buscar café por nombre..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </Form.Group>

            {filteredCoffees.map((coffee) => (
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
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="cursor-pointer"
                                    onClick={() => handleEditClick(coffee)}
                                />
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="cursor-pointer ms-2"
                                    onClick={() => handleDeleteClick(coffee)}
                                />
                                <FontAwesomeIcon
                                    icon={activeKey === coffee.idCoffee ? faAngleUp : faAngleDown}
                                    className="cursor-pointer ms-2"
                                    onClick={() => handleToggleAccordion(coffee.idCoffee)}
                                />
                            </div>
                        </div>
                    </div>
                    {activeKey === coffee.idCoffee && (
                        <div className="mt-3">
                            <br></br>
                            <h4>Comentarios</h4>
                            <Button
                                variant="primary"
                                className="mb-2"
                                onClick={() => handleAddTestimonialClick(coffee.idCoffee)}
                            >
                                Comentar
                            </Button>
                            {coffee.testimonials && coffee.testimonials.map((testimonial, index) => (
                                <div key={index} className="border rounded p-2 mb-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="fw-bold">{testimonial.username}</div>
                                        <div>{testimonial.testimonial}</div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    )}
                </div>
            ))}

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