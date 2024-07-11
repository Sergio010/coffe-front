import { Card, Accordion } from 'react-bootstrap';
import { getCoffees } from "../services/api";
import React, { useState, useEffect } from "react";


const ListTestimonials = () => {
    const [coffees, setCoffees] = useState([]);

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

    return (
        <>
            <h3>Listado de Cafés y Testimonios</h3>

            {coffees.map((coffee) => (
                <Accordion key={coffee.idCoffee}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={coffee.idCoffee.toString()}>
                            {coffee.name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={coffee.idCoffee.toString()}>
                            <Card.Body>
                                <h5>Testimonios:</h5>
                                {coffee.testimonials.map((testimonial) => (
                                    <div key={testimonial.idTestimonial}>
                                        <p>{testimonial.testimonial}</p>
                                        <p>Usuario: {testimonial.username}</p>
                                    </div>
                                ))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            ))}

        </>
    );
};

export { ListTestimonials };
