import logo from './logo.svg';
import './App.css';

import { Col, Container, Row } from 'reactstrap';
import ListCoffees from './components/ListCoffees';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FormCoffee from './components/FormCoffee';

function App() {
  const [coffees, setCoffees] = useState([]);

  const cargarCoffees = () => {
    axios.get('http://localhost:8080/api/coffee/listCoffeesWithTestimonials')
      .then(response => setCoffees(response.data))
      .catch(error => console.error('Error fetching coffees:', error));
  }

  useEffect(cargarCoffees, []);

  const onSubmitForm = (data) => {
    axios.post('http://localhost:8080/api/coffee/createCoffee', data)
      .then(() => cargarCoffees())
      .catch(error => console.error('Error creating coffee:', error));
  };


  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <ListCoffees coffees={coffees} />
          </Col>
          <Col md={6}>
            <FormCoffee onSubmit={onSubmitForm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
